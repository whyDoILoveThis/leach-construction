import { Link } from "react-router-dom";

//icons
import iconShower from "../assets/icons/icon--shower.jpg";
import iconFloor from "../assets/icons/icon--floor.png";
import iconDeck from "../assets/icons/icon--deck.jpg";
import iconRemodel from "../assets/icons/icon--house.jpg";
import iconRoofing from "../assets/icons/icon--roof-worker.png";
import iconAddition from "../assets/icons/icon--addition.png";
import iconRequest from "../assets/icons/icon--custom.jpg";

//images
import bath from "../assets/bathrooms.jpg";
import floor from "../assets/floors.jpg";
import porch from "../assets/porches.jpg";
import remodel from "../assets/remodels.png";
import roof from "../assets/roofing.jpg";
import addition from "../assets/additions.jpg";
import happyMan from "../assets/happy-worker.webp";

const services = [
  {
    icon: iconShower,
    title: "Bathrooms",
    img: bath,
    link: "/bathrooms",
  },
  {
    icon: iconFloor,
    title: "Floor",
    img: floor,
    link: "/floors",
  },
  {
    icon: iconDeck,
    title: "Porches",
    img: porch,
    link: "/porches",
  },
  {
    icon: iconRemodel,
    title: "Entire Remodels",
    img: remodel,
    link: "/remodels",
  },
  {
    icon: iconRoofing,
    title: "Roofing",
    img: roof,
    link: "/roofing",
  },
  {
    icon: iconAddition,
    title: "Additions",
    img: addition,
    link: "/additions",
  },
];

const ServicesList = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-center">
        <div className="grid xxs:grid-cols-1 xs:grid-cols-2 xxs:gap-20 xxs:p-16 xs:gap-10 xs:px-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              <div className="w-[100%] ">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <img className="w-14 h-14" src={service.icon} alt="" />
                  <h3>{service.title}</h3>
                </div>
                <div className="bg-bg-box p-4 rounded-3xl">
                  <img className="rounded-3xl" src={service.img} alt="" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center my-20">
        <div className="w-[328px] ">
          <h3>Unique Request</h3>
          <div className="bg-bg-box p-4 rounded-2xl">
            <img className="rounded-2xl" src={happyMan} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
