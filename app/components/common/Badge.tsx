interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "amber" | "muted";
  className?: string;
}

export default function Badge({
  children,
  variant = "emerald",
  className = "",
}: BadgeProps) {
  const variants = {
    emerald:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    amber:
      "bg-amber-500/10 text-amber-400 border-amber-500/20",
    muted:
      "bg-white/5 text-text-secondary border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
