import styles from "./ReviewCard.module.css";
import Image from "next/image";

type Props = {
  review: {
    id: number;
    photo: string;
    name: string;
    date: string;
    text: string;
  };
};

export default function ReviewCard({ review }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <Image
              src={review.photo}
              alt={review.name}
              width={36}
              height={36}
            />
          </div>
          <span className={styles.text}>{review.name}</span>
        </div>
        <div className={styles.date}>
          <Image src="/calendar.png" alt="Star" width={24} height={24} />
          <span className={styles.textDate}>{review.date}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>{review.text}</p>
      </div>
    </div>
  );
}
