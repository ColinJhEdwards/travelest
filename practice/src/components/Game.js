import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ name, release, img, id }) => {
  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{release}</p>
      <img src={img} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export default Game;
