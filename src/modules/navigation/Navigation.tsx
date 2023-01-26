import s from "./styles/Navigation.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/modules/navigation/constants/constants";

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <nav className={s.navigation}>
      <h2 className={s.navigation__title}>Меню навигации</h2>
      <ul className={s.navigation__linksList}>
        {NAVIGATION_LINKS.map(({ title, path }) => {
          const isLinkActive = path === pathname;

          return (
            <li key={path}>
              <Link
                className={
                  isLinkActive ? s.navigation__link_active : s.navigation__link
                }
                href={path}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
