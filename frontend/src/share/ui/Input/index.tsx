type Props = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: Props) => {
  return (
    <div>
      {props.label && (
        <label className="text-sm text-gray-500">{props.label}</label>
      )}
      <input
        type="text"
        className="h-8 text-black rounded-md border border-gray-300"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};
