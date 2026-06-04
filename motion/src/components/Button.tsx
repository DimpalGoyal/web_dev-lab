import {motion, rgba} from "motion/react"

export function Button() {
  return (
    <div className=" bg-neutral-900  h-screen w-full flex items-center justify-center" style={{
        backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, rgba(7,182,212,0.2) 0.5px, transparent 0 )',
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
    }}>
      <motion.button 
      whileHover={{
        rotateX: 10,
        rotateY: -20,
        boxShadow: "2px 2px 0px"
      }}
      whileTap={{
        rotateX:0,
        rotateY:0,
        boxShadow: "-0.5px -0.5px 0px",
      }}
      style={{
        translateZ: 100,
      }}
      className="relative bg-black cursor-pointer  text-neutral-500 px-14 py-4 rounded-2xl hover:text-white active:text-gray-300">
        click
      </motion.button>
    </div>
  );
}
