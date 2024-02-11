import { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import PropTypes from "prop-types";
import iconClose from "../assets/icons/icon--close.png";
import JobTypes from "./JobTypes";

// Initialize an agent at application startup.

const PopForm = ({
  openForm,
  setOpenForm,
  showCustomerService,
  showContactForm,
  showQuoteForm,
}) => {
  PopForm.propTypes = {
    openForm: PropTypes.bool.isRequired,
    setOpenForm: PropTypes.func.isRequired,
    showCustomerService: PropTypes.bool.isRequired,
    showContactForm: PropTypes.bool.isRequired,
    showQuoteForm: PropTypes.bool.isRequired,
  };
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    showCustomerService
      ? setFormData({ ...formData, type: "Customer Service" })
      : null;
  });

  useEffect(() => {
    const generateFingerprint = async () => {
      const fpPromise = FingerprintJS.load();

      // Get the visitor identifier when you need it.
      const fp = await fpPromise;
      const result = await fp.get();
      console.log(result.visitorId);

      setFormData((prevFormData) => ({
        ...prevFormData,
        fingerprint: result.visitorId,
      }));
    };

    generateFingerprint();
  }, []);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    await fetch("http://localhost:8000/server", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convert form data to JSON
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    setIsSending(false);
    setFormData({ type: "", name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {" "}
      {openForm && (
        <div className="pop-form overflow-auto fixed left-0 top-0 w-screen h-screen bg-bg-box z-50">
          <div className="flex w-full justify-center items-center">
            <div className="pop-bg">
              <>
                {/** Header */}
                <div className="w-full font-sans flex flex-col items-center justify-center mt-10">
                  <div className="home-send-email w-fit p-28 py-0 pb-6 bg-bg-box flex flex-col justify-center items-center text-center">
                    <h2 className="section-title">
                      {showQuoteForm && "💰 Get a quote"}{" "}
                      {showContactForm && "👋 Contact us about anything"}
                      {showCustomerService && "👷‍♂️ Customer Service Request"}
                    </h2>
                    {showQuoteForm && (
                      <>
                        <p>Know what you need done?</p>
                        <p>
                          Tell us as many details as you can, and we&#39;ll send
                          you an estimate!👍{" "}
                        </p>
                      </>
                    )}{" "}
                    {showContactForm && (
                      <>
                        <p>Want to know something about us?</p>
                        <p>
                          We are happy to answer any, and all questions you
                          might have. 🧐
                        </p>
                      </>
                    )}
                    {showCustomerService && (
                      <>
                        <p>Need us to revisit for some reason?</p>
                        <p>
                          Tell us exactly what&#39;s going on, and we&#39;ll be
                          glad to help! 👍
                        </p>
                      </>
                    )}
                  </div>
                  {/** Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="flex pop-form-wrap w-full mt-10 items-center gap-6">
                      <div className="flex flex-col items-center">
                        <div className="flex flex-col pb-6">
                          <label className="pl-4" htmlFor="input">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-bg-box input"
                          />
                          <label className="pl-4" htmlFor="input">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-bg-box input"
                          />
                          <label className="pl-4" htmlFor="input">
                            Phone
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-bg-box input"
                          />
                        </div>
                        {showQuoteForm || showCustomerService ? (
                          <div className="mb-4">
                            <JobTypes
                              formDataType={formData.type}
                              handleChange={handleChange}
                            />
                          </div>
                        ) : null}
                      </div>
                      <div className="relative pb-20">
                        <div className="flex flex-col mb-2">
                          <label className="pl-4" htmlFor="input">
                            Message
                          </label>
                          <textarea
                            className="bg-bg-box input textarea"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            id=""
                            cols="30"
                            rows="10"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="btn absolute right-4 bottom-0 mb-10 text-btn-primary border-btn-primary"
                          disabled={isSending}
                        >
                          {isSending ? "Sending..." : "Send"}
                        </button>
                      </div>
                      <button
                        className="absolute right-4 top-4"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenForm(false);
                        }}
                      >
                        <img
                          src={iconClose}
                          className="w-14 h-14"
                          alt="close"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopForm;
