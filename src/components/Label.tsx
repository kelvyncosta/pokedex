interface ILabelProps {
  value: string;
  title: string;
}

export function Label({ value, title }: ILabelProps) {
  return (
    <span className="mb-4">
      <p className="capitalize font-semibold">{title}</p>
      <p className="capitalize">{value}</p>
    </span>
  );
}
