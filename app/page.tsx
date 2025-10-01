import { getNavigation, getMain } from "./lib/api";
import Header from "./components/Header/Header";

export default async function Page() {
  const [nav, main] = await Promise.all([getNavigation(), getMain()]);

  return (
    <>
      <Header
        logo={nav.logo}
        menu={nav.menu}
        actionLabel={main?.sidebar?.download_app?.label}
      />
      <main />
    </>
  );
}
