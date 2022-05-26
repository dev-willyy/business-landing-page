import React from "react";
import facebook from "../Images/facebook.png";
import google from "../Images/google.png";
import shopify from "../Images/shopify.png";
import spotify from "../Images/spotify.png";
import tumblr from "../Images/tumblr.png";
import {
    AboutContainer,
    AboutWrapper,
    DurationContainer,
    DurationH1,
    DurationP,
    DurationWrapper,
    DurationYearsWrapper,
    ExperienceWrapper,
    IconText,
    ImgContainer,
    ImgRow,
    SkillCardsContainer,
    SkillsCard,
    SkillsListContainer,
    SkillsListP,
    SkillsText,
    SkillsWrapper,
} from "./AboutElements";

const Experience = () => {
    return (
        <AboutWrapper>
            <AboutContainer>
                <ImgRow>
                    <ImgContainer>
                        <IconText src={facebook} alt="Facebook-text-logos" />
                    </ImgContainer>
                    <ImgContainer>
                        <IconText src={google} alt="Google-text-logos" />
                    </ImgContainer>
                    <ImgContainer>
                        <IconText src={shopify} alt="shopify-text-logos" />
                    </ImgContainer>

                    <ImgContainer>
                        <IconText src={spotify} alt="Spotify-text-logos" />
                    </ImgContainer>
                    <ImgContainer>
                        <IconText src={tumblr} alt="tumblr-text-logos" />
                    </ImgContainer>
                </ImgRow>
            </AboutContainer>

            <ExperienceWrapper>
                <DurationWrapper>
                    <DurationContainer>
                        <DurationH1>7</DurationH1>
                        <DurationH1 plus>+</DurationH1>
                    </DurationContainer>

                    <DurationYearsWrapper>
                        <DurationP>Years</DurationP>
                        <DurationP>Experience</DurationP>
                        <DurationP>Working</DurationP>
                    </DurationYearsWrapper>
                </DurationWrapper>

                <SkillsWrapper>
                    <SkillsListContainer>
                        <SkillsListP>
                            Product Designer and Developer specialized in UI/UX,
                            and digital designs
                        </SkillsListP>
                    </SkillsListContainer>
                    <SkillCardsContainer>
                        <SkillsCard bright>
                            <SkillsText>Product Designer</SkillsText>
                            <SkillsText>Discover More →</SkillsText>
                        </SkillsCard>
                        <SkillsCard>
                            <SkillsText wrapped>Front End Developer</SkillsText>
                        </SkillsCard>
                        <SkillsCard>
                            <SkillsText wrapped>Branding Designer</SkillsText>
                        </SkillsCard>
                    </SkillCardsContainer>
                </SkillsWrapper>
            </ExperienceWrapper>
        </AboutWrapper>
    );
};

export default Experience;
