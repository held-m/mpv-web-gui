import Link from "next/link";

export const Menu = () => {
  return (
    <div className="grid grid-cols-4 py-4 mx-auto text-center">
      <Link href={`/`}>Главная</Link>
    </div>
  );
};
