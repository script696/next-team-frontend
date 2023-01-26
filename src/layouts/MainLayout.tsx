import s from "./MainLayout.module.scss";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={s.mainLayout}>
      <header className={s.mainLayout__header}>header</header>
      <nav className={s.mainLayout__navigation}>nav</nav>
      <main className={s.mainLayout__main}>{children}</main>
    </div>
  );
};

export default MainLayout;
