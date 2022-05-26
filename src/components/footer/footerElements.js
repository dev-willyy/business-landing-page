import styled from "styled-components";

export const FooterContainer = styled.section`
    background-color: #2f3032;
    height: 720px;
    padding-top: 3%;
`;

export const FooterRow = styled.div`
    height: 90%;
    width: 90%;
    margin-inline: 5%;
    padding-left: 7%;
    padding-bottom: 5%;
    padding-top: 2%;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 20px;
    //border: 0.2px solid #f0f00f;
`;

export const FooterColumn1 = styled.div`
    height: 60%;
    padding: 5%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    //border: 0.2px solid blue;
`;

export const FooterH1Wrap = styled.div`
    width: 90%;
    height: 100%;
    padding-left: 2%;
    padding-top: 2.4%;
    //border: 0.2px solid white;
`;

export const FooterH1 = styled.h1`
    color: #f7f8fa;
    font-weight: bolder;
    font-size: 2.2rem;
`;

export const FooterPWrap = styled.div`
    width: 90%;
    height: 100%;
    padding: 2%;
    //border: 0.2px solid white;
`;

export const FooterP = styled.p`
    color: #fff;
    font-size: 1rem;
    line-height: 1.6rem;
`;

export const FooterIconsWrap = styled.div`
    display: grid;
    padding: 1.2%;
    padding-left: 1.66%;
    color: white;
    grid-template-columns: ${(props) =>
        props.vertical ? "null" : "1fr 1fr 1fr"};
    grid-template-rows: ${(props) =>
        props.vertical ? "1fr 1fr 1fr " : "null"};
    width: ${(props) => (props.vertical ? "100% " : "34%")};
    height: ${(props) => (props.vertical ? "30% " : "60%")};
    margin-top: ${(props) => props.vertical && "16rem"};
    margin-right: ${(props) => props.vertical && ".5rem"};
    grid-gap: 10px;
    font-size: 1.6rem;
`;

export const FooterLinkWrap = styled.div`
    width: 90%;
    height: 100%;
    padding: 2%;
    margin-top: -10%;
    //border: 0.2px solid white;
`;

export const FooterLink = styled.a`
    color: #926cfb;
    text-decoration: none;
    font-size: 1.1rem;

    &:hover {
        color: purple;
        transition: 0.3s all ease-in-out;
    }
`;

export const FooterColumn2 = styled.div`
    height: 70%;
    padding: 5%;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
    grid-gap: 30px;
    //border: 0.2px solid blue;
`;

export const FooterH2Wrap = styled.div`
    width: 60%;
    height: 100%;
    padding: 2%;
    //border: 0.2px solid white;
`;

export const FooterH2 = styled.h2`
    color: #f7f8fa;
    font-size: 1.26rem;
    line-height: 2.2rem;
    font-weight: lighter;
    opacity: 0.94;
`;

export const FooterLabelWrap = styled.div`
    width: 90%;
    height: 120%;
    padding: 2%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 38px;
    //border: 0.2px solid white;
`;

export const FooterLabel = styled.label``;

export const FooterInput = styled.input`
    width: 80%;
    height: 110%;
    font: 0.92rem var(--font-1);
    padding-left: 4%;
    background-color: #1c1d1f;
    color: white;
    outline: none;
    border-style: hidden;

    &::placeholder {
        color: white;
        opacity: 0.7;
    }
`;

export const BtnWrap = styled.div`
    width: 90%;
    height: 34%;
    display: flex;
    justify-content: flex-start;
    margin-top: 10%;
    padding-left: 2.2%;
`;
