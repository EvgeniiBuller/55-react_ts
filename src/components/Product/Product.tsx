import { ProductProps } from "./types";


  function Product({
    name,
    price
  }: ProductProps) {
        return (
            <div>
              <h3>{name}</h3>
              <p>Price: ${price.toFixed(2)}</p>
            </div>
          );   
  }

  export default Product;