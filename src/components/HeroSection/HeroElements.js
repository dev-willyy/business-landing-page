import styled from "styled-components";

export const HeroContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#2F3032")};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const HeroWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 550px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    padding-left: 3.92%;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 720px;
    }
`;

export const HeroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `"col2 col1"` : `"col1 col2"`};

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
    margin-bottom: -8.96rem;
    //margin-left: 5%;
    padding: 0 15px;
    display: grid;
    grid-template-columns: 19fr 1fr;
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

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 80%;

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

export const Img = styled.img`
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: ;
`;
