import { Button } from "components/common/Button/Styled";
import styled, { css } from "styled-components";
import testImg from "assets/images/test_img.jpg";
import { getMaxWidth, getMinWidth } from "utils/stylesUtil";
import { TimeDisplay } from "components/TimeDisplay/Styled";
import { TimerContainer } from "../Timer/Styled";
import { Link } from "react-router-dom";
import { Card } from "components/common/Card";
import { Fundra, FundraisingContainer, FundraisingContainerisingContainerFundraisingContainer } from "../Fundraising/Styled";

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

export const CategoryLinkTitle = styled(CategoryTitle).attrs({as: Link})`
    
`;

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

    @media only screen and (min-width: ${getMinWidth}) {
        
        position: absolute;
        right: 30px;
        bottom: 32px;
        width: 335px;
    }
`;

export const CategoryDefaultContentContainer = styled.div`
    
    box-sizing: border-box;
    overflow: hidden;
    padding: 24px 30px 32px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--white-color);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    & ${FundraisingContainer} {

        & .card_title {
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
        }

        & .card_subtext {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

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
    }


    @media only screen and (min-width: ${getMinWidth}) {

    }

    @media only screen and (max-width: ${getMinWidth}) {
        
        padding: 26px 20px 30px;
    }

`;

export const CategorySingleContentContainer = styled(CategoryDefaultContentContainer)`
    
    & ${FundraisingContainer} {

        & .content_card {
            margin: calc(12px) 0px;
            height: 168px;
        }

        & .card_subtext {
            display: none;
        }
    }
    
    @media only screen and (min-width: ${getMinWidth}) {

        & ${FundraisingContainer} {
        
            & .card_content {
                padding-left: 25px;
            }

            & .card_thumbnail {
                width: 280px;
            }
        }
    }
`;

export const ImageCover = styled.div`
    
`;

export const LastDonationContainer = styled(CategorySingleContentContainer)`

    & ${FundraisingContainer} {
        width: 100%;
        margin: calc(-12px) 0px;
        padding-top: 10px;
    }

    & ${FundraisingContainer} {
        
        & .card_title {
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
        }
    }

    & ${ImageCover} {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 10px 0px 0px;
    }

    & ${TimerContainer} {
        border-top: 1px solid rgba(0, 0, 0, 0.3);
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
        
    @media only screen and (min-width: ${getMinWidth}) {

        position: relative;

        & ${Card} {

            & .card_inner {
                gap: 0px;
            }
            
            & .thumbnail {
                width: 280px;
            }   
    
            & .card_content {
                flex: 1 1 0%;
                width: 100%;
            }

            
        }

        & ${ImageCover} {
            position: absolute;
            z-index: 100;
            top: 86px;
            width: 280px;
            background-color: black;
        }   

        & ${TimeDisplay} {
            color: white;
        }
    }

    @media only screen and (max-width: ${getMaxWidth}) {

        width: 100%;
        display: flex;
        justify-content: center;
        
        & ${ImageCover} {
            top: 0px;
            }
            
        & ${CategoryTitle} {
            text-align: center;
            margin-top: 20px;
            }
            
        & ${CategoryParagraph} {
            text-align: center;
        }

        & ${FundraisingContainer} {

            & .content_card {
                height: 100%;
            }
        
            & .card_inner {
                height: auto;
                gap: 0px;
                display: flex;
                flex-direction: column;
            }

            & .card_inner .card_thumbnail {
                width: 100%;
                height: 0px;
                padding-bottom: 50%;
            }

            & .card_content {
                margin-top: 20px;
            }
        }

        
    }
`;

export const MultipleContentContainer = styled.div`
    
`;

export const TripleContentContainer = styled(MultipleContentContainer)`
    
    display: flex;

    & ${FundraisingContainer} {


        & .card_title {
            font-size: 14px;
            line-height: 1.5;
            font-weight: 600;
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
        }

        & .card_thumbnail {
            border-radius: 8px;
            position: relative;
            padding-bottom: 68.5%;
        }

        & .progress_container {
            margin-top: auto;
        }
    }

    @media only screen and (min-width: ${getMinWidth}) {

        margin: 0px calc(-10px);

        & ${FundraisingContainer} {

            width: calc(33.33% - 20px);
            margin: 0px 10px;
            display: flex;

            

            & .card_thumbnail {
                width: 100%;
                height: 0%;
            }

            & .card_inner {
                gap: 0px;
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

            

            & .progress_bar {
                height: 3px;
            }
        }
    }

    @media only screen and (max-width: ${getMaxWidth}) {
        
        flex-direction: column;

        & ${FundraisingContainer} {

            & .card_inner {
                flex-direction: row;
            }

            & .card_thumbnail {
                height: 86px;
                width: 124px;
                padding-bottom: 0%;
            }
        }
    }
`;

export const TopDonationsWrapper = styled(CategoryDefaultContentContainer)`
    
`;

export const TotalTabPanel = styled(CategoryDefaultContentContainer)`
    
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

    
    @media only screen and (min-width: ${getMinWidth}) {
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

