"use client";
import { workData } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <motion.main
      className="flex h-fit items-start justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1 }}
    >
      {/* Banner Section */}
      <div className="portfolio_banner pt-32 w-full h-auto pb-20">
        <div className="container flex flex-col gap-12">
          <h1 className="text-5xl lg:text-6xl font-semibold text-center">
            My Works
          </h1>
          {/* Project Section */}
          <div className="project_main grid md:grid-cols-2 gap-8 mt-12">
            {workData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, ease: "easeInOut" }}
                className="rounded-md border-2 border-slate-400 overflow-hidden bg-slate-50"
              >
                <div className="imgSection overflow-hidden mb-5 ">
                  <motion.div
                    className=""
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <Image
                      src={data.imgUrl}
                      width={650}
                      height={500}
                      alt={data.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                </div>
                <div className="text-section px-4 pb-4">
                  <h2 className="text-2xl font-semibold mb-4">{data.name}</h2>
                  <p className="text-zinc-700 mb-4">{data.description}</p>
                  <p className="flex flex-wrap gap-3 mb-4">
                    {data.technology.map((innerItem, innerIndex) => (
                      <span
                        key={innerIndex}
                        className="inline-block p-2 rounded-md bg-blue-200 text-sm"
                      >
                        {innerItem}
                      </span>
                    ))}
                  </p>
                  <Link
                    href={data.url}
                    target="_blank"
                    className="py-3 px-5 rounded bg-purple-200 inline-block text-zinc-600 font-semibold hover:bg-purple-400 transition-colors duration-300"
                  >
                    Demo
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default page;
