"use client";
import { motion, useInView } from "framer-motion";
import Lottie from "lottie-react";
import skills from "../../../../public/skills.json";
import { mySkills, experienceData } from "@/utils";
import React, { useRef } from "react";

const Page = () => {
  const experienceRef = useRef();
  const skillsRef = useRef();
  const isSkillsInView = useInView(skillsRef, { margin: "-150px" });
  const isExperienceInView = useInView(experienceRef, { margin: "-150px" });
  return (
    <motion.main
      className="flex h-fit items-start justify-center pt-28"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      <div className="about_wrapper w-full py-0 pb-10 md:py-16 lg:py-20 flex items-center justify-center">
        <div className="container">
          <div className="about_inner grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 xl:gap-10">
            {/* Text Container */}
            <div className="left_main order-2 lg:order-1 flex flex-col gap-20 md:gap-32 lg:gap-32 xl:gap-64">
              {/* Biography section */}
              <div className="bio_text flex flex-col gap-12 justify-center">
                <h1 className="text-3xl md:text-4xl font-bold">BIOGRAPHY</h1>
                <p className="text-[17px] font-semibold text-zinc-500">
                  I amm a Front-End Developer with over 40 months of experience
                  specializing in HubSpot CMS development. Over the years, I
                  have fine-tuned my skills in crafting dynamic and engaging
                  websites that leave a lasting impression. <br /> <br /> In
                  addition to my expertise in HubSpot, I have spent 1.5 years
                  diving deep into React.js development. This journey has
                  allowed me to create highly responsive and user-friendly
                  interfaces that elevate the overall user experience.
                  Currently, I am expanding my skill set by learning Next.js and
                  Node.js. My goal is to stay ahead of the curve and continue
                  delivering top-notch solutions that exceed expectations.
                </p>
                <div className="scroll_svg">
                  <motion.svg
                    initial={{ opacity: 0.2, y: "-10px" }}
                    animate={{ opacity: 1, y: ["-10px", "10px", "-10px"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                  >
                    <path
                      d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                      stroke="#000000"
                      strokeWidth="1"
                    ></path>
                    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                    <path
                      d="M15 11L12 14L9 11"
                      stroke="#000000"
                      strokeWidth="1"
                    ></path>
                  </motion.svg>
                </div>
              </div>

              {/* Skills section */}
              <div className="sill_wrapper flex flex-col gap-12 justify-center">
                <motion.h2
                  className="font-bold text-3xl"
                  initial={{ x: "-300px", opacity: 0 }}
                  animate={isSkillsInView ? { x: 0, opacity: 1 } : {}}
                >
                  SKILLS
                </motion.h2>
                <div className="flex gap-4 flex-wrap" ref={skillsRef}>
                  {mySkills.map((item, index) => (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isSkillsInView ? { scale: 1, opacity: 1 } : {}}
                      className=""
                      key={index}
                    >
                      <div className="rounded  p-2 text-md cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                        {item}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="scroll_svg">
                  <motion.svg
                    initial={{ opacity: 0.2, y: "-10px" }}
                    animate={{ opacity: 1, y: ["-10px", "10px", "-10px"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                  >
                    <path
                      d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                      stroke="#000000"
                      strokeWidth="1"
                    ></path>
                    <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                    <path
                      d="M15 11L12 14L9 11"
                      stroke="#000000"
                      strokeWidth="1"
                    ></path>
                  </motion.svg>
                </div>
              </div>

              {/* Experience section */}
              <div
                className="exp_wrapper flex flex-col gap-12 justify-center"
                ref={experienceRef}
              >
                <motion.h2
                  className="font-bold text-3xl"
                  initial={{ x: "-300px", opacity: 0 }}
                  animate={isExperienceInView ? { x: 0, opacity: 1 } : {}}
                >
                  EXPERIENCE
                </motion.h2>
                <div className="exp_main flex flex-col gap-8">
                  {experienceData.map((item, index) => (
                    <motion.div
                      className=""
                      key={item.id}
                      initial={{ x: "-300px", opacity: 0 }}
                      animate={isExperienceInView ? { x: "0", opacity: 1 } : {}}
                      transition={{ delay: 0.4 * index }}
                    >
                      <div className="exp_block w-fit max-w-[460px] rounded-md py-8 px-4 shadow-lg bg-slate-50 shadow-zinc-300">
                        <h3 className="text-xl mb-3 font-semibold">
                          {item.designation}
                        </h3>
                        <p className="text-sm">{item.description}</p>
                        <p className="mt-4 mb-4 text-orange-500 font-semibold text-sm">
                          {item.year}
                        </p>
                        <span className=" inline-block p-2 rounded-md bg-orange-300 text-zinc-700 font-semibold text-sm">
                          {item.company}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image Container */}
            <div className="right_main order-1 lg:order-2">
              <div className="right_inner sticky top-8 h-fit">
                <Lottie className="w-full" animationData={skills} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Page;
