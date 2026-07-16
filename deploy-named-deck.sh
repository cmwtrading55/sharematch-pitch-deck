#!/usr/bin/env bash
# Deploys the private investor edition (names FootballCo) to deck.sharematch.me.
# CF Pages project: sm-deck (org account dev@sharematch.me), direct upload.
# The public deck at pitch-deck.sharematch.me deploys separately via git push
# (CF Pages project sm-pitch-deck builds from ShareMatch/sharematch-pitch-deck).
set -euo pipefail
cd "$(dirname "$0")"

WRANGLER="${WRANGLER:-$HOME/developer/sharematch/sharematch-app/node_modules/.bin/wrangler}"
[ -x "$WRANGLER" ] || WRANGLER="npx wrangler"

DECK_VARIANT=named npx next build

# Whole host is private: noindex header + robots disallow.
printf '/*\n  X-Robots-Tag: noindex, nofollow\n' > out/_headers
printf 'User-agent: *\nDisallow: /\n' > out/robots.txt

# Stage outside the repo so wrangler ignores this repo's wrangler.toml
# (it names a different Pages project).
STAGE=$(mktemp -d)
cp -r out/. "$STAGE"/
(
  cd "$STAGE"
  CLOUDFLARE_API_TOKEN=$(cat ~/.claude/secrets/cf_dev_token) \
  CLOUDFLARE_ACCOUNT_ID=d7821c8b4ee5debc2236220f79819d6b \
  $WRANGLER pages deploy . --project-name=sm-deck --branch=main --commit-dirty=true
)
rm -rf "$STAGE"

# Leave the working tree on the public build so a later git-triggered build
# never picks up named artefacts locally.
npx next build >/dev/null
echo "Done: https://deck.sharematch.me"
