import { Props } from "./type";
import { Header } from "@widget/page/Header";
import { Content } from "@widget/page/Content";
import { Footer } from "@widget/page/Footer";
import { Menu } from "@src/widget/page/Menu";

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <Menu />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};
