import { useState, useEffect } from "react";

import { getProducts, productStates, clearSearch } from "../../reducers/search";

//components
import Input from "src/components/Input";
import Loading from "src/components/Loading";
import ProductCard from "src/components/ProductCard";
import Select from "src/components/Select";

//utils
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import filterValues from "../../utils/filterValue";
import { debounce } from "../../utils/debounce";

//interfaces
import { product } from "../../reducers/interfaces";

//constant
import { options } from "../../constant";

const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector(productStates);
  const debouncedSearch = debounce((str: string) => handleChange(str), 300);

  const [data, setData] = useState<Array<product> | []>([]);
  const [query, setQuery] = useState("");

  const handleChange = (val: string) => setQuery(val);

  useEffect(() => setData(products), [products]);

  useEffect(() => {
    if (query.length > 1) dispatch(getProducts(query));
    if (!query.length) dispatch(clearSearch());
  }, [query]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const splittedKey = val.split("_");
    const sortKey = splittedKey.shift();
    const sortOrder = splittedKey.pop();
    const sortedResults = [...data].sort(filterValues(sortKey, sortOrder));

    setData(sortedResults);
  };

  useEffect(() => setData(products), [products]);
  return (
    <>
      <div className="flex border border-grey-600 px-7 py-7 my-3 rounded-lg">
        <Select
          data={products}
          onChange={handleSelectChange}
          // @ts-ignore
          options={options}
        />
        <Input
          error=""
          type="text"
          removeSearch={() => setQuery("")}
          placeholder="Search"
          value={query}
          onChange={(e) => debouncedSearch(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {loading ? (
          <Loading />
        ) : (
          data &&
          data.map((product) => {
            const { image, link, title, vendor, price, id } = product;
            return (
              <ProductCard
                key={id}
                id={id}
                link={link}
                title={title}
                vendor={vendor}
                price={price}
                image={image}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
