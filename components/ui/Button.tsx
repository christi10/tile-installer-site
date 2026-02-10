import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  size = "default",
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-heading font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer rounded-lg";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20",
    outline:
      "border-2 border-text-light text-text-light hover:border-accent hover:text-accent",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
