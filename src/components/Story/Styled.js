import { Button } from 'components/common/Button/Styled';
import styled, { css } from 'styled-components';
import {
  defaultTitleCss,
  listItemFontDefaultStyles,
} from 'styles/GlobalStyledComponent';
import { getMaxWidth, getMinWidth } from '../../utils/stylesUtil';

const BoxBorderStyle = css`
  border: 1px solid
    ${({ $borderColor }) =>
      $borderColor ? $borderColor : 'rgb(221, 221, 221)'};
`;

const DefaultBox = styled.div`
  padding: 30px 28px 0px;
  margin-top: 40px;
`;

const BottomActionBox = styled.div`
  padding: 30px 28px 0px;
  margin-top: 40px;
`;

export const Story = styled.main`
    margin: 40px auto 0;
    min-height: calc(-224px + 100vh);

    & .modal_container.open {
        flex-shrink: 0;
        width: 440px;
        max-height: 90%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border-radius: 8px;
        background-color: ${({ theme }) => (theme.white ? theme.white : 'white')};
    }
`;

export const StoryLayout = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: ${getMaxWidth}) {
        box-sizing: border-box;
        width: 100%;
        margin-top: 0px;
    }
`;

export const StoryTopLayout = styled.div`
    width: 1120px;
    position: relative;
    
    @media only screen and (max-width: ${getMaxWidth}) {
        width: 100%;
    }
    @media only screen and (min-width: ${getMinWidth}) {
        margin: auto;
    }
`;

export const StoryTopRightLayout = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: calc(100% - 760px);

    @media only screen and (max-width: ${getMinWidth}) {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        padding: 30px 20px;
    }
`;

export const StoryProgressBox = styled.div`
  position: relative;
`;

export const StoryTitle = styled.h3`
  ${defaultTitleCss};
`;

export const StoryAmount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-top: 30px;
`;

export const ProgressSubtext = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const StoryDonationBox = styled(DefaultBox)`
    ${BoxBorderStyle};

    @media only screen and (max-width: ${getMaxWidth}) {
        padding-bottom: 30px;
    }

    & .floating_button {
        @media only screen and (max-width: ${getMaxWidth}) {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
        }
    }

`;

export const StoryDonationInfoList = styled.ul`
  padding: 10px 0px 13px;
  & li {
    display: flex;
    justify-content: space-between;
    line-height: 1.8;
  }
`;

export const StoryDonationInfoItem = styled.li``;

export const StoryDonationGuideList = styled.ul`
  padding-top: 20px;
  border-top: 1px solid rgb(216, 216, 216);
`;

export const StoryDonationGuideItem = styled.li`
  ${listItemFontDefaultStyles};
  letter-spacing: -0.6px;
`;

const StoryDonationIndirectFundingButton = styled(Button)`
  margin-top: 2px;
  line-height: 1.5;
  width: calc(50% - 1px);
`;

export const DonationModalClose = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 20px;
  border: 1px solid transparent;
  border-radius: inherit;
  background-color: transparent;
`;


export const StoryDonationHeartButton = styled(
  StoryDonationIndirectFundingButton
)``;

export const StoryDonationSharingButton = styled(
  StoryDonationIndirectFundingButton
)`
    position: relative;

    @media only screen and (min-width: ${getMinWidth}) {
        &::before {
            content: '';
            position: absolute;
            width: 2px;
            left: 0px;
            height: 16px;
            background-color: rgb(216, 216, 216);
        }
    }
`;

export const StoryDonationAction = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);

    & .button {
        color: white;
        font-size: 16px;
        line-height: 1.5;
        text-align: center;
    }
    
    @media only screen and (min-width: ${getMinWidth()}) {
        padding-top: 30px;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: ${getMinWidth}) {
        flex-wrap: nowrap;
        position: fixed;
        z-index: 400;
        align-items: center;
        height: 70px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 16px 0px;

        & ${StoryDonationHeartButton} {
            width: 92px;
            flex-shrink: 0;
        }

        & ${StoryDonationHeartButton} {
            order: -1;
        }

        & ${StoryDonationSharingButton} {
            width: 92px;
            flex-shrink: 0;
        }
    }
`;

export const StickyRightLayout = styled.div`
  position: sticky;
`;

export const StoryAgencyBox = styled(BottomActionBox)`
  ${BoxBorderStyle};

`;

export const StoryMainImageBox = styled.div`
  position: relative;
    width: 700px;
    height: 480px;

    @media only screen and (max-width: ${getMaxWidth}) {
        box-sizing: border-box;
        width: 100%;
        height: auto;
    }
`;

export const ImageStoryMain = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 68.8%;
    background-color: purple;
    border-radius: 12px;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("${(props) => props.imageUrl}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: inherit;
    }

    @media only screen and (max-width: ${getMaxWidth}) {
        box-sizing: border-box;
        width: 100%;
    }
`;

export const StoryMiddleLayout = styled.div`

`;
