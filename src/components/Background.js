import backgroundImage from "../assets/Background.png";
import TextBox from "./TextBox";
import background from "../assets/Background.png";
import TabsMenu from "./TabsMenu";
import Arrows from "./Arrows";

function Background() {
  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <Arrows />
      <TextBox />
      <div className="tabs-menu-container">
        <TabsMenu></TabsMenu>
      </div>
    </>
  );
}

export default Background;
