import s from "./MainLayout.module.scss";
import { ReactNode } from "react";
import { Navigation } from "@/modules/navigation";
import { Header } from "@/modules/header";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={s.mainLayout}>
      <div className={s.mainLayout__headerWrapper}>
        <Header />
      </div>
      <div className={s.mainLayout__navWrapper}>
        <Navigation />
      </div>
      <main className={s.mainLayout__main}>{children}</main>
    </div>
  );
};

export default MainLayout;
