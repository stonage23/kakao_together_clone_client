import { getMinWidth } from "utils/stylesUtil";

const { default: styled } = require("styled-components");

export const CardWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const CardInner = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    
    cursor: pointer;

    .card_title {
        font-size: 16px;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        color: rgb(68, 68, 68)

    }

    .card_subtext {
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .card_inner {
        display: flex;
        height: 100%;
        color: rgb(32, 32, 32);
    }

    .card_thumbnail {
        position: relative;
        height: 100%; 
        width: 280px;
        background-color: var(--image-blank-color); 
        border-radius: 10px;
        flex-shrink: 0;
    }

    .card_thumbnail::after {
        content: '';
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-image: url(${require("assets/images/hello/img_a_1.png")});
        background-size: cover;
    }

    .card_content {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        flex: 1 1 0px;
    }

    @media only screen and (min-width: ${getMinWidth}) {
        

        .card_title {
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
        }

        & .thumbnail {
            width: 280px;
        }
    }   
`;
