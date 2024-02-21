import { useState, useEffect } from "react";
// import { z } from "zod";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import PopModal from "./PopModal";
import { Client, Functions } from "appwrite";

// Initialize an agent at application startup.

const HomeSendEmail = () => {
  const [formData, setFormData] = useState({
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

  // // Define Zod schema for form data validation
  // const validateFormData = (formData) => {
  //   const formDataSchema = z.object({
  //     service: z.string().optional(),

  //     name: z.string().min(1, { message: "Name is required" }),
  //     email: z
  //       .string()
  //       .min(1, { message: "Must include email" })
  //       .email("Invalid email address"),
  //     phone: z.string().min(1, { message: "Phone is required" }),
  //     message: z.string().min(10, { message: "Must be atleast 10 characters" }),
  //   });

  //   return formDataSchema.parse(formData);
  // };

  useEffect(() => {
    const generateFingerprint = async () => {
      const fpPromise = FingerprintJS.load();

      // Get the visitor identifier when you need it.
      const fp = await fpPromise;
      const result = await fp.get();
      console.log(result.visitorId);

      //   setFormData((prevFormData) => ({
      //     ...prevFormData,
      //     fingerprint: result.visitorId,
      //   }));
    };

    generateFingerprint();
  }, []);

  if (TooManyRequests && isSending) {
    setIsSending(false);
  }

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // // Validate the changed field
    // try {
    //   validateFormData({ ...formData, [name]: value });
    //   // If validation passes, clear the error message for the field
    //   setErrors({ ...errors, [name]: undefined });
    // } catch (error) {
    //   // If validation fails, set the error message for the field
    //   setErrors({ ...errors });
    // }
  };

  const handleSubmit = async (e) => {
    console.log("handling submit");
    e.preventDefault();
    setIsSending(true);
    setSubmitted(true);

    console.log("making new client");
    const client = new Client()
      .setEndpoint("https://65cd084d627d034d4321.appwrite.global")
      .setProject("65cd04cdb5b8c2540e5a");
    console.log("created client");

    const functions = new Functions(client);

    try {
      // // Validate form data against schema
      // validateFormData(formData);

      // // If validation passes, submit the form
      // setIsSending(true);
      // setErrors({});
      const response = await functions.createExecution(
        "65cd084ce054433e9f44",
        JSON.stringify({ formData }),
        false,
        "/",
        "POST",
        { "Content-Type": "application/json" }
      );
      console.log("requested");
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
    } catch (err) {
      // console.error("Form validation error:", error);
      console.error(err.message);
    } finally {
      setIsSending(false);
    }
  };

  const handleClose = (e) => {
    console.log("closing form");
    setResponseGood(false);
    setResponseFailure(false);
    setTooManyRequests(false);
    setIsSending(false);
    setErrors({});
    e.preventDefault();
    setFormData({
      type: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const time = `${remainingTime && remainingTime.hours}h ${
    remainingTime && remainingTime.minutes
  }m ${remainingTime && remainingTime.seconds}s`;

  return (
    <>
      {/** Header */}
      <div className="w-full flex flex-col items-center justify-center mt-28">
        <div className="home-send-email w-fit p-28 py-0 pb-6 bg-bg-box flex flex-col justify-center items-center text-center">
          <h2 className="section-title">Send us an email</h2>
          <p>You can send us an email right from here.</p>
          <p>No need to navigate to another page.</p>
        </div>
        {/** Form */}
        <form onSubmit={handleSubmit}>
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
          <div className="flex form-wrap w-full mt-10 items-center gap-6">
            <div className="flex flex-col pb-20">
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
            <div className="relative pb-20">
              <div className="flex flex-col mb-3">
                <label className="pl-4" htmlFor="input">
                  Message
                </label>
                {submitted && errors.message && (
                  <p className="font-red">{errors.message}</p>
                )}
                <textarea
                  placeholder="👋 Hi there! I was wondering...."
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
          </div>
        </form>
        <div className="h-20"></div>
      </div>
    </>
  );
};

export default HomeSendEmail;
