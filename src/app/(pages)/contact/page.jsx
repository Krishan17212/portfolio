"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const textData = "Say Hello";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_ID
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };
  return (
    <motion.main
      className="flex h-fit items-start justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="contact_main w-full">
        <div className="container">
          <div className="contact_inner h-screen grid lg:grid-cols-2 items-center">
            {/* Text */}
            <div className="left flex gap-2 text-5xl justify-center items-center">
              <div className="text_main">
                {textData.split("").map((text, index) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    key={index}
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
              😊
            </div>
            {/* Form */}
            <div className="right ">
              <form
                onSubmit={sendEmail}
                ref={form}
                className="h-1/2 lg:h-full bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
              >
                <span>Dear Krishan Kumar,</span>
                <textarea
                  rows={6}
                  className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                  name="user_message"
                />
                <span>My mail address is:</span>
                <input
                  name="user_email"
                  type="text"
                  className="bg-transparent border-b-2 border-b-black outline-none"
                />
                <span>Regards</span>
                <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
                  Send
                </button>
                {success && (
                  <span className="text-green-600 font-semibold">
                    Your message has been sent successfully!
                  </span>
                )}
                {error && (
                  <span className="text-red-600 font-semibold">
                    Something went wrong!
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Page;
