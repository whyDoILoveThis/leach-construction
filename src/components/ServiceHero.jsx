import "../styles/ServiceHero.css";

const ServiceHero = () => {
  return (
    <section className="w-full relative bg-cyan-600 flex justify-between items-center">
      <img src="../src/assets/bath/bath-hero.png" alt="" />
      <div className="rounded-3xl rounded-l-none absolute bottom-2 mt-40 xs:p-3 pb-6 pr-14 bg-black-70 max-w-fit">
        <h1 className="service-hero-fontsz xxs:mt-3 xxs:ml-8  xs:mb-6 xs:mx-12">
          Custom Bathrooms
        </h1>
      </div>
    </section>
  );
};

export default ServiceHero;
