import styled from "styled-components";

export const HomeMain = styled.div`
`;

export const HomeWrapper = styled(HomeMain)`
    width: 100%;
    display: flex;
    justify-content: center;

    @media only screen and (min-width: 768px) {
    }
`;

export const HomeContainer = styled.div`

    display: flex;

    @media only screen and (min-width: 768px) {
        width: 1120px;
        margin: 20px auto 0px;
        padding-bottom: 46px;
        justify-content: space-between;
    }
`;

export const SectionLeftLayout = styled.section`
    
    @media only screen and (min-width: 768px) 
    {
        width: 700px;
    }
`;

// 이름은 SubSection이지만 div 태그
export const SubSectionContainer = styled.div`

    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 12px;
    margin-bottom: 20px;
    background-color: var(--white-color);

    @media only screen and (min-width: 768px) {
        
        position: relative;
        margin-bottom: 30px;
        padding: 24px 30px 32px ;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;


export const SectionRightLayout = styled.section`
    width: 360px;
`;



export const RightBannerContainer = styled.div`
    margin-bottom: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    border-radius: 20px;

    background-color: var(--white-color);
`;

export const RightBannerContainer2 = styled(RightBannerContainer)`
    padding: 30px 26px;
`;