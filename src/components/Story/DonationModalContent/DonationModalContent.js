import React, { useState } from 'react';
import * as S from './Styled';
import { Title } from 'components/CommonStyles/Styled';
import { Span } from 'styles/GlobalStyledComponent';
import { Button } from 'components/common/Button';
import { TextArea } from 'components/common/TextArea';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { config } from '../../../config/config';

const API_BASE_URL = config.apiBaseUrl;

const prices = [
  { label: '5천원', value: '5000' },
  { label: '1만원', value: '10000' },
  { label: '3만원', value: '30000' },
  { label: '5만원', value: '50000' },
  { label: '10만원', value: '100000' },
  { label: '50만원', value: '500000' },
  { label: '100만원', value: '1000000' },
];

const guidList = [
  { message: '결제 수수료는 카카오가 대신 부담합니다.' },
  { message: '기부 완료 알림은 카카오톡으로 발송해드려요.' },
];

const DonationModalContent = ({ setIsModalOpen, fundraising }) => {
  const [amount, setAmount] = useState();
  const [typeIsActive, setTypeIsActive] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const resetAmount = () => {
    setAmount('');
  };

  const handleTypingAmount = e => {
    const value = e.target.value;
    if (/^[1-9]\d*$|^$/.test(value)) {
      handleSetAmount(value);
    }
  };

  const handleButtonAmount = value => {
    const newAmount = (parseInt(amount) || 0) + parseInt(value);
    handleSetAmount(newAmount);
  };

  const handleSetAmount = value => {
    setAmount(value);
    if (!typeIsActive) setTypeIsActive(true);
    console.log(value);
  }

  const handleSubmit = async e => {

    e.preventDefault();

    const donationForm = {
      "fundraisingId": 1
      , "amount": 1
    }

    const prepareResponse = await axios.post(API_BASE_URL + '/api/fundraisings/donation/direct/pending', donationForm);

    if (prepareResponse.status !== 200) {
      alert("일시적인 오류입니다. 잠시후 다시 시도해주시고 그래도 안되면 관리자에게 문의해주세요.")
      return;
    }

    const donationId = prepareResponse.data.donationId;
    const merchantUid = prepareResponse.data.merchantUid;

    // TODO form 데이터 제출 로직
    // TODO 유효성 검사
    const { IMP } = window;
    IMP.init("imp46073024"); // 본인의 가맹점 식별코드

    const impFormData = {
      pg: 'html5_inicis',
      pay_method: 'card',
      merchant_uid: merchantUid,
      name: '후원 결제',
      amount: 1,
      // amount: amount,
      buyer_email: 'donor@example.com',
      buyer_name: '기부자',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울시 기부구',
      buyer_postcode: '12345',
    }

    IMP.request_pay(impFormData, async (rsp) => {
      if (rsp.success) {
        alert('결제 성공: ' + rsp.imp_uid);
        // TODO: 서버로 결제 검증 실패 유무 확인 요청
        //   alert("기부가 완료되었습니다!");
        window.location.reload()
      } else {
        alert('결제 실패: ' + rsp.error_msg);
      }
    });
  };

  return (
    <>
      <S.DonationModalTitle className="modal_title">
        <Title>기부하기</Title>
      </S.DonationModalTitle>
      <S.DonationModalContent className="modal_content">
        <S.DonationSummary>
          <S.DonationSummaryThumbnail></S.DonationSummaryThumbnail>
          <S.DonationSummaryContent>
            <S.DonationSummaryTitle>{fundraising.title}</S.DonationSummaryTitle>
            <Span>{fundraising.agency.name}</Span>
          </S.DonationSummaryContent>
        </S.DonationSummary>
        <form onSubmit={handleSubmit}>
          <S.DonationPriceBox>
            <S.DonationPriceInput>
              <strong>기부금액</strong>
              <S.InputPrice
                id="donationAmount"
                inputMode="numeric"
                placeholder="0"
                maxLength={10}
                value={amount}
                onChange={handleTypingAmount}
              />
              <Span size={20}>원</Span>
              <button type="button" onClick={resetAmount}>
                X
              </button>
            </S.DonationPriceInput>
            <S.ButtonPriceContainer>
              {prices.map(price => (
                <S.PriceButton
                  type="button"
                  onClick={() => handleButtonAmount(price.value)}
                >
                  + {price.label}
                </S.PriceButton>
              ))}
              <S.PriceButton>직접입력</S.PriceButton>
            </S.ButtonPriceContainer>
            <Span>무통장은 3천원, 기부는 1천원부터 가능합니다.</Span>
          </S.DonationPriceBox>
          <S.DonationCommentBox visible={typeIsActive}>
            <TextArea
              placeholder={'응원하는 따뜻한 한마디를 남겨주세요'}
              name={'comment'}
              textMaxLength={300}
            />
          </S.DonationCommentBox>
          <S.DonationAdditionalOptionsBox $styleChange={typeIsActive}>
            <S.DonationAdditionalOption className="checkbox_container">
              <S.Label>
                <S.CheckBox />
                {/*<S.CheckIcon>체크</S.CheckIcon>*/}
                <i className="fa-regular fa-square-check"></i>
                <Span size={14} className="check_label_text">
                  카카오같이가치 채널 추가 동의(선택)
                </Span>
              </S.Label>
              <S.LabelDescription>
              같이가치 광고와 마케팅 메시지를 카카오톡으로 받아보세요.
              </S.LabelDescription>
            </S.DonationAdditionalOption>
          </S.DonationAdditionalOptionsBox>
          <S.DonationGuidanceList>
            {guidList.map((guid, index) => (
              <S.DonationGuidanceItem key={index}>
                {guid.message}
              </S.DonationGuidanceItem>
            ))}
          </S.DonationGuidanceList>
          <S.DonationModalFormSubmit>
            <Button type="submit" $bgColor={'rgb(255, 64, 80)'} color={'white'}>
              기부하기
            </Button>
          </S.DonationModalFormSubmit>
        </form>
      </S.DonationModalContent>
      
    </>
  );
};

export default DonationModalContent;
