import React, { useState } from "react";
import Experience from "../About";
import HeroSection from "../HeroSection";
import { homeObjOne } from "../HeroSection/Data";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function that updates state
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection {...homeObjOne} />
            <Experience />
        </>
    );
};

export default Home;
