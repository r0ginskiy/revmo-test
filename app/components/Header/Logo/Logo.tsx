import Image from "next/image"
import Link from "next/link"
import styles from "./Logo.module.css"

type Props = {
  text: string
  link: string
}

export default function Logo({ text, link }: Props) {
  return (
    <Link href={link} className={styles.logo}>
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
      <span>{text}</span>
    </Link>
  )
}
