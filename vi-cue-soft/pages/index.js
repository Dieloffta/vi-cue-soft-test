import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard/BeerCard";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import StyledReactPagination from "../components/StyledReactPagination/StyledReactPagination";
import { getData, getDataWithName } from "../functions/getData";

export default function Home({ data }) {
  const [currentPage, setCurrentPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [beers, setBeers] = useState([]);
  const [totalPages, setTotalPages] = useState(37);

  const [searchValue, setSearchValue] = useState(null);

  const myFunc = async () => {
    if (searchValue === "" || searchValue === null) {
      const response = await getData(currentPage + 1, 9);
      setBeers(response.data);
    } else {
      const response = await getDataWithName(currentPage + 1, 9, searchValue);
      setBeers(response.data);
    }
  };

  useEffect(() => {
    if (currentPage !== null) {
      myFunc();
    }
    return;
  }, [currentPage]);

  useEffect(() => {
    setBeers(data);
  }, []);

  const onPageChange = async (page) => {
    setCurrentPage(page.selected);
  };

  const aboba = async () => {
    const response = await getDataWithName(1, 80, searchValue);
    const totalPages = Math.ceil(response.data.length / 9);
    setTotalPages(totalPages);
    if (!currentPage) {
      const response = await getDataWithName(1, 9, searchValue);
      setBeers(response.data);
    } else {
      const response = await getDataWithName(currentPage + 1, 9, searchValue);
      setBeers(response.data);
      setCurrentPage(0);
    }
  };

  useEffect(() => {
    if (searchValue) {
      aboba();
    }
    if (searchValue === "") {
      setTotalPages(37);
      myFunc();
    }
    return;
  }, [searchValue]);

  const searchHandler = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target)).beerName;
    setSearchValue(data);
    if (data === "") {
      setCurrentPage(0);
    }
  };

  return (
    <div className={styles.container}>
      <Header setSearchValue={setSearchValue} searchHandler={searchHandler} />
      <div className={styles.beer__card__wrapper}>
        <div className={styles.beer__card__container}>
          {beers?.map((el) => {
            return <BeerCard key={el.id} beer={el} />;
          })}
        </div>
      </div>
      <StyledReactPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const response = await axios({
    method: "GET",
    url: `https://api.punkapi.com/v2/beers?page=${1}&per_page=9`,
  });
  return {
    data: response.data,
  };
  // setBeers(response.data);
};
