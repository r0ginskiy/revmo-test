"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavMenu.module.css";
import { useMediaQuery } from "@mantine/hooks";

type NavItem = {
  id: number;
  label: string;
  link: string;
};

type Props = {
  menu: NavItem[];
};

export default function NavMenu({ menu }: Props) {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <nav className={styles.wrapper}>
      {isMobile ? (
        <>
          <button
            className={styles.menuButton}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Меню"
          >
            <Image src="/menu.png" alt="Menu" width={24} height={24} />
          </button>

          {open && (
            <div className={styles.dropdown}>
              {menu.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`${styles.dropdownLink} ${
                    index === 0 ? styles.backLink : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className={styles.nav}>
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
        </div>
      )}
    </nav>
  );
}
