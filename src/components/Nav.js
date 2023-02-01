import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from '../logo.svg'
import { fadeIn } from "../style/Animation";


const Nav = () => {
    return (
        <StyledNav variants={fadeIn} initial='hidden' animate='show'>
            <Logo>
                <img src={logo} alt="logo" />
                <h2>The Movies</h2>
            </Logo>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;


export default Nav