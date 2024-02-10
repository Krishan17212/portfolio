"use client";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="min-h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          // initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        />
        <motion.div
          // initial={{ height: "140vh" }}
          initial={{ opacity: 1, pointerEvents: "none" }}
          animate={{ opacity: 0, pointerEvents: "none" }}
          exit={{ opacity: 0, pointerEvents: "none" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed m-auto left-0 top-0 right-0 bottom-0 text-white text-4xl lg:text-8xl cursor-default z-50 w-fit h-fit capitalize"
        >
          {pathName === "/" ? "Home" : pathName.substring(1)}
        </motion.div>
        <motion.div
          // initial={{ height: "140vh" }}
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
        />
        <Navbar />
        <div className="main">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
