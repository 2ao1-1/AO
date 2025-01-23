import React, { useState, useRef, useEffect } from "react";
import Footer from "./components/Footer";
import Menu from "./components/Menu.js";
import emailjs from "emailjs-com";

export default function Contacts() {
  const spanRefs = {
    name: useRef(null),
    service: useRef(null),
    timeframe: useRef(null),
    budget: useRef(null),
    email: useRef(null),
  };

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

  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      const spanRef = spanRefs[key];
      const inputRef = inputRefs[key];
      if (spanRef.current && inputRef.current) {
        const spanWidth = spanRef.current.offsetWidth;
        inputRef.current.style.width = `${spanWidth + 5}px`;
      }
    });
  }, [formData, inputRefs, spanRefs]);

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
      alert("Failed to send email.Try again.");
      console.error(error);
    }

    resetForm();
    alert("Message prepared");
  };

  const sendWhatsApp = () => {
    if (!validateForm()) return;

    const whatsappMessage = `Hey Ahmed, my name is ${formData.name}. I would like to start a new project with you. I'm looking for ${formData.service}. The timing for this project is ${formData.timeframe}. The budget is ${formData.budget}. You can reach me via email at ${formData.email}.`;

    window.open(
      `https://wa.me/201030960225?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    resetForm();
    alert("Message sent");
  };

  const renderDynamicInput = (name, placeholder) => {
    return (
      <span className="relative inline-block">
        <span
          ref={spanRefs[name]}
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
    <section className="min-h-screen bg-PrimaryDark text-Details font-secondary overflow-hidden">
      <div className="container mx-auto px-6 font-secondary py-32">
        <p className="text-base md:text-2xl mb-6 leading-8">
          Hey Ahmed, my name is{" "}
          {renderDynamicInput("name", "[your first name]")}. I would like to
          start a new project with you. I'm looking for{" "}
          {renderDynamicInput("service", "[type a service]")}. The timing for
          this project is {renderDynamicInput("timeframe", "[timeframe]")}. The
          budget is {renderDynamicInput("budget", "[your budget]")}$. You can
          reach me via email at {renderDynamicInput("email", "[your email]")}.
        </p>

        <div className="grid grid-cols-2 py-8 gap-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={sendWhatsApp}
            className="bg-PrimaryDark/80 text-Details border border-PrimaryLight py-2 px-4  hover:bg-PrimaryLight flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-message-circle"
            >
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            </svg>{" "}
            <span>WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={sendEmail}
            className="bg-PrimaryDark/80 text-Details border border-PrimaryLight py-2 px-4  hover:bg-PrimaryLight flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>{" "}
            <span>Mail</span>
          </button>
        </div>
      </div>
      <Menu />
      <Footer />
    </section>
  );
}
