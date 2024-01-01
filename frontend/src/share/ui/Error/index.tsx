type Props = {
  error?: string | undefined | null;
};
export const Error = (props: Props) => {
  return (
    <div className="text-red-500">
      <p> {props.error} </p>
    </div>
  );
};
