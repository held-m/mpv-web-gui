import { ChangeEvent, useEffect, useRef } from "react";

type Props = {
  value: any;
  className: string;
  readOnly: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};
export const Textarea = (props: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight -
        textAreaRef.current.scrollHeight / 2.8 +
        "px";
    }
  }, [props.value]);

  return (
    <textarea
      className={`outline-none p-1 resize-none border-gray-300 border-solid border ${props.className} `}
      ref={textAreaRef}
      value={props.value}
      readOnly={props.readOnly}
      onChange={props.onChange}
    />
  );
};
