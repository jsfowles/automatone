import { motion } from 'framer-motion';
import React from 'react';
import ReactRevealText from 'react-reveal-text';
const Index = () => {
  const [timer, setTimer] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(true);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex place-content-center max-w-screen-xl p-20 md:p-8 mx-auto">
      <motion.div
        initial={{ y: 'calc(50vh - 90px)' }}
        animate={
          timer && {
            y: '0vh',
            transition: {
              delay: 0.25,
              duration: 3,
              type: 'spring',
              delayChildren: 2,
              staggerChildren: 0.5,
            },
          }
        }
      >
        <ReactRevealText
          show={timer}
          transitionTime={1000}
          text="Automatone"
          className="js-shadow-display text-center font-display text-display text-white mx-auto uppercase pb-10 md:pb-0"
        />

        <motion.div className="flex flex-col lg:flex-row mx-auto">
          <div className="flex js-shadow-body w-full lg:w-1/2 text-white text-body justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: 90 }}
              animate={
                timer && {
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.75, duration: 2, type: 'spring' },
                }
              }
              className="text-display lg:text-h1 pb-10 lg:pb-0"
            >
              PREAMP MKII
            </motion.h1>
          </div>
          <motion.figure
            initial={{ opacity: 0, y: 90 }}
            animate={
              timer && {
                opacity: 1,
                y: 0,
                transition: { delay: 1.25, duration: 3, type: 'spring' },
              }
            }
            className="w-full lg:w-1/2 py-7"
          >
            <img
              src="/preamp.png"
              className=" object-contain w-full md:w-2/3 m-auto"
            />
          </motion.figure>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
