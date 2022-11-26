import "./products.scss"
import ProductList from "../productList/ProductList"

import { popularProducts } from "../../data"

const Products = () => {
  return (
    <div className="products">
        {popularProducts.map((product)=>(

        <ProductList  product={product} key={product.id}/>
        ))}
    </div>
  )
}

export default Products