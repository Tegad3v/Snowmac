function FormSelect({ label, options, error, ...rest }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[10px] font-semibold">
        {label}
        <span className="text-brandGold">*</span>
      </label>

      <select
        className="
          w-full rounded-lg border border-border bg-white
          px-3 py-3 text-[12px] outline-none transition-colors
          focus:border-brandGold
        "
        {...rest}
      >
        <option value="" disabled>
          Select project type
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="text-[10px] text-red-500">{error.message}</p>}
    </div>
  );
}

export default FormSelect;
