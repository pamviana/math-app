import React from "react";
import "./Home.styles.css";
import { HiMenu } from "react-icons/hi";
import HomeItem from "./HomeItem/HomeItem.component";
// import { AiOutlineCamera } from "react-icons/ai";
// import { BsCardImage } from "react-icons/bs";
// import { HiPencilAlt } from "react-icons/hi";

function Home() {
  return (
    <section className="home-section">
      <header className="home-header">
        <HiMenu
          className="menu-icon"
          size={"2em"}
          onClick={() => console.log("Menu pressed")}
        />
      </header>
      <div className="home-container">
        <ul>
          <HomeItem  paragraph="Upload" /> {/*icon={<BsCardImage size={"1.2em"} color="rgb(97, 97, 97)"/>}*/}
          <HomeItem  paragraph="Scan" /> {/*icon={<AiOutlineCamera size={"1.2em"} color="rgb(97, 97, 97)"/>}*/}
          <HomeItem  paragraph="Draw" /> {/*icon={<HiPencilAlt size={"1.2em"} color="rgb(97, 97, 97)"/>}*/}
        </ul>
      </div>
    </section>
  );
}

export default Home;
