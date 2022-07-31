import styles from "./beerPage.module.scss";
import { useRouter } from "next/router";
import axios from "axios";

export default function beerPage({ beer }) {
  console.log(beer);
  const router = useRouter();
  return (
    <>
      <div className={styles.back__button}>
        <a onClick={() => router.back()}>Вернуться назад</a>
      </div>
      <div className={styles.beer__page__wrapper}>
        <img
          className={
            beer.image_url === "https://images.punkapi.com/v2/keg.png"
              ? styles.keg__image
              : styles.bottle__image
          }
          alt={beer.name}
          src={beer.image_url}
        />
        <div className={styles.description__wrapper}>
          <span className={styles.name__text}>{beer.name}</span>
          <span className={styles.tagline__text}>{beer.tagline}</span>
          <span className={styles.abv__text}>ABV: {beer.abv}</span>
          <span className={styles.food__pairing}>Food pairing:</span>
          {beer.food_pairing.map((el) => {
            return <span className={styles.food__pairing__text}>{el}</span>;
          })}
          <p className={styles.description__text}>{beer.description}</p>
        </div>
      </div>
      {/* <h1>ABOBAS {router.query.id}</h1> */}
    </>
  );
}

beerPage.getInitialProps = async (ctx) => {
  const response = await axios({
    method: "GET",
    url: `https://api.punkapi.com/v2/beers/${ctx.query.id}`,
  });
  return {
    beer: response.data[0],
  };
  // setBeers(response.data);
};
