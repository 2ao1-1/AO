import { useState, useRef, useEffect } from "react";

import Header from "../Layout/Header";
import Footer from "./../Layout/Footer";
import MainNoise from "../Layout/MainNoise";
import emailjs from "@emailjs/browser";
import { Data } from "../Data";

export default function Contacts() {
  const spanRefs = useRef({
    name: null,
    service: null,
    timeframe: null,
    budget: null,
    email: null,
  });

  const inputRefs = {
    name: useRef(null),
    service: useRef(null),
    timeframe: useRef(null),
    budget: useRef(null),
    email: useRef(null),
  };

  const [formData, setFormData] = useState({
    name: "",
    service: "",
    timeframe: "",
    budget: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      service: "",
      timeframe: "",
      budget: "",
      email: "",
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      const spanRef = spanRefs.current[key];
      const inputRef = inputRefs[key];
      if (spanRef && inputRef.current) {
        const spanWidth = spanRef.offsetWidth;
        inputRef.current.style.width = `${spanWidth + 5}px`;
      }
    });
    // eslint-disable-next-line
  }, [formData]);

  const validateForm = () => {
    const { name, service, timeframe, budget, email } = formData;
    if (!name || !service || !timeframe || !budget || !email) {
      alert("Please fill in all fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const sendEmail = async () => {
    if (!validateForm()) return;
    try {
      await emailjs.send(
        "service_heqyo3b",
        "template_9atdkq9",
        formData,
        "zMRlnpmXzMo_B30Ar"
      );
      alert("The message was sent successfully via email!");
    } catch (error) {
      alert("Failed to send email. Try again.");
      console.error(error);
    }

    resetForm();
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const whatsappMessage = `Hey Ahmed, my name is ${formData.name}. I would like to start a new project with you. I'm looking for ${formData.service}. The timing for this project is ${formData.timeframe}. The budget is ${formData.budget}. You can reach me via email at ${formData.email}.`;

    window.open(
      `https://wa.me/201030960225?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    resetForm();
  };

  const renderDynamicInput = (name, placeholder) => {
    return (
      <span className="relative inline-block">
        <span
          ref={(el) => (spanRefs.current[name] = el)}
          className="absolute invisible whitespace-nowrap px-1"
        >
          {formData[name] || placeholder}
        </span>
        <input
          ref={inputRefs[name]}
          type="text"
          name={name}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          className="text-base md:text-2xl placeholder-Main bg-transparent text-Main px-1"
          style={{ minWidth: "5px" }}
        />
      </span>
    );
  };

  return (
    <MainNoise>
      <section className="min-h-screen bg-PrimaryDark text-Details font-secondary overflow-hidden z-40 relative">
        <Header role={Data.role} />
        <div className="container mx-auto px-6 font-secondary py-32">
          <p className="text-base md:text-2xl mb-6 leading-8">
            Hey Ahmed, my name is{" "}
            {renderDynamicInput("name", "[your first name]")}. I would like to
            start a new project with you. I'm looking for{" "}
            {renderDynamicInput("service", "[type a service]")}. The timing for
            this project is {renderDynamicInput("timeframe", "[timeframe]")}.
            The budget is {renderDynamicInput("budget", "[your budget]")}$. You
            can reach me via email at{" "}
            {renderDynamicInput("email", "[your email]")}.
          </p>

          <div className="grid grid-cols-2 py-8 gap-4 max-w-md mx-auto">
            <button
              type="button"
              onClick={sendWhatsApp}
              className="bg-PrimaryDark/80 text-Details border border-PrimaryLight py-2 px-4 hover:bg-PrimaryLight flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>{" "}
              <span>WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={sendEmail}
              className="bg-PrimaryDark/80 text-Details border border-PrimaryLight py-2 px-4 hover:bg-PrimaryLight flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>{" "}
              <span>Mail</span>
            </button>
          </div>
        </div>
        {/* <Menu /> */}
        <Footer />
      </section>
    </MainNoise>
  );
}
