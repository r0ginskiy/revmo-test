import { getNavigation, getMain, getSlider } from "./lib/api";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/Reviews/Reviews";

export default async function Page() {
  const [nav, main, slider] = await Promise.all([
    getNavigation(),
    getMain(),
    getSlider(),
  ]);

  return (
    <>
      <Header
        logo={nav.logo}
        menu={nav.menu}
        actionLabel={main?.sidebar?.download_app?.label}
      />

      {main && (
        <Hero
          title={main.title}
          subtitle={main.subtitle}
          videoUrl={main.videoUrl}
          buttons={main.buttons}
          sidebar={main.sidebar}
        />
      )}

      {slider?.enabled && <Reviews slider={slider} />}
    </>
  );
}
