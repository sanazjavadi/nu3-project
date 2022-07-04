import { instance } from "../";

export const getProductsService = (query) => {
  return instance
    .get(`data/search.json`)
    .then((res) => {
      const keyWords = ["title", "vendor", "link"];
      const results = res.data.items.filter((i) => {
        return keyWords.every((p) => {
          return i[p].toLowerCase().includes(query.toLowerCase());
        });
      });
      return results;
    })
    .catch((error) => error.response || error);
};
export const getProductDetailsService = () => {
  return instance
    .get(`data/product.json`)
    .then((res) => {
      console.log({ res });
      return res.data;
    })
    .catch((error) => error.response || error);
};
