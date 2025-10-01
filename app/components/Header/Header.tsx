import styles from "./Header.module.css";
import DownloadButton from "./DownloadButton/DownloadButton";
import Logo from "./Logo/Logo";
import NavMenu from "./NavMenu/NavMenu";

type NavItem = { id: number; label: string; link: string };
type LogoType = { text: string; link: string };

type Props = {
  logo: LogoType;
  menu: NavItem[];
  actionLabel?: string;
};

export default function Header({ logo, menu, actionLabel }: Props) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo text={logo.text} link={logo.link} />
        <div className={styles.nav}>
          <NavMenu menu={menu} />
        </div>
        <div className={styles.action}>
          {actionLabel && <DownloadButton label={actionLabel} />}
        </div>
      </div>
    </header>
  );
}
