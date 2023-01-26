import s from "./styles/Header.module.scss";
import Logo from "../../assets/images/Logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className={s.header}>
      <Link
        className={s.header__link}
        href="https://spb.hh.ru/resume/0893424dff0b1c42f00039ed1f677746693762"
        target="_blank"
      >
        Резюме
      </Link>
      <Logo className={s.header__logo} />
    </header>
  );
};

export default Header;
