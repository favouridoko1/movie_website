
// src/NotFound.js

import React from 'react';
import { motion } from 'framer-motion';
import "./pageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="not-found"  initial={{ backgroundColor: "#282c34" }}
    animate={{ backgroundColor: "#3a3f47" }}
    transition={{ duration: 1 }}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Oops! Page not found.
      </motion.p>
      <motion.a
        href="/"
        className="home-link"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Go to Home
      </motion.a>
    </div>
  );
};

export default PageNotFound;
