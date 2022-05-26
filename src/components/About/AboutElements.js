import styled from "styled-components";

export const AboutWrapper = styled.div`
    height: 600px;
    background-color: rgb(17, 17, 17);
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImgRow = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 6.5rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
    }
`;

export const ImgContainer = styled.picture`
    margin-inline: 12px;
    width: 140px;
    height: 50px;

    @media screen and (max-width: 960px) {
        :last-of-type {
            grid-column: span 2;
            margin-left: 10%;
        }
    }
`;

export const IconText = styled.img`
    width: 100%;
    height: auto;
`;

// custom styling for ExperienceWrapper and descendants
export const ExperienceWrapper = styled.div`
    height: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    justify-content: center;
    padding-inline: 20px;
    align-items: center;
    width: 80%;
    margin: 5% auto 0 auto;
    // border: 0.2px solid #fff;
`;

export const DurationWrapper = styled.div`
    height: 90%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 11%;
    // border: 0.2px solid #fff;
`;

export const DurationContainer = styled.div`
    height: 55%;
    width: 80%;
    text-align: left;
    padding-left: 11px;
    margin-top: -0.5%;
    // border: 0.2px solid #aeae00;
`;

export const DurationH1 = styled.h1`
    font-size: ${(props) => (props.plus ? "5rem" : "6.3rem")};
    font-weight: bolder;
    color: var(--brightColor);
    margin-top: ${(props) => (props.plus ? "6px" : "-10px")};
    margin-bottom: 20px;
    float: left;
`;

export const DurationYearsWrapper = styled.div`
    height: 80%;
    width: 80%;
    padding-left: 12.4px;
    margin-top: -3%;
    // border: 0.2px solid #aeae00;
`;

export const DurationP = styled.p`
    font-size: 1.35rem;
    font-weight: bold;
    margin-block: -1px;
    color: #e6e6e8;
`;

export const SkillsWrapper = styled.div`
    display: flex;
    width: 150%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -50%;
    margin-bottom: -3.2rem;
    // border: 0.2px solid #fff;
`;

export const SkillsListContainer = styled.div`
    width: 95%;
    height: 32%;
    padding-top: 5px;
    padding-left: 16px;
    text-align: left;
    margin-block: 2px;
    // border: 0.2px solid #fff;
`;

export const SkillsListP = styled.p`
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 2.4rem;
    color: #e6e6e8;
`;

export const SkillCardsContainer = styled.div`
    width: 110%;
    height: 68%;
    padding-left: 5px;
    margin-bottom: -5.7rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    // border: 0.2px solid #fff;
`;

export const SkillsCard = styled.div`
    background-color: ${(props) => (props.bright ? "#926cfb" : "#393a3c")};
    color: ${(props) => (props.bright ? "#e6e6e8" : "#e6e6e8")};
    box-sizing: border-box;
    height: 100%;
    width: 90%;
    margin-left: 10px;
    padding-top: 11.05rem;
    padding-left: 30px;
`;

export const SkillsText = styled.p`
    width: ${(props) => (props.wrapped ? "6rem" : "10rem")};
    font-size: 1.1rem;
    text-align: left;
    //margin-top: -3.4px;
    font-size: ${(props) => (props.adjusted ? ".9rem" : "-1.1rem")};
    font-weight: ${(props) => (props.adjusted ? "lighter" : "bold")};
    margin-top: ${(props) => (props.adjusted ? "-4%" : "-3.4px")};
    word-wrap: break-word;
    line-height: 24px;
`;
