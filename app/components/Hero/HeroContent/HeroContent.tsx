import styles from "./HeroContent.module.css";
import Image from "next/image";

type Button = { enabled: boolean; label: string };

type Props = {
  title: string;
  subtitle: string;
  buttons: {
    ios: Button;
    android: Button;
  };
};

export default function HeroContent({ title, subtitle, buttons }: Props) {
  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.blurCircle}></div>

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
    </div>
  );
}
