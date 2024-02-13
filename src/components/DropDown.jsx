import PropTypes from "prop-types";
import { useState } from "react";

const DropDown = ({ showContent, heading, icon, text }) => {
  DropDown.propTypes = {
    showContent: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  const [display, setDisplay] = useState(showContent);

  return (
    <div className=" mb-10 flex flex-col justify-center items-center">
      <div
        onClick={() => setDisplay(!display)}
        className={` ${
          !display
            ? "dropdown-selector dropdown-selector-rounded gap-4 bg-bg-box flex justify-center items-center"
            : "dropdown-selector gap-4 bg-bg-box flex justify-center items-center"
        } `}
      >
        <h2 className=" dropdown-heading">{heading}</h2>
        <div className={`${display ? "dropdown-icon-up" : "dropdown-icon"}`}>
          <img className="w-10 h-10" src={icon} alt="" />
        </div>
      </div>

      <div
        className={`${
          display
            ? "dropdown-text-shown rounded-3xl bg-bg-box mx-4 mb-20"
            : " dropdown-text rounded-3xl bg-bg-box mx-4 mb-20 "
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default DropDown;
