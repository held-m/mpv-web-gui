const listYear = () => {
  const year = 2023;
  const list = [];
  for (let i = year - 5; i <= year + 50; i++) {
    list.push(i);
  }
  return list;
};

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Year = (props: Props) => {
  return (
    <select
      defaultValue={new Date().getFullYear()}
      onChange={props.onChange}
      className="w-full text-center text-gray-900"
    >
      {listYear().map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};
