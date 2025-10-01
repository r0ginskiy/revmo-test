import Image from "next/image"
import styles from "./HeroSidebar.module.css"

type Sidebar = {
  download_app: { enabled: boolean; label: string }
  watch_video: { enabled: boolean; label: string; url: string }
  qr_code: { enabled: boolean; label: string; url: string }
}

type Props = {
  sidebar: Sidebar
}

export default function HeroSidebar({ sidebar }: Props) {
  return (
    <aside className={styles.sidebar}>
      {sidebar.watch_video.enabled && (
        <a href={sidebar.watch_video.url} className={styles.card}>
          <div className={`${styles.icon} ${styles.purple}`}>
            <Image src="/watch.png" alt="Watch" width={40} height={40} />
          </div>
          <span>{sidebar.watch_video.label}</span>
        </a>
      )}

      {sidebar.qr_code.enabled && (
        <a href={sidebar.qr_code.url} className={styles.card}>
          <div className={`${styles.icon} ${styles.green}`}>
            <Image src="/qr.png" alt="QR" width={24} height={24} />
          </div>
          <span>{sidebar.qr_code.label}</span>
        </a>
      )}
    </aside>
  )
}
