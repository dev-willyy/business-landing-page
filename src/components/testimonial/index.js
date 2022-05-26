import React from "react";
import {
    ReviewContainer,
    ReviewWrapper,
    ReviewRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    ImgWrap,
    Img,
} from "./testimonialElements";

const ReviewSection = ({
    lightBg,
    id,
    imgStart,
    lightText,
    headline,
    darkText,
    description,
    img,
    alt,
}) => {
    return (
        <>
            <ReviewContainer lightBg={lightBg} id={id}>
                <ReviewWrapper>
                    <ReviewRow imgStart={imgStart}>
                        <Column1 data-aos="fade-right">
                            <TextWrapper>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2 data-aos="fade-left">
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </ReviewRow>
                </ReviewWrapper>
            </ReviewContainer>
        </>
    );
};

export default ReviewSection;
