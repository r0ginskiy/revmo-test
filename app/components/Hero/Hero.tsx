import styles from "./Hero.module.css";
import HeroContent from "./HeroContent/HeroContent";
import HeroMedia from "./HeroMedia/HeroMedia";
import HeroSidebar from "./HeroSidebar/HeroSidebar";
import TopAction from "./TopAction/TopAction";

type Props = {
  title: string;
  subtitle: string;
  videoUrl: string;
  buttons: {
    ios: { enabled: boolean; label: string };
    android: { enabled: boolean; label: string };
    apk: { enabled: boolean; label: string };
  };
  sidebar: {
    download_app: { enabled: boolean; label: string };
    watch_video: { enabled: boolean; label: string; url: string };
    qr_code: { enabled: boolean; label: string; url: string };
  };
};

export default function Hero({
  title,
  subtitle,
  videoUrl,
  buttons,
  sidebar,
}: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        {buttons.apk.enabled && <TopAction label={buttons.apk.label} />}
        <HeroContent title={title} subtitle={subtitle} buttons={buttons} />
      </div>
      <HeroMedia videoUrl={videoUrl} />
      <HeroSidebar sidebar={sidebar} />
    </section>
  );
}
