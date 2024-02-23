import { useState, useEffect } from "react";
import { z } from "zod";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import PropTypes from "prop-types";
import iconClose from "../assets/icons/icon--close.png";
import JobTypes from "./JobTypes";
import PopModal from "./PopModal";

// Define Zod schema for form data validation
const validateFormData = (formData, showContactForm) => {
  console.log(showContactForm, "contact");
  const formDataSchema = z.object({
    service: z.string().optional(),
    type: showContactForm
      ? z.string().optional()
      : z.string().min(1, { message: "Type is required" }),

    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, { message: "Email is required" }),
    phone: z.string().min(1, { message: "Phone is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  return formDataSchema.parse(formData);
};

const PopForm = ({
  openForm,
  setOpenForm,
  showCustomerService,
  showContactForm,
  showQuoteForm,
}) => {
  const [formData, setFormData] = useState({
    service: "",
    type: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [responseGood, setResponseGood] = useState(false);
  const [responseFailure, setResponseFailure] = useState(false);
  const [TooManyRequests, setTooManyRequests] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (openForm) {
    document.body.style.overflow = "hidden";
  }

  // Initialize an agent at application startup.
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

  useEffect(() => {
    showCustomerService
      ? setFormData({
          ...formData,
          service: `${formData.type} Customer Service`,
        })
      : null;
  }, []);

  if (TooManyRequests && isSending) {
    setIsSending(false);
  }

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Validate the changed field
    try {
      validateFormData({ ...formData, [name]: value });
      // If validation passes, clear the error message for the field
      setErrors({ ...errors, [name]: undefined });
    } catch (error) {
      // If validation fails, set the error message for the field
      setErrors({ ...errors, [name]: error.formErrors.fieldErrors[name] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitted(true);

    try {
      // Validate form data against schema
      validateFormData(formData, showContactForm);

      // If validation passes, submit the form
      setIsSending(true);
      setErrors({});

      const response = await fetch(
        "https://leach-construction.web.app/server",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setResponseGood(true);
        setResponseFailure(false);
        const responseData = await response.json();
        if (responseData.remainingTime) {
          setRemainingTime(responseData.remainingTime);
        }
      } else if (response.status === 429) {
        setTooManyRequests(true);
        const responseData = await response.json();
        if (responseData.remainingTime) {
          setRemainingTime(responseData.remainingTime);
        }
      } else if (response.status === 500) {
        setResponseGood(false);
        setResponseFailure(true);
      } else {
        setResponseGood(false);
        setResponseFailure(false);
        setTooManyRequests(false);
      }
    } catch (error) {
      console.error("Form validation error:", error.errors);
      setErrors(error.formErrors.fieldErrors);
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = (e) => {
    console.log("closing form");
    document.body.style.overflow = "scroll";
    setResponseGood(false);
    setResponseFailure(false);
    setTooManyRequests(false);
    setIsSending(false);
    setErrors({});
    e.preventDefault();
    setOpenForm(false);
    setFormData({
      type: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  console.log(responseGood, "good");
  console.log(responseFailure, "fail");
  console.log(TooManyRequests, "2many");
  console.log(remainingTime, "remaining");

  const time = `${remainingTime && remainingTime.hours}h ${
    remainingTime && remainingTime.minutes
  }m ${remainingTime && remainingTime.seconds}s`;

  return (
    <>
      {" "}
      {openForm && (
        <div className="pop-form overflow-auto fixed left-0 top-0 right-0  bottom-0 w-screen h-screen  bg-bg-box z-50">
          {TooManyRequests ? (
            <PopModal
              visibility={TooManyRequests}
              close={handleClose}
              color="yellow"
              title="TOO MANY EMAILS"
              lgText="Sorry, you have sent too many emails"
              smText={`Please wait ${time} and try again.`}
            />
          ) : responseFailure ? (
            <PopModal
              visibility={responseFailure}
              close={handleClose}
              color="red"
              title="Server Failure 500"
              lgText="Sorry, there was a network error."
              smText="Please, give it another try. If it still doesn't work refresh the page, and try again"
            />
          ) : (
            responseGood && (
              <PopModal
                visibility={responseGood}
                close={handleClose}
                color="green"
                title="SUCCESS!"
                lgText="Your email was sent!"
                smText="We will call, or message you as soon as possible!"
              />
            )
          )}
          <div className="flex w-full justify-center items-center">
            <div className="pop-bg">
              <>
                {/** Header */}
                <div className="w-full font-sans flex flex-col items-center justify-center mt-10">
                  <div className="home-send-email w-fit p-28 py-0 pb-6 bg-bg-box flex flex-col justify-center items-center text-center">
                    <h2 className="section-title">
                      {showQuoteForm && (
                        <>
                          🤷‍♂️💰 <br /> Get a quote
                        </>
                      )}{" "}
                      {showContactForm && (
                        <>
                          👋 <br /> Contact us about anything
                        </>
                      )}
                      {showCustomerService && (
                        <>
                          👷‍♂️ <br /> Customer Service Request
                        </>
                      )}
                    </h2>
                    {showQuoteForm && (
                      <>
                        <p className="font-bold">Know what you need done?</p>
                        <p>
                          Tell us as many details as you can, and we&#39;ll send
                          you an estimate!👍{" "}
                        </p>
                      </>
                    )}{" "}
                    {showContactForm && (
                      <>
                        <p className="font-bold">
                          Want to know something about us?
                        </p>
                        <p>
                          We are happy to answer any, and all questions you
                          might have. 🧐
                        </p>
                      </>
                    )}
                    {showCustomerService && (
                      <>
                        <p className="font-bold">
                          Need us to revisit for some reason?
                        </p>
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
                          {submitted && errors.name && (
                            <p className="font-red">Must include a name</p>
                          )}
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
                          {submitted && errors.email && (
                            <p className="font-red">
                              {" "}
                              {errors.email.map((err, index) => (
                                <p key={index}>{err}</p>
                              ))}
                            </p>
                          )}
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
                          {submitted && errors.phone && (
                            <p className="font-red">Must include a phone</p>
                          )}
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
                            {submitted && errors.type && (
                              <p className="font-red">Must include a type</p>
                            )}
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
                          {submitted && errors.message && (
                            <p className="font-red">Must include a message</p>
                          )}
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
                          handleClose(e);
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
PopForm.propTypes = {
  openForm: PropTypes.bool.isRequired,
  setOpenForm: PropTypes.func.isRequired,
  showCustomerService: PropTypes.bool.isRequired,
  showContactForm: PropTypes.bool.isRequired,
  showQuoteForm: PropTypes.bool.isRequired,
};
export default PopForm;
