import styled from "styled-components";

// margin-right: auto;
// margin-left: auto;
//  margin-bottom: 0;
// grid-auto-columns: minmax(auto, 1fr);
// align-items: center;
// grid-template-areas: ${({ imgStart }) =>
//     imgStart ? `"col2 col1"` : `"col1 col2"`};
// @media screen and (max-width: 768px) {
//     grid-template-areas: ${({ imgStart }) =>
//         imgStart ? `"col1" "col2"` : `"col1 col1" "col2 col2"`};
// }

// export const InfoContainer = styled.div`
//     color: #fff;
//     background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#2F3032")};

//     @media screen and (max-width: 768px) {
//         padding: 100px 0;
//     }
// `;
// export const InfoWrapper = styled.div`
//     display: grid;
//     height: 1000px;
//     margin-inline: 10%;
//     background-color: #2f3032;
// `;
export const InfoContainer = styled.section`
    width: 100%;
    background-color: #2f3032;
    padding-top: 6.4%;
    padding-bottom: 14%;
`;

export const InfoWrapper = styled.div`
    min-height: 1300px;
    width: 80%;
    margin: 3% auto 0 auto;
    padding-bottom: 4%;
    display: grid;
    grid-template-rows: 1f 4fr;
    grid-gap: 20px;
    //border: 0.5px solid red;
`;

export const InfoRow1 = styled.div`
    height: 80%;
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 100px;
    margin: 5% auto 2% auto;
    padding-top: 1%;
    padding-inline: 2%;
    //border: 0.2px solid yellow;
`;

export const InfoColumn1 = styled.div`
    height: 70%;
    padding: 2%;
    padding-left: 2.54%;
    //border: 0.2px solid green;
`;

export const InfoH1 = styled.h1`
    color: white;
    font-size: 1.7rem;
    margin-top: -2%;
`;

export const InfoColumn2 = styled.div`
    height: 96%;
    padding: 4% 5% 5% 5%;
    padding-left: 14%;
    //border: 0.2px solid white;
`;

export const InfoPContainer = styled.div`
    width: 90%;
    height: 60%;
    padding: 3%;
    //border: 0.2px solid white;
`;

export const InfoP = styled.p`
    margin-top: -3%;
    color: white;
    font-size: 0.9rem;
    opacity: 0.7;
    font-weight: lighter;
    text-align: left;
`;

export const InfoLinkContainer = styled.div`
    width: 50%;
    height: 30%;
    padding-left: 3%;
    padding-top: 3%;
    //border: 0.2px solid white;
`;

export const InfoLink = styled.a`
    margin-top: 0;
    text-decoration: none;
    font-size: 1rem;
    color: #926cfb;

    &:hover {
        color: purple;
        transition: 0.3s all ease-in-out;
    }
`;

export const InfoRow2 = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 10%;
    margin-bottom: 5%;
    align-self: center;
    justify-self: center;
    padding-inline: 0.5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    //border: 0.2px solid yellow;
`;

export const InfoColumnA = styled.div`
    width: 96%;
    height: 90%;
    //border: 0.2px solid red;
`;

export const ImgWrapA = styled.picture`
    display: block;
    height: 95%;
    width: 80%;
    margin-left: 10.48%;
    //border: 0.2px solid blue;
`;

export const InfoImg = styled.img`
    width: 100%;
    height: auto;
`;

export const InfoColumnB = styled.div`
    width: 96%;
    height: 90%;
    //border: 0.2px solid red;
`;

export const ImgWrapB = styled.picture`
    display: block;
    height: 95%;
    width: 80%;
    padding-top: 26%;
    margin-left: 18%;
    //border: 0.2px solid blue;
`;
