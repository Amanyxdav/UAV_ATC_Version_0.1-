import backgroundVideo from "../assets/back.mp4";
import Navbar from "../components/common/Navbar";
import LeftGrp from "../assets/left-group.png";
import DroneImage from "../assets/drone.png";
import RightGrp from "../assets/right-group.png";
import { useState } from "react";
import LiveData from "../pages/LiveData";
import axios from "axios";

const Home = () => {
  const [droneData, setDroneData] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleButtonClick = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/data'); 
      setDroneData(response.data);
      setIsPopupVisible(true);
      console.log("Button Clicked");

    } catch (error) {
      console.error('Error fetching drone data:', error);
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="relative justify-center">
      <Navbar
        handleButtonClick={handleButtonClick}
      />
      <div className="absolute top-0 -z-10">
        <video autoPlay loop muted className="w-full h-[1000px] object-cover">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="drone-float flex justify-center">
        <img src={DroneImage} alt="drone" />
      </div>
      <div className="flex justify-center items-center absolute top-40 inset-0 ">
        <img src={LeftGrp} alt="left-border-red" className="h-[300px]" />
        <h1 className="lg:text-[8em] md:text-[7em] sm:text-[5em] text-white">
          AERO SCAN
        </h1>
        <img src={RightGrp} alt="right-border-red" className="h-[300px]" />
      </div>
      <div>
        {isPopupVisible && (
          <LiveData droneData={droneData} handleClosePopup={handleClosePopup} />
        )}
      </div>
    </div>
  );
};

export default Home;
