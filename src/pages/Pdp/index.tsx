import React, { useEffect, useState } from "react";
import { getProductDetails, productStates } from "../../reducers/pdp";

//hooks
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import useCard from "src/hooks/useCard";
import { formatPrice } from "src/utils/formatPrice";

//components
import Select from "../../components/Select";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import QrCodeLink from "../../components/QrCode";

//interfaces
import { image, variant } from "src/reducers/interfaces";

//styles
import "./index.css";

const Pdp: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector(productStates);

  const [selectedImage, setSelectedImage] = useState<string>();
  const [price, setPrice] = useState<string | number>();
  const { addItem } = useCard();

  useEffect(() => {
    dispatch(getProductDetails());
  }, []);

  const handleOptionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!!product) {
      const id = e.target.value;
      const selectedSrc = product.images.find(
        (i: image) => Number(i.variant_ids) === Number(id)
      )?.src;
      const price = product.variants.find(
        (i: variant) => Number(i.id) === Number(id)
      )?.price;

      setSelectedImage(selectedSrc);
      setPrice(price);
    }
  };

  return loading || !product ? (
    <Loading />
  ) : (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <img
              alt="commerce"
              className=" object-cover object-center rounded border border-gray-400"
              src={selectedImage || product?.image?.src}
            />
            <div className="mt-6 flex flex-row justify-start items-start space-x-4">
              {product?.images.map((i: { src: string | undefined }) => (
                <div
                  className="py-4 px-8 rounded border border-gray-200"
                  key={i.src}
                >
                  <img src={i.src} alt="" key={i.src} />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {product.title}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.vendor}
                </h1>
              </div>
              <QrCodeLink link={product.url} />
            </div>

            <p className="leading-relaxed">{product.body_html}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <Select
                  options={product.variants}
                  onChange={handleOptionsChange}
                  label={"options"}
                />
                <Select
                  options={product.options[0].values}
                  label={product.options[0].name}
                  onChange={handleOptionsChange}
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                {formatPrice(Number(price || product.variants[0].price))}
              </span>
              <Button
                id={product.id}
                handleClick={() =>
                  addItem({
                    qty: 1,
                    id: product.id,
                    price: price || 0,
                    title: product.title,
                    vendor: product.vendor,
                    link: product.url,
                    image: selectedImage || "",
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pdp;
