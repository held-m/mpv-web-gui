import { styles } from "./style";

export type ButtonType =
  | "info"
  | "warn"
  | "danger"
  | "save"
  | "cancel"
  | "delete"
  | "edit";

export interface Props {
  label: string;
  size: "sm" | "md" | "lg" | "full-sm" | "full-lg" | "full-md";
  background?: string;
  onClick?: (args: any) => void;
  type?: ButtonType;
  disabled?: boolean;
  isSubmit?: boolean;
  className?: string;
}
export const Button = ({
  label,
  size = "md",
  type = "info",
  onClick,
  disabled = false,
  isSubmit = false,
  className,
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.container()} ${styles.size(size)} ${styles.type(
        type
      )} ${className}`}
      type={isSubmit ? "submit" : "button"}
    >
      {label}
    </button>
  );
};
