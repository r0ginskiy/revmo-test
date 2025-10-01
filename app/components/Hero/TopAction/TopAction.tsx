import Image from "next/image";
import styles from "./TopAction.module.css";

type Props = {
  label: string;
};

export default function TopAction({ label }: Props) {
  return (
    <div className={styles.topAction}>
      <span className={styles.label}>{label}</span>
      <Image src="/download_black.png" alt="Download APK" width={24} height={24} />
    </div>
  );
}
