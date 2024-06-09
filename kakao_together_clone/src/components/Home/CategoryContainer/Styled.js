import { Button } from "components/common/Button/Styled";
import styled, { css } from "styled-components";
import testImg from "assets/images/test_img.jpg";
import { getMaxWidth, getMinWidth } from "utils/stylesUtil";
import { TimeDisplay } from "components/TimeDisplay/Styled";
import { TimerContainer } from "../Timer/Styled";
import { Link } from "react-router-dom";

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

export const ActionContainer = styled.div`
    
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

export const ImageCover = styled.div`
    
`;

export const DefaultCategoryContainer = styled.div`
    
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 30px;
    padding: 26px 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--white-color);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media only screen and (min-width: ${getMinWidth}) {

        padding: 24px 30px 32px;
    }
`;

export const DefaultContentContainer = styled.div`
    
`;

const CardStyle = css`
    
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
`;

export const DefaultContentCardContainer = styled(DefaultContentContainer)`
    
    ${CardStyle};
`;

export const SingleContentCardContainer = styled(DefaultContentCardContainer)`
    
    margin: calc(-12px) 0px;

    & .content_card {
        margin: calc(12px) 0px;
        height: 168px;
    }

    & .card_subtext {
        display: none;
    }
    
    @media only screen and (min-width: ${getMinWidth}) {

            & .card_content {
                padding-left: 25px;
            }

            & .card_thumbnail {
                width: 280px;
            }
        }
`;

export const MultipleContentCardContainer = styled(DefaultContentCardContainer)`

    display: flex;
    
    @media only screen and (min-width: ${getMinWidth}) {
        
        flex-direction: row;
    }

`;

export const TripleContentCardContainer = styled(MultipleContentCardContainer)`
    
    & .card_title {
        font-size: 12px;
        line-height: 1.43;
        font-weight: 600;
    }

    & .card_subtext {
        font-size: 10px;
    }

    & .progress_info {
        font-size: 10px;
    }

    & .content_card {
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

    @media only screen and (min-width: ${getMinWidth}) {

        margin: 0px calc(-12px);
        
        & .content_card {
            margin: 0px calc(12px);
            width: calc(33.33% - 20px);
        }

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
            flex: 1 1 0%;
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

    @media only screen and (max-width: ${getMaxWidth}) {
        
        flex-direction: column;
        margin: calc(-10px) 0px;

        & .content_card {
            margin: calc(10px) 0px;
        }

        & .card_inner {
            flex-direction: row;
        }

        & .card_thumbnail {
            height: 86px;
            width: 124px;
            padding-bottom: 0%;
        }

        & .card_content {
            padding-left: 10px;
            flex: 1 1 0%;
        }
    }
`;

export const LastDonationContainer = styled(DefaultCategoryContainer)`

    & .card_title {
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
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

        & ${ImageCover} {
            position: absolute;
            z-index: 100;
            top: 90px;
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
`;

export const LastDonationSingleContentCardContainer = styled(SingleContentCardContainer)`
    
    padding-top: 10px;
`;

export const TopDonationsConatainer = styled(DefaultCategoryContainer)`
    
`;

export const TopDonationsTripleContentCardContainer = styled(TripleContentCardContainer)`
    
    padding-top: 12px;
    
`;

export const TagDonationsContainer = styled(DefaultCategoryContainer)`

`;

export const TagDonationsTripleContentCardContainer = styled(TripleContentCardContainer)`

`;

export const TotalTabPanel = styled.div`
    
    width: 100%;
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

