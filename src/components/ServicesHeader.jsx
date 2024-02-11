import BtnGroup from "./BtnGroup";

const ServicesHeader = () => {
  const contact = false;
  const customerService = true;
  const quote = true;
  return (
    <div className="pt-24 flex flex-col items-center">
      <h2 className="section-title">Our Services</h2>
      <div className="my-text-box bg-bg-box p-6 mx-8 footer">
        <p>
          We offer many services including custom bathrooms, floor & tile
          installations, porch/deck builds, metal roofs, whole house remodels,
          additions, and raised foundation leveling. You name it, we can do it.
          There is no job too big or small. Contact us to get more information
          and to set up a free estimate.
        </p>
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
