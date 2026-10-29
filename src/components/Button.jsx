const variants = {
  primary: "bg-principal text-white hover:opacity-90",
  outline: "border border-borde hover:border-principal hover:text-principal",
  danger: "border border-red-500/40 text-red-400 hover:bg-red-500/10",
};

function Button({
  variant = "primary",
  type = "button",
  className = "",
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
