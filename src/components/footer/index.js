import React from "react";
import {
    FooterColumn1,
    FooterColumn2,
    FooterContainer,
    FooterH1,
    FooterH1Wrap,
    FooterH2,
    FooterH2Wrap,
    FooterInput,
    FooterLabel,
    FooterLabelWrap,
    FooterLink,
    FooterLinkWrap,
    FooterP,
    FooterPWrap,
    FooterRow,
} from "./footerElements";
// import Icons from "../Icons";

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterRow>
                    <FooterColumn1>
                        <FooterH1Wrap>
                            <FooterH1>Let's Connect</FooterH1>
                        </FooterH1Wrap>
                        <FooterPWrap>
                            <FooterP>
                                Quisque lorem tortor fringilla sed, vestibulum
                                id, eleifend justo vella ipsum dolor lacus.
                            </FooterP>
                        </FooterPWrap>
                        {/* <Icons /> */}
                        <FooterLinkWrap>
                            <FooterLink href="/">hallo@me.co →</FooterLink>
                        </FooterLinkWrap>
                    </FooterColumn1>

                    <FooterColumn2>
                        <FooterH2Wrap>
                            <FooterH2>
                                Let's message me and make something together!
                            </FooterH2>
                        </FooterH2Wrap>
                        <FooterLabelWrap>
                            <FooterLabel for="name">
                                <FooterInput
                                    type="text"
                                    placeholder="Your name"
                                    name="client-name"
                                />
                            </FooterLabel>
                            <FooterLabel for="email">
                                <FooterInput
                                    type="text"
                                    placeholder="Your email"
                                    name="client-email"
                                />
                            </FooterLabel>
                            <FooterLabel for="project-details">
                                <FooterInput
                                    type="text"
                                    placeholder="Project details"
                                    name="client-project-details"
                                />
                            </FooterLabel>
                        </FooterLabelWrap>
                    </FooterColumn2>
                </FooterRow>
            </FooterContainer>
        </>
    );
};

export default Footer;
