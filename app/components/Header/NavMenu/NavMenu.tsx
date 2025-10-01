import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";

type NavItem = {
  id: number;
  label: string;
  link: string;
};

type Props = {
  menu: NavItem[];
};

export default function NavMenu({ menu }: Props) {
  return (
    <nav className={styles.nav}>
      {menu.map((item, index) => (
        <Link key={item.id} href={item.link} className={styles.link}>
          {index === 0 && (
            <Image
              src="/arrow.png"
              alt="Back"
              width={24}
              height={24}
              className={styles.icon}
            />
          )}
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
