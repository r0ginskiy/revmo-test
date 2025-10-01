import Image from "next/image";
import styles from "./DownloadButton.module.css";

type Props = {
  label: string;
};

export default function DownloadButton({ label }: Props) {
  return (
    <a href="/" className={styles.button}>
      <div className={styles.icon}>
        <Image src="/download.png" alt="Download" width={20} height={20} />
      </div>
      <span className={styles.label}>{label}</span>
      <div className={styles.arrows}>
        <span className={styles.arrow1}>›</span>
        <span className={styles.arrow2}>›</span>
        <span className={styles.arrow3}>›</span>
      </div>
    </a>
  );
}
