import "./Home.css";
import { useEffect, useState } from "react";

import img1 from "../../assets/home-pic1.jpg";
import img2 from "../../assets/home-pic2.jpg";
import img3 from "../../assets/home-pic3.jpg";
import img4 from "../../assets/home-pic4.jpg";
import img5 from "../../assets/home-pic5.jpg";
import img6 from "../../assets/home-pic6.jpg";
import { sendMessage } from "../../store/actions";
import { useDispatch } from "react-redux";

export const Home = () => {
  let images = [img1, img2, img3, img4, img5, img6];
  let [index, setIndex] = useState(0);
  let opacity: string = '';
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => setIndex( Math.floor(Math.random() * 6) ), 3500);
    dispatch(sendMessage(""));        
  }, []);

  let randomOp = (image: string) => {
    image === images[index] ? opacity = "0.3" : opacity = "1";
    return opacity
  };

  return (
    <div className="home">
      <div>
        <h1>
          {" "}
          Herolo/Abra <br />
          Weather Project{" "}
        </h1>
        <h5>
          Using: <br />
          - Accuweather.com API <br />
          - React, React Hooks <br />
          - Typescript, Javascript <br />- Redux
        </h5>
      </div>
      <div>
        <img src={img1} style={{ opacity: randomOp(img1) }} alt="sun" />
        <img src={img2} style={{ opacity: randomOp(img2) }} alt="moon" />
        <img src={img3} style={{ opacity: randomOp(img3) }} alt="cloud" />
        <h2>Welcome!</h2>
        <img src={img4} style={{ opacity: randomOp(img4) }} alt="sunAndCloud" />
        <img src={img5} style={{ opacity: randomOp(img5) }} alt="snow" />
        <img src={img6} style={{ opacity: randomOp(img6) }} alt="lightening" />
      </div>
    </div>
  );
};
