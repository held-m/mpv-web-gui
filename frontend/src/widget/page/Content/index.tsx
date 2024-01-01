export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col flex-auto items-center self-center w-full">
      {children}
    </main>
  );
};
