import React from "react";
// import { useParams } from "react-router-dom";
import Products from "../assets/product";

const DaNonNuoc = () => {
  // const { id } = useParams();
  // const product = Products.find((item) => item.id === id);
  // const {
  //   productName,
  //   productAuthor,
  //   Descriptionm,
  // } = product;
  const related = Products.find((item) => item.Products === Products);
  return (
    <main className="main min-h-[100svh]">
      <div className="relative m-auto flex h-[100svh] w-full max-w-[1440px] flex-col gap-[20px] px-[12px] pt-[80px] lg:px-[40px]">
        <p className="text-[16px] font-bold uppercase leading-normal">
          CUỘC THI ĐÁ NON NƯỚC 2023
        </p>
      </div>
      <div>
        <Products data={related}/>
      </div>
    </main>
  );
};

export default DaNonNuoc;
