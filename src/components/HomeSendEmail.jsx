import { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
// Initialize an agent at application startup.

const HomeSendEmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

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
  };

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
          <div className="flex w-full mt-10 items-center gap-6">
            <div className="flex flex-col pb-20">
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
            <div className="relative pb-20">
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
