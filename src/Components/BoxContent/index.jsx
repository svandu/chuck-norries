import { useEffect } from "react";
import axios from "axios";

import "./boxcontent.css";

// eslint-disable-next-line react/prop-types
function BoxContent({show, setShow, setCategories, category}) {
  useEffect(() => {
    const fetchApi = async () => {
      try{
        const response = await axios.get('https://api.chucknorris.io/jokes/random?category={category}');  
        setCategories(response.data);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    };

    fetchApi();
  },[]);
 
  const closeBox = () => {
    setShow(!show);
  }
  return (
    <div className="box-main-container">
      <div className="head">
        <p className="box-head">{category}</p>
        <button className="cross-icon" onClick={closeBox}>&times;</button>
      </div>
      <div className="box-para">
        <p className="paragraph">
        Vestibulum dignissim diam quis ultrices iaculis. Nullam vel pharetra magna. Suspendisse dolor massa, congue quis cursus quis, facilisis non mauris. Proin accumsan, tortor ac tempus faucibus,
        </p>
        <button className="next-btn">Next Joke</button>
      </div>
    </div>
  );
}

export default BoxContent;
