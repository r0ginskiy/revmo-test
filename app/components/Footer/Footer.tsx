import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Image src="/logo.png" alt="Revmo.info app" width={40} height={40} />
        <span className={styles.text}>Revmo.info app</span>
      </div>

      <div className={styles.right}>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <Image src="/vk.png" alt="VK" width={24} height={24} />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <Image src="/tg.png" alt="Telegram" width={44} height={44} />
        </a>
        <a href="https://dzen.ru" target="_blank" rel="noopener noreferrer">
          <Image src="/dzen.png" alt="Dzen" width={24} height={24} />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
}
