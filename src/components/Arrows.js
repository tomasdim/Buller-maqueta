import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function Arrows() {
  return (
    <>
      <div className="arrow-container">
        <div className="arrow">
          <KeyboardArrowLeftIcon
            style={{ alignSelf: "center", color: "white", fontSize: 24 }}
          />
        </div>
        <div className="arrow">
          <KeyboardArrowRightIcon style={{ color: "white", fontSize: 24 }} />
        </div>
      </div>
    </>
  );
}

export default Arrows;
