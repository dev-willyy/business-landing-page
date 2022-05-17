import styled from "styled-components";

export const AboutWrapper = styled.div`
    display: block;
    height: 800px;
    ${"" /* background-color: #000; */}
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImgRow = styled.div`
    align-self: flex-start;
    display: flex;
    grid-auto-columns: minmax(auto, 1fr);
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-block-start: 4rem;
`;

export const ImgContainer = styled.picture`
    margin-inline: 12px;
    width: 140px;
    height: 50px;
`;

export const IconText = styled.img`
    width: 100%;
    height: auto;
`;
