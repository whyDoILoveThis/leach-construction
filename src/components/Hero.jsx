import heroImg from "/src/assets/hero-home.jpg";
import BtnGroup from "./BtnGroup";
const Hero = () => {
  const contact = true;
  const customerService = false;
  const quote = true;
  return (
    <section className="w-full flex justify-between items-center">
      <img className="hero-img" src={heroImg} alt="" />
      <div className="hero-tag mt-40 p-10 pb-6 pr-14 bg-black-70 flex flex-col items-center">
        <h1 className="hero-title">Leach Construction</h1>
        <p className="hero-location pt-6 pb-8  pl-96">Union, MS</p>
        <p className="tag pl-32">
          Accurate knowledge of our trade combined with ability is what makes us
          true professionals.
        </p>
        <div className="btn-wrap mt-8">
          <BtnGroup
            contact={contact}
            customerSevice={customerService}
            quote={quote}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
