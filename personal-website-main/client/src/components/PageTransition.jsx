import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import loadingAnimation from "../assets/lottie-animations/Loading.json";

const PageTransition = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <div className="w-fit h-fit">
            {" "}
            {/* More flexible sizing */}
            <Lottie
              animationData={loadingAnimation}
              loop={true}
              autoplay={true}
              className="w-full h-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
