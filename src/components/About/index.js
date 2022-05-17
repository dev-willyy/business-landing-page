import React from "react";
import fbText from "../Images/facebook.png";
import {
    AboutContainer,
    AboutWrapper,
    IconText,
    ImgContainer,
    ImgRow,
} from "./AboutElements";

const Experience = () => {
    return (
        <AboutWrapper>
            <AboutContainer>
                <ImgRow>
                    <ImgContainer>
                        <IconText src={fbText} alt="Facebook-text-logos" />
                    </ImgContainer>
                    <ImgContainer>
                        <IconText src={fbText} alt="Facebook-text-logos" />
                    </ImgContainer>
                    <ImgContainer>
                        <IconText src={fbText} alt="Facebook-text-logos" />
                    </ImgContainer>

                    <ImgContainer>
                        <IconText src={fbText} alt="Facebook-text-logos" />
                    </ImgContainer>
                    <ImgContainer>
                        <IconText src={fbText} alt="Facebook-text-logos" />
                    </ImgContainer>
                </ImgRow>
            </AboutContainer>
        </AboutWrapper>
    );
};

export default Experience;
