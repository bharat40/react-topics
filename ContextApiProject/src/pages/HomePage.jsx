import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Product from "../components/Product";

faker.seed(123);

const HomePage = () => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.url(),
  }));
  const [products] = useState(productsArray);

  return (
    <div className="flex flex-wrap gap-10 justify-evenly p-7 bg-gray-50">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
