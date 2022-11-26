import Annoucement from "../../components/annoucement/Annoucement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import "./details.scss";

const Details = () => {
  return (
    <div className="details">
      <Annoucement />
      <Navbar />

<div className="details_container">

  <div className="detailsLeft">

          <img src="https://images.pexels.com/photos/14353079/pexels-photo-14353079.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Loading..."  className="detailsImg"/>
         
  </div>
  <div className="detailsRight">
    <div className="detiailsInfo">
      <h2 className="title">This is title</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, tempora praesentium veritatis nostrum repellat accusantium illum ut repellendus eum laboriosam provident culpa incidunt officia sit molestiae quas ratione rerum eligendi.</p>
      <div className="colors">
        <h3>colors:</h3>
            <span className="color" style={{background:"red"}}></span>
              <span className="color" style={{ background: "green" }}></span>
              <span className="color" style={{ background: "blue" }}></span>
      </div>
      <div className="sizes">
              <h3>size:</h3>
             <span>XL</span>
              <span>XL</span>
              <span>XL</span>
      </div>
       
       <div className="counterDiv">
             <span> +</span>
              <span> 01</span>
              <span>-</span>

       </div>
       <button>Add to cart</button>

    </div>
  </div>
  

</div>

      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
}

export default Details