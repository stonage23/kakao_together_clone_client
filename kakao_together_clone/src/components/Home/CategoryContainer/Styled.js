import { Button } from "components/common/Button/Styled";
import styled, { css } from "styled-components";
import testImg from "assets/images/test_img.jpg";

export const CampaignText = styled.div`
    overflow-wrap: break-word;
    color: ${({ color = 'black' }) => color};
    font-style: normal;
    -webkit-font-smoothing: antialiased;
`;


export const CategoryTitle = styled(CampaignText).attrs({as: 'h4'})`

    font-size: 20px;
    line-Height: 1.4;
    letter-spacing: -0.3px;
    font-weight: 600;
`;


// p
export const CategoryParagraph = styled(CampaignText)`
    font-size: 15px;
    line-Height: 1.6;
    letter-spacing: -0.1px;
    padding-top: 4px;
`;

export const CampaignActionContainer = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    margin-top: auto;
    gap: 9px;

    @media only screen and (min-width: 768px) {
        
        position: absolute;
        right: 30px;
        bottom: 32px;
        width: 335px;
    }
`;

export const CategoryDefaultContentContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: stretch;
    margin: calc(-10px) 0px;


    & .content_card {
        margin: calc(10px) 0px;
        width: 100%;
    }

    & .card_thumbnail {
        position: relative;
        background-image: url(${testImg});
        background-size: cover;
    }

    & .card_thumbnail::after {
        content: "";
        border-radius: inherit;
        width: 100%;
        height: 100%;
        position: absolute;
    }


    @media only screen and (min-width: 768px) {

        margin: calc(-12px) 0px;

        & .content_card {
            margin: calc(12px) 0px;
        }
    }

`;

export const CategorySingleContentContainer = styled(CategoryDefaultContentContainer)`
    
    width: 100%;
    flex-flow: column wrap;
    padding-top: 20px;
    
    & .content_card {
        margin: calc(12px) 0px;
        height: 168px;
    }

    & .card_subtext {
        display: none;
    }

    
    @media only screen and (min-width: 768px) {
        
        & .card_content {
            padding-left: 25px;
        }

        & .card_thumbnail {
            width: 280px;
        }
    }
`;

export const CategoryMultipleContentContainer = styled(CategoryDefaultContentContainer)`
    
    width: 100%;
    margin: calc(-9px) 0px;
    padding-top: 16px;

    & .card_title {
        font-size: 14px;
        line-height: 1.5;
        font-weight: 500;
    }

    & .content_card {
        margin: calc(12px) 0px;
        width: 100%;
        height: auto;
    }

    & .card_inner {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-decoration: none;
        color: rgb(32, 32, 32);

    }

    & .card_thumbnail {
        background-color: var(--image-blank-color); /* 예시 배경색, 실제 이미지에 맞게 조정 필요 */
        border-radius: 8px;
        position: relative;
        height: 0px;
        padding-bottom: 68.5%;
    }

    

    & .card_content {
        display: flex;
        flex-direction: column;
        flex: 1 0 auto;
        padding-top: 12px;
        position: relative;
        width: 100%;
        height: auto;
    }

    & .card_subtext {
        margin-top: 1px;
        font-size: 12px;
        line-height: 18px;
    }

    @media only screen and (min-width: 758px) {

        flex: 1 1 0%;
        width: auto;
        margin: -20px calc(-10px);
        
        & .content_card {
            margin: 20px calc(10px);
            width: calc(33.33% - 20px);
        }

        & .card_inner {
            position: relative;
        }

        & .card_thumbnail {
            width: 100%;
        }

        & .card_subtext {
            margin-top: 2px;
        }

        & .progress_container {
            margin-top: auto;
        }

        & .progress_bar {
            height: 3px;
        }
    }
`;

export const TotalTabPanel = styled(CategoryMultipleContentContainer)`
    

    @media only screen and (min-width: 758px) {

        padding: 0px 0px 5px;

        & .content_card {
            margin: px calc(10px);
            width: calc(33.33% - 20px);
        }
    }
`;


export const Tablist = styled.div`

    display: flex;
    gap: 6px;
    margin: 15px 0px 19px;
    white-space: nowrap;
    overflow-y: hidden;

    
    @media only screen and (min-width: 768px) {
        overflow: hidden;
        margin: 13px 0px 21px;
    }
`;


export const ButtonTab = styled(Button)`

    width: auto;
    height: auto;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 1000px;
    padding: 7px 14px;

    ${({active}) => active && css`
        background-color: rgb(32, 32, 32);
        color: rgb(255, 255, 255);
    `}

    span {
        font-size: 14px;

        &:not(:first-child){
            padding-left: 5px;
        }
    }
`;

