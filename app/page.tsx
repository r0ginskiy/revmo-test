import { getNavigation, getMain } from "./lib/api"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

export default async function Page() {
  const [nav, main] = await Promise.all([getNavigation(), getMain()])

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

    </>
  )
}
