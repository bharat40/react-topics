const products = [
    { id: 1, name: "Product A", price: 20, category: "Electronics" },
    { id: 2, name: "Product B", price: 30, category: "Clothing" },
    { id: 3, name: "Product C", price: 15, category: "Electronics" },
    { id: 4, name: "Product D", price: 25, category: "Clothing" },
    { id: 5, name: "Product E", price: 50, category: "Electronics" },
    { id: 6, name: "Product F", price: 40, category: "Electronics" },
];

{/* <ul>
          {products
            .filter((product) => product.price > 20)
            .map((product) => {
              return {
                ...product,
                discountedPrice: product.price * (10 / 100),
              };
            })
            .map((product) => {
              return (
                <li key={product.id}>
                  <strong>{product.name}</strong> - Discount of $
                  {product.discountedPrice} from ${product.price}
                </li>
              );
            })}
</ul> */}

export default products;