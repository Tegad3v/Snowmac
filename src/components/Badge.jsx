function Badge({ className = "text-brandGold", children, type = "line" }) {
  return (
    <div
      className={`${className} group inline-flex items-center gap-3
         text-[12px] md:text-[14px]
        font-inter
        ${
          type === "border"
            ? "border border-light rounded-full px-3 py-1.5 md:px-4 md:py-2 bg-gray-50/10"
            : "relative before:h-px before:w-6 md:before:w-8 before:bg-brandGold"
        }`}
    >
      {children}
    </div>
  );
}

export default Badge;
