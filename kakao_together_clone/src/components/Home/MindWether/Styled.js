const { Title } = require("components/CommonStyles/Styled");
const { default: styled } = require("styled-components");

export const MindWetherContainer = styled.div`

    ${Title} {

        margin-bottom: 19px;
    }

    & .mind_item .content_card {

        height: 60px;
        background-color: rgb(245, 245, 244);
        border-radius: 5px;
        
        .card_inner {
            display: flex;
            align-items: center;
        }

        .card_content{
            padding: 0px 16px;
        }

        .card_title {
            font-size: 15px;
        }

        .card_subtext {
            font-size: 13px;
        }

    }

    & .mind_item .card_thumbnail {

        width: 60px;
        border-radius: 5px 0px 0px 5px;
    }
`;

export const Ul = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Li = styled.li`
    
`;