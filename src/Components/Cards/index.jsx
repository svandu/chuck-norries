import { useEffect, useState } from "react";
import axios from 'axios';
import BoxContent from "../BoxContent";
import "./cards.css"

function Cards() {
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
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
    <div>
      <span className="card-heading">Chuck Norries</span>
      <div className="card-main-container">
          {categories.map((category) => (
            <div key={category} className="card-container" onClick={toggleBox}>{category}
              <p className="para">Unlimited Jokes on {category}</p>
            </div>
          ))}
      </div>
      <BoxContent />
    </div>
  )
}

export default Cards