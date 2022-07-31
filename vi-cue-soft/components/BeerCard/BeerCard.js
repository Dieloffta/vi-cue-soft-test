import styles from "./BeerCard.module.scss";
import Link from "next/link";

export default function BeerCard({ beer }) {
  let slicedDesc = beer?.description?.slice(0, 140);
  if (slicedDesc.length < beer?.description?.length) {
    slicedDesc += "...";
  }
  return (
    <>
      <Link href={`/beer/[id]`} as={`/beer/${beer.id}`}>
        <a className={styles.card__link}>
          <div className={styles.card__wrapper}>
            <div className={styles.image__description}>
              <img
                className={
                  beer.image_url === "https://images.punkapi.com/v2/keg.png"
                    ? styles.keg__image
                    : styles.bottle__image
                }
                alt={beer.name}
                src={beer.image_url}
              />
              <span className={styles.description__text}>{slicedDesc}</span>
            </div>
            <span className={styles.name__text}>{beer.name}</span>
          </div>
        </a>
      </Link>
    </>
  );
}
