import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { mediaQueries } from "./Themes";

const Box = styled(motion.div)`
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  width: calc(20rem + 10vw);
  min-height: 22rem;
  padding: 1.5rem;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: default;
  background-color: ${(props) => props.theme.body};
  white-space: pre-line;

  ${mediaQueries(50)`
    width: 90%;
  `}

  ${mediaQueries(25)`
    padding: 1rem;
    min-height: 20rem;
  `}
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: "Karla", sans-serif;

  ${mediaQueries(40)`
    font-size: 1.1rem;
  `}

  ${mediaQueries(25)`
    font-size: 1rem;
  `}
`;

const Info = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  white-space: pre-line;

  ${mediaQueries(25)`
    font-size: 0.9rem;
  `}
`;

const Container = styled(motion.div)``;

const Item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", duration: 0.5 },
  },
};

const BlogComponent = ({ blog }) => {
  const { name, info } = blog;

  return (
    <Container variants={Item}>
      <Box>
        <Title>{name}</Title>
        <Info>{info}</Info>
      </Box>
    </Container>
  );
};

export default BlogComponent;
