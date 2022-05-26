import styled from "styled-components";

export const ReviewContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "rgb(17, 17, 17)")};
    padding-bottom: 5%;
    margin-top: -18%;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ReviewWrapper = styled.div`
    z-index: 1;
    height: 550px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    display: grid;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 720px;
    }
`;

export const ReviewRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    padding-inline: 2.6%;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `"col1 col2"` : `"col2 col1"`};

    @media screen and (max-width: 768px) {
        min-height: 700px;
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: -4rem;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
        margin-bottom: 0;
        margin-top: 7rem;
        height: 130%;
    }
`;

export const Column2 = styled.div`
    margin-bottom: -7.9rem;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
        margin-top: -3.5rem;
    }

    @media screen and (max-width: 562px) and (min-width: 527px) {
        margin-top: -10rem;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    flex-basis: 100%;
`;

export const Heading = styled.p`
    margin-bottom: 24px;
    font-size: 1.3rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 14px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
    max-width: 400px;
    height: 60%;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

export const Img = styled.img`
    height: 80%;
    width: 80%;
    margin: 0 0 20px 0;
    padding-right: 0;
`;
