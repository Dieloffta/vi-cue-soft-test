import axios from "axios";

export async function getData(page, perPage) {
  const response = await axios({
    method: "GET",
    url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`,
  });
  return response;
}

export async function getDataWithName(page, perPage, name) {
  const response = await axios({
    method: "GET",
    url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}&beer_name=${name}`,
  });
  return response;
}
