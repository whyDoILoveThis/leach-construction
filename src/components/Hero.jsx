const Hero = () => {
  return (
    <section className="w-full bg-cyan-600 flex justify-between items-center">
      <img src="../src/assets/hero-home.jpg" alt="" />
      <div className="hero-tag mt-40 p-10 pb-6 pr-14 bg-black-70 flex flex-col items-center">
        <h1 className="hero-title">Leach Construction</h1>
        <p className="hero-location pt-6 pb-8  pl-96">Union, MS</p>
        <p className="tag pl-32">
          Accurate knowledge of our trade combined with ability is what makes us
          true professionals. Above all, we are watchful of our customer’s
          interests and make their concerns the basis of our business.
        </p>
        <div className="btn-wrap mt-8">
          <button className="btn text-btn-primary border-btn-primary">
            Contact
          </button>
          <button className="btn text-btn-primary border-btn-primary">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
