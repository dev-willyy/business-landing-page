import React from "react";
import firstImage from "../Images/info-img-1.png";
import secondImage from "../Images/info-img-2.png";
import thirdImage from "../Images/info-img-3.png";
import fourthImage from "../Images/info-img-4.png";
import {
    InfoContainer,
    InfoWrapper,
    InfoRow1,
    InfoRow2,
    InfoColumn1,
    InfoColumnA,
    InfoColumn2,
    InfoColumnB,
    InfoH1,
    InfoP,
    InfoPContainer,
    InfoLinkContainer,
    InfoLink,
    ImgWrapA,
    ImgWrapB,
    InfoImg,
} from "./InfoElements";

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow1>
                        <InfoColumn1>
                            <InfoH1>Outwork, successful client products</InfoH1>
                        </InfoColumn1>
                        <InfoColumn2>
                            <InfoPContainer>
                                <InfoP>
                                    Quisque lorem tortor fringilla sed,
                                    vestibulum id, eleifend justo vella ipsum
                                    dolor lacus
                                </InfoP>
                            </InfoPContainer>
                            <InfoLinkContainer>
                                <InfoLink href="/">Explore More →</InfoLink>
                            </InfoLinkContainer>
                        </InfoColumn2>
                    </InfoRow1>

                    <InfoRow2>
                        <InfoColumnA>
                            <ImgWrapA>
                                <InfoImg src={firstImage} />
                            </ImgWrapA>
                        </InfoColumnA>
                        <InfoColumnB>
                            <ImgWrapB>
                                <InfoImg src={secondImage} />
                            </ImgWrapB>
                        </InfoColumnB>
                    </InfoRow2>

                    <InfoRow2>
                        <InfoColumnA>
                            <ImgWrapA>
                                <InfoImg src={thirdImage} />
                            </ImgWrapA>
                        </InfoColumnA>
                        <InfoColumnB>
                            <ImgWrapB>
                                <InfoImg src={fourthImage} />
                            </ImgWrapB>
                        </InfoColumnB>
                    </InfoRow2>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
