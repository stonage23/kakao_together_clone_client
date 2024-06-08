import { getMinWidth } from "utils/stylesUtil";

const { default: styled } = require("styled-components");



export const CardInner = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    gap: 10px;
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

    .card_thumbnail {
        position: relative;
        flex-shrink: 0;
        width: 50%;
        height: 100%;
        background-color: var(--image-blank-color); 
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
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
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
