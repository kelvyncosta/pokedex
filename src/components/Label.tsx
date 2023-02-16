interface ILabelProps {
  value: string;
  title: string;
}

export function Label({ value, title }: ILabelProps) {
  return (
    <span className="mb-4 capitalize">
      <p className="font-semibold">{title}</p>
      <p className="text-center">{value}</p>
    </span>
  );
}
