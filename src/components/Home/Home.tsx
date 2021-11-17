import "./Home.css";
import { useEffect } from "react";
import { sendMessage } from "../../store/actions";
import { useDispatch } from "react-redux";
//images
import img1 from "../../assets/home-pic1.jpg";
import img2 from "../../assets/home-pic2.jpg";
import img3 from "../../assets/home-pic3.jpg";
import img4 from "../../assets/home-pic4.jpg";
import img5 from "../../assets/home-pic5.jpg";
import img6 from "../../assets/home-pic6.jpg";


export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendMessage(""));        
  }, []);

  return (
    <div className="home">
      <div>
        <h1>
          Herolo/Abra <br />
          Weather Project
        </h1>
        <h5>
          Using: <br />
          - Accuweather.com API <br />
          - React, React Hooks <br />
          - Typescript, Javascript <br />- Redux
        </h5>
      </div>
      <div>
        <img src={img1} className="home-images" alt="sun" />
        <img src={img2} className="home-images" alt="moon" />
        <img src={img3} className="home-images" alt="cloud" />
        <h2>Welcome!</h2>
        <img src={img4} className="home-images" alt="sunAndCloud" />
        <img src={img5} className="home-images" alt="snow" />
        <img src={img6} className="home-images" alt="lightening" />
      </div>
    </div>
  );
};
