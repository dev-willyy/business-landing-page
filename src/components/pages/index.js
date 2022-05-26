import React, { useState } from "react";
import Experience from "../About";
import HeroSection from "../HeroSection";
import { homeObjOne } from "../HeroSection/Data";
import { homeObj1 } from "../InfoSection/Data";
import InfoSection from "../InfoSection";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar";
import { remarkOne } from "../testimonial/Data";
import ReviewSection from "../testimonial";
import Footer from "../footer";

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
            <InfoSection {...homeObj1} />
            <ReviewSection {...remarkOne} />
            <Footer />
        </>
    );
};

export default Home;
