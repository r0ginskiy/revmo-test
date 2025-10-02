'use client';
import Image from "next/image";
import styles from "./HeroContent.module.css";
import { useMediaQuery } from "@mantine/hooks";

type Button = { enabled: boolean; label: string };

type Props = {
  title: string;
  subtitle: string;
  buttons: {
    ios: Button;
    android: Button;
    apk?: Button;
  };
};

export default function HeroContent({ title, subtitle, buttons }: Props) {
  const isSmallMobile = useMediaQuery("(max-width: 376px)");
  return (
    <div className={styles.content}>
      <div className={styles.blurCircle}></div>

      {!isSmallMobile && buttons.apk?.enabled && (
        <div className={styles.topAction}>
          <span className={styles.topLabel}>{buttons.apk.label}</span>
          <Image
            src="/download_black.png"
            alt="Download APK"
            width={20}
            height={20}
          />
        </div>
      )}

      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.actions}>
        {buttons.ios.enabled && (
          <a href="/" className={`${styles.button} ${styles.ios}`}>
            <Image
              src="/apple.png"
              alt="Download Apple"
              width={24}
              height={24}
            />
            {buttons.ios.label}
          </a>
        )}
        {buttons.android.enabled && (
          <a href="/" className={`${styles.button} ${styles.android}`}>
            <Image
              src="/google.png"
              alt="Download Google"
              width={24}
              height={24}
            />
            {buttons.android.label}
          </a>
        )}
      </div>
      {isSmallMobile && buttons.apk?.enabled && (
        <div className={styles.topAction} style={{ marginTop: "16px" }}>
          <span className={styles.topLabel}>{buttons.apk.label}</span>
          <Image
            src="/download_black.png"
            alt="Download APK"
            width={20}
            height={20}
          />
        </div>
      )}
    </div>
  );
}
