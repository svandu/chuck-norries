import { useEffect, useState } from "react";
import axios from 'axios';
import "./cards.css"

function Cards() {
  const [categories, setCategories] = useState([]);

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
    <>
      {categories.map((category) => (
        <div key={category} className="card-container">{category}</div>
      ))}
    </>
  )
}

export default Cards