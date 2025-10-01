const base = process.env.NEXT_PUBLIC_API_BASE_URL as string

export async function getNavigation() {
  const res = await fetch(`${base}/api/navigation`, { cache: "no-store" })
  return res.json()
}

export async function getMain() {
  const res = await fetch(`${base}/api/main`, { cache: "no-store" })
  return res.json()
}

export async function getSlider() {
  const res = await fetch(`${base}/api/slider`, { cache: "no-store" })
  return res.json()
}
