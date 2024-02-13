import { useState } from "react";
import iconClose from "../assets/icons/icon--close.png";
import PropTypes from "prop-types";

const PopModal = ({ visibility, close, color, title, lgText, smText }) => {
  PopModal.propTypes = {
    visibility: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lgText: PropTypes.string.isRequired,
    smText: PropTypes.string.isRequired,
  };
  const [isVisible, setVisiblilty] = useState(visibility);

  return (
    <>
      {isVisible && (
        <div className="blurry-bg overflow-auto fixed flex items-center left-0 top-0 w-screen h-screen bg-bg-box z-50">
          <div className="flex w-full justify-center items-center">
            <div
              className={`pop-bg ${
                color === "yellow"
                  ? "pop-yellow"
                  : color === "red"
                  ? "pop-red"
                  : color === "green"
                  ? "pop-green"
                  : ""
              }`}
            >
              <>
                {/** Header */}
                <div className="w-full font-sans flex flex-col items-center justify-center my-10">
                  <div className="rounded-3xl m-10 w-fit p-28 py-0 pb-6 bg-bg-box flex flex-col justify-center items-center text-center">
                    <h2 className="font-32px font-bold">{title}</h2>
                    <p className="font-24px">{lgText}</p>
                    <p className="font-16px font-white">{smText}</p>
                  </div>

                  <button
                    onClick={(e) => {
                      setVisiblilty(false);
                      close(e);
                    }}
                    className="absolute right-4 top-4"
                  >
                    <img src={iconClose} className="w-14 h-14" alt="close" />
                  </button>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopModal;
