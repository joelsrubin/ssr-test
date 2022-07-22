type CheckboxProps = {
  checked: boolean;
  onChange: (e: any) => void;
  label: string;
  className?: string;
};

export function Checkbox({
  checked,
  onChange,
  label,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label className={className}>
      <input type="checkbox" checked={checked} onChange={onChange} {...props} />
      {label}
    </label>
  );
}
