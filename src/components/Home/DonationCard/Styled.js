const { ExternalHyperlink, Title } = require('components/CommonStyles/Styled');
const { default: styled } = require('styled-components');

export const RightBannerContainer = styled.div``;

export const TopLayout = styled.div`
    background-color: rgb(255, 232, 0);
    padding: 34px 26px 29px;

    border-radius: 20px 20px 0px 0px;

    h4 {
        font-size: 20px;
        line-height: 1.5;
    }

    .donation_total {
        height: 60px;
        margin-top: 41px;
        padding: 0px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
    }

    .date {
        display: inline-block;
        font-size: 14px;
        margin-top: 12px;
    }
`;

export const BottomLayout = styled.div`
    height: 281px;
    box-sizing: border-box;
    border-radius: 0px 0px 20px 20px;
    padding: 31px 26px 46px;
    background-color: var(--white-color);

    a {
        display: inline-block;
    }

    h4 {
        font-size: 13px;
    }
`;

export const StyledA = styled(ExternalHyperlink)`
    display: block;
`;

export const StyledTitle = styled(Title)``;
