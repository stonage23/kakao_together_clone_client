import styled from 'styled-components';
import { getMinWidth } from 'utils/stylesUtil';
import story1_1 from 'assets/images/mock/story1_1.jpg';

export const DonationModalTitle = styled.div`
    height: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(238, 238, 238);

`;

export const DonationModalContent = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

export const DonationSummary = styled.div`
  padding: 20px 20px;
  border-bottom: 8px solid rgb(238, 238, 238);
  display: flex;
  align-items: center;
`;

export const DonationSummaryThumbnail = styled.div`
    position: relative;
    background-color: ${({ theme }) => (theme.gray1 ? theme.gray1 : 'gray')};
    width: 67px;
    height: 50px;
    border-radius: 6px;
    flex: 0 0 auto;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: '';
        background-image: url("${(props) => props.thumbnailUrl ? props.thumbnailUrl : story1_1}");
        background-size: cover;
        background-position: center;
    }
`;

export const DonationSummaryContent = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const DonationSummaryTitle = styled.strong`
  color: rgb(32, 32, 32);
  font-size: 15px;
  font-style: normal;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.1px;
  line-height: 1.33;
  @media only screen and (min-width: ${getMinWidth()}) {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const DonationSummarySutext = styled.span`
  color: rgb(136, 136, 136);
  font-size: 13px;
  font-style: normal;
  font-family: 'KakaoBig Regular', 'Apple SD Gothic Neo', 'Malgun Gothic',
    '맑은 고딕', dotum, 돋움, sans-serif;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.1px;
  line-height: 1.5;
  @media only screen and (max-width: ${getMinWidth()}) {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const DonationPriceBox = styled.div`
  padding: 0px 20px 30px;
`;

export const DonationPriceInput = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px black;
`;

export const InputPrice = styled.input`
  flex: 1;
  border: none;
  text-align: end;
  font-size: 20px;
`;

export const ButtonPriceContainer = styled.div`
  padding-top: 20px;
  margin-bottom: 10px;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 35px 35px;
`;

export const PriceButton = styled.button`
  padding: 5px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

export const DonationCommentBox = styled.div`
  padding: 0px 20px;
  display: ${({visible}) => visible ? 'block' : 'none'};
  min-height: 110px;

  & .textarea_container {
    min-height: 110px;
    box-sizing: border-box;
  }

  & .textarea_field_box {
    flex: 1;
  }

  & .textarea_util_box {
    margin-top: 14px;
    padding: 0px 12px 10px;
    box-sizing: border-box;
  }

  & .text_util {
    line-height: 1;
  }
`;

export const DonationAdditionalOptionsBox = styled.div`
  padding: 20px 20px 0px;
  margin-top: ${({ $styleChange }) => ($styleChange ? '30px' : '')};
  border-top: 8px solid rgb(238, 238, 238);

`;

export const DonationAdditionalOption = styled.div`
  position: relative;
  border-bottom: 1px solid rgb(238, 238, 238);
  & .checkbox_container:first-child {
    padding-top: 12px;
  }
`;

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const LabelDescription = styled.p`
  line-height: 1.67;
  padding-bottom: 12px;
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  display: none;

  &:checked + div {
    color: red;
  }
`;

export const CheckIcon = styled.div`
  position: absolute;
  right: 0px;
  vertical-align: top;
  width: 20px;
  height: 20px;
  opacity: 1;
`;

export const DonationGuidanceList = styled.ul`
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DonationGuidanceItem = styled.li`
  color: rgb(68, 68, 68);
  font-size: 13px;
`;

export const DonationModalFormSubmit = styled.div`
  padding: 0px 20px 30px;
`;