import styled from "styled-components";

export const FundraisingList = styled.div`

    display: flex;
    flex-direction: column;
    padding-top: 20px;

    & .content_card {
        margin-bottom: 30px;
        width: 100%;
        height: 250px;
        background-color: var(--white-color);
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    & .card_thumbnail {
        width: 250px;
    }

    & .card_content {
        padding: 34px 20px;
    }

    & .card_title {
        font-size: 18px;
        line-height: 2;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis; // 말줄임표 사용하는 경우
    }

    & .card_subtext {
    }

    & .progress_bar {
        height: 4px;
    }
`;
