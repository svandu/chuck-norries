import { useEffect, useState } from "react";
import axios from 'axios';
import BoxContent from "../BoxContent";
import { Link } from "react-router-dom";
import "./cards.css"

function Cards() {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);

  const showBox = () => {
    setShow(!show);
  }

  useEffect(() => {
    const fetchApi = async () => {
      try{
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');  
        setCategories(response.data);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="cards-main-container">
      <span className="card-heading">Chuck Norries</span>
      <Link to={`/categories/${categories.id}`} className="link-tag">
      <div className="card-container">
          {categories.map((category) => (
            <div key={category} className="single-card-container" onClick={showBox}>{category}
              <p className="para">Unlimited Jokes on {category}</p>

              { 
                show && <BoxContent className="box-container" category= {category} setShow={setShow} show={show} setCategories = {setCategories}/> 
              }
            </div>
          ))}
      </div>
      </Link>
    </div>
  )
}

export default Cards