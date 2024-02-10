"use client";
import Lottie from "lottie-react";
import webdev from "../../public/webdev.json";
import { motion } from "framer-motion";
import { heroSvg } from "@/animation";

export default function Home() {
  return (
    <motion.main
      className="flex h-fit items-start justify-center pt-16 md:pt-28"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="homeBanner  w-full py-0 pb-10 md:py-12 lg:py-16 flex items-center justify-center">
        <div className="container">
          <div className="banner_Inner grid md:grid-cols-2 gap-0 md:gap-5 items-center">
            <div className="banner_left ">
              <motion.div
                variants={heroSvg}
                initial="closed"
                animate="opened"
                className=""
              >
                <Lottie className="w-full" animationData={webdev} loop={true} />
              </motion.div>
            </div>
            <div className="banner_right ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                Crafting Digital User Experience, Designing Tomorrow
              </h1>
              <p className="md:text-xl mb-5">
                Welcome to my digital canvas, where innovation and creativity
                converge. With a keen eye for aesthetics and a mastery of code,
                my portfolio showcases a diverse collection of projects that
                reflect my commitment to excellence.
              </p>
              <div className="w-full flex gap-4 justify-center md:justify-start">
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white transition-all ease-linear hover:bg-white hover:text-black">
                  View My Work
                </button>
                <button className="p-4 rounded-lg ring-1 ring-black transition-all ease-linear hover:text-white hover:bg-black">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
