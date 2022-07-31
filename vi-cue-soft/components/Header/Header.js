import styles from "./Header.module.scss";

export default function Header({ searchHandler }) {
  return (
    <>
      <header>
        <form
          className={styles.header__wrapper}
          onSubmit={(e) => searchHandler(e)}
        >
          <input
            name="beerName"
            className={styles.input}
            placeholder="Веедите название пива"
          ></input>
          <button className={styles.button}>Поиск</button>
        </form>
      </header>
    </>
  );
}
