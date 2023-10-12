import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Element } from "./screens/Element/Element";
import { Design } from "./screens/Design/Design";
import { ElementEasyWaysTo } from "./screens/ElementEasyWaysTo/ElementEasyWaysTo";
import { QueryBuilder } from "./screens/QueryBuilder/QueryBuilder";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import "./styling.css";

export default function MainApp() {
  const location = useLocation();

  return (
    <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                className="position_a_zero_zero"
                key={"/"}
                transition={{ duration: 0.4, ease: "linear" }}
                initial={{
                  x: "-100%",
                  y: "0%",
                  position: "absolute",
                }}
                animate={{
                  x: "0%",
                  y: "0%",
                  position: "relative",
                }}
                exit={{
                  y: "0%",
                  x:"-100%",
                  position: "absolute",

                  transition: {
                    duration: 0.5,
                  },
                }}
              >
                <Element />
              </motion.div>
            }
          />
          <Route
            path="/designsystem"
            element={
              <motion.div
                initial={{
                  y: "0%",
                  x: "110%",
                  position: "absolute",
                }}
                animate={{
                  x: "0%",
                  y: "0%",
                  position: "relative",
                }}
                transition={{ duration: 0.3, ease: "linear" }}
                exit={{
                  position: "absolute",

                  x: "100%",
                  y: "0%",
                }}
              >
                <Design style={{ position: "relative", zIndex: "1000" }} />
              </motion.div>
            }
          />
          <Route
            path="/querybuilder"
            element={
              <motion.div
                initial={{
                  y: "0%",
                  x: "110%",
                  position: "absolute",
                }}
                animate={{
                  x: "0%",
                  y: "0%",
                  position: "relative",
                }}
                transition={{ duration: 0.3, ease: "linear" }}
                exit={{ x: "100%", y: "0%", position: "absolute" }}
              >
                <QueryBuilder />
              </motion.div>
            }
          />
          <Route
            path="/waystoimprove"
            element={
              <motion.div
                initial={{
                  y: "0px",
                  x: "110%",
                  position: "absolute",
                }}
                animate={{
                  x: "0%",
                  y: "0%",
                  position: "relative",
                }}
                transition={{ duration: 0.3, ease: "linear" }}
                exit={{ x: "100%", y: "0%", position: "absolute" }}
              >
                <ElementEasyWaysTo />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
