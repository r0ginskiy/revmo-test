"use client";
import { useMediaQuery } from "@mantine/hooks";
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
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 376px)");
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {isSmallMobile ? (
          <div className={styles.nav}>
            <NavMenu menu={menu} />
          </div>
        ) : isMobile ? (
          <>
            <div className={styles.left}>
              <div className={styles.nav}>
                <NavMenu menu={menu} />
              </div>
              <div className={styles.logoSlot}>
                <Logo text={logo.text} link={logo.link} />
              </div>
            </div>
            <div className={styles.action}>
              {actionLabel && <DownloadButton label={actionLabel} />}
            </div>
          </>
        ) : (
          <>
            <div className={styles.logoSlot}>
              <Logo text={logo.text} link={logo.link} />
            </div>
            <div className={styles.nav}>
              <NavMenu menu={menu} />
            </div>
            <div className={styles.action}>
              {actionLabel && <DownloadButton label={actionLabel} />}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
