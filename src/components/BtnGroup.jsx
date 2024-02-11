import { useState } from "react";
import PopForm from "./PopForm";
import PropTypes from "prop-types";

const BtnGroup = ({ contact, customerSevice, quote }) => {
  BtnGroup.propTypes = {
    contact: PropTypes.bool.isRequired,
    customerSevice: PropTypes.bool.isRequired,
    quote: PropTypes.bool.isRequired,
  };
  const [openForm, setOpenForm] = useState(false);
  const [showGetQuote, setShowGetQuote] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showCustomerService, setShowCustomerService] = useState(false);
  console.log(contact, customerSevice, quote);
  const handleQuote = () => {
    setShowGetQuote(true);
    setShowContact(false);
    setShowCustomerService(false);
    setOpenForm(true);
  };

  const handleContact = () => {
    setShowGetQuote(false);
    setShowContact(true);
    setShowCustomerService(false);
    setOpenForm(true);
  };

  const handleCustomerService = () => {
    setShowGetQuote(false);
    setShowContact(false);
    setShowCustomerService(true);
    setOpenForm(true);
  };

  return (
    <div className="flex gap-4">
      {contact ? (
        <button
          onClick={handleContact}
          className="btn text-btn-primary border-btn-primary"
        >
          Contact
        </button>
      ) : (
        customerSevice && (
          <button
            onClick={handleCustomerService}
            className="btn text-btn-primary border-btn-primary"
          >
            Customer Service
          </button>
        )
      )}
      <button
        onClick={handleQuote}
        className="btn text-btn-primary border-btn-primary"
      >
        Get a Quote
      </button>
      {showGetQuote || showContact || showCustomerService ? (
        <PopForm
          openForm={openForm}
          setOpenForm={setOpenForm}
          showCustomerService={showCustomerService}
          showContactForm={showContact}
          showQuoteForm={showGetQuote}
        />
      ) : null}
    </div>
  );
};

export default BtnGroup;
