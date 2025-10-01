import styles from "./HeroMedia.module.css"

type Props = {
  videoUrl: string
}

export default function HeroMedia({ videoUrl }: Props) {
  return (
    <div className={styles.media}>
      <video
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className={styles.video}
      />
    </div>
  )
}
