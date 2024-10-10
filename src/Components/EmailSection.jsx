import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function EmailSection() {
  const [emailSubmit, setEmailSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      sujet: e.target.sujet.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch("api/send", options);
    const resData = await response.json();

    if (resData.status === 200) {
      console.log("Message envoyé");
      setEmailSubmit(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-10 md:gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contactez-moi</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Vous avez une idée en tête ? Je suis un développeur passionné et je
          serais ravi de vous aider à la concrétiser. N'hésitez pas à me
          contacter pour discuter de vos besoins et de cette idée. <br />
          Tél : <span className="font-bold">+261 34 49 834 94</span>
        </p>
        <div className="flex flex-row gap-5">
          <Link
            to="https://www.linkedin.com/in/narcisse-d%C3%A9sir%C3%A9-b5b80b230/"
            className="text-[#ffffff] text-[50px]"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://github.com/narcissedesire?tab=repositories"
            className="text-[#ffffff] text-[50px]"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Votre e-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john@gmail.com"
            />
          </div>
          <div>
            <label
              htmlFor="sujet"
              className="text-white block mb-2 text-sm font-medium"
            >
              Sujet
            </label>
            <input
              type="text"
              name="sujet"
              id="sujet"
              required
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ce que vous volez..."
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              required
              id="message"
              className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Votre message ..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-secondary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Envoyer Message
          </button>
          {emailSubmit && (
            <p className="text-green-500 text-sm mt-2">
              E-mail envoyé avec succès
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
