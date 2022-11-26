import Annoucement from "../../components/annoucement/Annoucement"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsletter/Newsletter"
import "./products.scss"
import Product from "../../components/products/Products"

const Products = () => {
  return (
    <div className="products_container">

        <Annoucement />
        <Navbar />


      <h1 >Dresses</h1>
     <div className="product_wrapper">

      <div className="productLeft">
        <h2>Filter products:</h2>
        <select name="" id="">
          <option value="xxl">xxl</option>
            <option value="xl">xl</option>
            <option value="l">L</option>
            <option value="m">M</option>
        </select>
        <select name="" id="">
          <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
        </select>
      </div>
      <div className="productRight">
          <h2>Filter products:</h2>
          
          <select name="" id="">
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
          </select>
        </div>
     </div>


        <Product />
        <Newsletter />
        <Footer />
        
    </div>
  )
}

export default Products