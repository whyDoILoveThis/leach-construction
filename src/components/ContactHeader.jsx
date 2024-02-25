import BtnGroup from "./BtnGroup";
import location from "../assets/location.png";

const ContactHeader = () => {
  const contact = true;
  const customerService = false;
  const quote = true;
  return (
    <div>
      <div className="pt-32 flex flex-col items-center">
        <h2 className="section-title  mb-10">🤙 Contact Us</h2>

        <div className="mb-4 ">
          <BtnGroup
            contact={contact}
            customerSevice={customerService}
            quote={quote}
          />
          <div className="flex w-full justify-center m-4 mt-8">
            <BtnGroup contact={false} customerSevice={true} quote={false} />
          </div>
        </div>
        <h2 className="font-32px font-bold  my-20">
          <a href="tel: 6015759987">📞 601-555-8888</a>
        </h2>
        <h2 className="font-32px font-bold mb-20">📧 Leach@construct.com</h2>
        <h2 className="font-32px font-bold mb-2">📍 Location</h2>
        <img className="location rounded-3xl mb-20" src={location} alt="" />
      </div>
    </div>
  );
};

export default ContactHeader;
