import { ThemeToggle } from "../Theme";

export const Header = () => {
  return (
    <header className="grid grid-cols-1 border border-b-gray-500">
      <ThemeToggle />
    </header>
  );
};
