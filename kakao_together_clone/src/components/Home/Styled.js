import styled from "styled-components";
import { getMaxWidth, getMinWidth } from "utils/stylesUtil";

export const HomeMain = styled.div`

    background-color: rgb(247, 247, 247);
    width: 100%;
`;

export const HomeWrapper = styled(HomeMain)`

    width: 100%;
    display: flex;
    margin: 20px auto 0px;
    
    @media only screen and (min-width: ${getMinWidth}) {
        
        width: 1120px;
        justify-content: space-between;
    }
        
    @media only screen and (max-width: ${getMaxWidth}) {

        margin-top: 0px;
        padding-top: 30px;
    }
`;

export const HomeContainer = styled.div`

    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${getMinWidth}) {
        width: 1120px;
        margin: 20px auto 0px;
        padding-bottom: 46px;
        flex-direction: row;
        justify-content: space-between;
    }

    @media only screen and (max-width: ${getMinWidth}) {
        
        padding: 0px 20px 20px;
        width: 100%;
    }
`;

export const SectionLeftLayout = styled.section`
    
    @media only screen and (min-width: ${getMinWidth}) 
    {
        width: 700px;
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