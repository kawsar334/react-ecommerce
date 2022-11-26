import "./cart.scss"
import Annoucement from "../../components/annoucement/Annoucement"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsletter/Newsletter"
import Footer from "../../components/footer/Footer"
import { NavLink } from "react-router-dom"

const Cart = () => {
  return (
    <div>

      <Annoucement />
      <Navbar />

      <div className="cartContainer">
        <div className="cartTop">
          <NavLink  to="/products">
          <button className="continuebtn">CONTINUE SHOPING</button>
          </NavLink>
          <button className="checkoutbtn">CHECKOUT</button>
        </div>
        <div className="cartBottom">
          
          <div className="cartleft">
            {/*  */}
            <div className="cartLeftItem">

            <div className="cartImgContainer">
              <img src="https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..." />
            </div>
            <div className="cartdesc">
              <p><b>Product:</b> Jesse thunder shoes</p>
              <p><b>ID:</b> 172828373737</p>
              <p><b>color:</b><span className="cartcolor"></span></p>
              <p><b>Size:</b> 37.5</p>
            </div>
            <div className="cartCounter">
              <p><span>+</span> <span>01</span> <span>-</span></p>
              <h4>$50</h4>
            </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="cartLeftItem">

              <div className="cartImgContainer">
                <img src="https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..." />
              </div>
              <div className="cartdesc">
                <p><b>Product:</b> Jesse thunder shoes</p>
                <p><b>ID:</b> 172828373737</p>
                <p><b>color:</b><span className="cartcolor"></span></p>
                <p><b>Size:</b> 37.5</p>
              </div>
              <div className="cartCounter">
                <p><span>+</span> <span>01</span> <span>-</span></p>
                <h4>$50</h4>
              </div>
            </div>
            {/*  */}
          </div>
          
          

          <div className="cartright">
            <h3>Order summery </h3>
            <p><span className="bold">Subtotal:</span> <span>$800</span></p>
            <p><span className="bold">Subtotal:</span> <span>$800</span></p>
            <p><span className="bold">Subtotal:</span> <span>$800</span></p>
            <div className="total"><h4>Total: <span>$800</span></h4></div>
            <button>Checkout Now </button>
          </div>
        </div>


      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Cart