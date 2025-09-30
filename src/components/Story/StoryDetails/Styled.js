import styled from 'styled-components';
import { getMaxWidth, getMinWidth } from 'utils/stylesUtil';

export const StoryDetails = styled.div`
    height: 2000px;

    @media only screen and (max-width: ${getMaxWidth}) {
        box-sizing: border-box;
        width: 100%;
    }
`;

export const TabMenu = styled.div`
    
    margin: auto;
    
    &:not(.sticky) {
        width: 700px;
        border-bottom: solid 1px rgb(136, 136, 136);
    }

    &.sticky {
        position: sticky;
        top: 0;
        z-index: 150;
        background-color: ${({ theme }) => theme.white ? theme.white : 'white'};
        border-bottom: 1px solid rgb(229, 229, 229);
        transform: translateX(0px);

        & li {
            height: 80px;
        }
    }

    @media only screen and (min-width: ${getMinWidth}) {
        transform: translateX(-210px);
    }
    @media only screen and (max-width: ${getMaxWidth}) {
        & li {
            width: 100%;
        }
    }
`;

export const TabNavigationBar = styled.ul`
    display: flex;
    max-width: 1120px;
    margin: auto;

    @media only screen and (min-width: ${getMinWidth}) {
        justify-content: flex-start;
    }
    @media only screen and (max-width: ${getMaxWidth}) {
        justify-content: space-around;
        left: 0;
        z-index: 150;
    }
`;

export const TabNavigationItem = styled.li`
  &.active {
    font-weight: 600;
    border-bottom: solid 1px black;
  }

  & .button {
    padding: 0px 10px;
    height: 100%;
    text-align: center;
  }

  & .text_tab_menu {
    line-height: 2;
    letter-spacing: -0.1px;
  }

  @media only screen and (min-width: ${getMinWidth()}) {
    height: 60px;
  }
`;

export const FloatingElement = styled.div`
    
    display: inline-flex;
    position: sticky;
    top: 0;
    left: 50%;
    z-index: 150;
    width: 560px;
    height: 80px;
    justify-content: flex-end;
    align-items: center;
    margin-top: -80px;
    vertical-align: top;
    
    .floating_button {
        flex-wrap: nowrap;
        padding-top: 0px;

        & .fundraising_button {
            order: 1;
            width: 200px;
            flex: 0 0 auto;
        }
    }
    
    &:not(.sticky) {
        display: none;
    }

    @media only screen and (max-width: ${getMaxWidth}) {
        display: none;
    }
`;

export const TabContent = styled.div`
    box-sizing: border-box;

    @media only screen and (min-width: ${getMinWidth}) {
        width: 1120px;
        margin: auto;
        padding-right: 420px;
    }
    
    @media only screen and (max-width: ${getMaxWidth}) {
        display: block;
        width: 100%;
        padding: 0 20px;
    }

    & .subtitle_document {
        padding: 30px 0px;
        font-size: 18px;
    }

    & .text_document {
        white-space: pre-line;
        font-size: 16px;
        line-height: 1.5;
    }

    & .image_document {
        padding-top: 34px;
    }
`;

export const SubTitle = styled.h3`
    
`;

export const Text = styled.p`
    
`;

export const ImageBox = styled.div`
    & img {
      width: 100%;
    }
`;