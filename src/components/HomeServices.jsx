import { Link } from "react-router-dom";

const HomeServices = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 p-20">
      <h2 className="section-title">Services</h2>
      <p className="tag-home">
        We offer many services including custom showers, floor & tile
        installations, porch/deck builds, metal roofs, whole house remodels,
        additions, and raised foundation leveling. You name it, we can do it.
        There is no job too big or small. Contact us to get more information and
        to set up a free estimate.
      </p>
      <Link to={"/services"}>
        <button className="btn text-btn-primary border-btn-primary">
          All Services
        </button>
      </Link>
    </div>
  );
};

export default HomeServices;
