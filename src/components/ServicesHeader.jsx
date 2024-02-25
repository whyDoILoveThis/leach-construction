import BtnGroup from "./BtnGroup";
import PropTypes from "prop-types";

const ServicesHeader = ({ title, text }) => {
  ServicesHeader.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };
  const contact = true;
  const customerService = false;
  const quote = true;
  return (
    <div
      className={`${
        title === "" ? "pt-24" : "pt-44"
      } flex flex-col items-center`}
    >
      <h2 className="section-title">{title}</h2>
      <div className="my-text-box bg-bg-box p-6 mx-8 footer">
        <p>{text}</p>
      </div>
      <div className="btn-wrap">
        <div className=" btn-wrap-bg bg-bg-box mx-8 mb-10 p-4 pb-0">
          <div className="mb-4">
            <BtnGroup
              contact={contact}
              customerSevice={customerService}
              quote={quote}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
