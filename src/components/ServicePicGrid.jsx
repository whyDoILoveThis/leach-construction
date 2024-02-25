import PropTypes from "prop-types";
import "../styles/ServicePicGrid.css";

const ServicePicGrid = ({ pics }) => {
  return (
    <div className="flex flex-col gap-2 mb-20 mt-16">
      <div className="wrap1 flex gap-2">
        <img className="pic0" src={pics[0]} alt="pic0" />
        <img className="pic1" src={pics[1]} alt="pic1" />
      </div>
      <div className="wrap2 flex gap-2">
        <img className="pic2" src={pics[2]} alt="pic2" />
        <img className="pic3" src={pics[3]} alt="pic3" />
      </div>
    </div>
  );
};

export default ServicePicGrid;

ServicePicGrid.propTypes = {
  pics: PropTypes.array.isRequired,
};
