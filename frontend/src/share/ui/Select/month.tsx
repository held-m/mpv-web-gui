// export const listMonths = {
//   january: "Январь",
//   february: "Февраль",
//   march: "Март",
//   april: "Апрель",
//   may: "Май",
//   june: "Июнь",
//   july: "Июль",
//   august: "Август",
//   september: "Сентябрь",
//   october: "Октябрь",
//   november: "Ноябрь",
//   december: "Декабрь",
// };
//
const listMonths = (): Map<number, string> => {
  const months = new Map();
  months.set(0, "Январь");
  months.set(1, "Февраль");
  months.set(2, "Март");
  months.set(3, "Апрель");
  months.set(4, "Май");
  months.set(5, "Июнь");
  months.set(6, "Июль");
  months.set(7, "Август");
  months.set(8, "Сентябрь");
  months.set(9, "Октябрь");
  months.set(10, "Ноябрь");
  months.set(11, "Декабрь");
  return months;
};

type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Month = (props: Props) => {
  return (
    <select
      defaultValue={new Date().getMonth()}
      onChange={props.onChange}
      className="w-full text-center text-gray-900"
    >
      {Array.from(listMonths().entries()).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
};
