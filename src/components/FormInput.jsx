function FormInput({ label, type, placeholder, error, ...rest }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold">
        {label}
        <span className="text-brandGold">*</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full h-10 rounded-lg border border-border bg-white
          px-3 text-[12px] outline-none transition-colors
          focus:border-brandGold
        "
        {...rest}
      />

      {error && <p className="text-[10px] text-red-500">{error.message}</p>}
    </div>
  );
}

export default FormInput;
