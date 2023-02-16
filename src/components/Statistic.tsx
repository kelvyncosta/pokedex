interface IStatisticProps {
  title: string;
  value: number | string;
}

export function Statistic({ title, value }: IStatisticProps) {
  return (
    <div
      className="
      bg-blue-500 text-slate-50 flex flex-col items-center justify-center
      rounded-xl dark:bg-yellow-500 dark:text-gray-900 w-40 h-32"
    >
      <span>{title}</span>
      <span className="text-3xl">{value}</span>
    </div>
  );
}
