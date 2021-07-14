import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";

const Loading = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  });

  const item = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      y: -200,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <Container>
      <LoaderWrapper
        variants={item}
        animate="show"
        initial="hidden"
        exit="exit"
      >
        <Loader />
        <h1>LOADING</h1>
      </LoaderWrapper>
    </Container>
  );
};

export default Loading;
const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(#cecece, #fff);
  overflow: hidden;
`;

const LoaderWrapper = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 100%;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 1) 0%,
    rgb(220, 220, 220) 40%,
    rgb(170, 170, 170) 98%,
    rgb(10, 10, 10) 100%
  );
  position: relative;

  & h1 {
    user-select: none;
    font-weight: 400;
    font-size: 0.7em;
    position: absolute;
    letter-spacing: 2px;
    bottom: 47%;
    left: 43%;
  }
`;
const Loader = styled(motion.div)`
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border-bottom: 0 solid #ffffff05;

    box-shadow: 0 -10px 20px 20px #ffffff40 inset,
      0 -5px 15px 10px #ffffff50 inset, 0 -2px 5px #ffffff80 inset,
      0 -3px 2px #ffffffbb inset, 0 2px 0px #ffffff, 0 2px 3px #ffffff,
      0 5px 5px #ffffff90, 0 10px 15px #ffffff60, 0 10px 20px 20px #ffffff40;
    filter: blur(3px);
    animation: 2s rotate linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
