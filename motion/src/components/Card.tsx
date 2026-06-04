import { motion } from "motion/react";

export function Card() {
  return (
    <div>
      <div className="h-screen w-screen flex justify-center items-center">
        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1.05,
            boxShadow: "0px 0px 3px",
          }}
          transition={{
            duration: 2,
            ease:"easeInOut"
          }}
          className="px-4 py-2 h-72 w-72 rounded-2xl"
        >
          <div className="w-full h-full rounded-xl flex">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              whileHover={{
                opacity: 1,
                scale: 1.05,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="pl-3 pt-2 font-medium from-neutral-900 flex-flex-wrap bg-white"
            >
              React gives you the power to build dynamic user interfaces, but
              orchestrating complex, performant animations can be a challenge.
              Motion is a production-ready React animation library designed to
              solve this problem, making it simple to create everything
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
