import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './Styled';
import { StoryDetails } from './StoryDetails';
import Progressbar from 'components/common/Progressbar';
import { Em, Span, Strong } from 'styles/GlobalStyledComponent';
import { fundraisingMock, fundraisingResponse } from 'mocks/mockData';
import { calculatePercentage } from 'utils/progressUtils';
import { calculateDaysLeft } from 'utils/dateUtils';
import { DonationModalContent } from './DonationModalContent';
import { Modal } from 'components/common/Modal';
import { Button } from 'components/common/Button';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Story() {
  const [fundraising, setFundraising] =
    useState();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const { fundraisingId } = useParams();

  useEffect(() => {

    if (process.env.REACT_APP_ENV === 'mock') {
    const fundraising = fundraisingMock.mockOne;
    setFundraising(fundraising);
    } else {
      const initializeData = async () => {
        try {
          await axios.get(API_BASE_URL + `/api/fundraisings/${fundraisingId}`)
            .then(response => {
              console.log('iam in sibal');
              console.log(response.data);
              setFundraising(response.data);
            });
        } catch (e) {
          alert('게시글 불러오기 실패');
          console.log(e);
        }
      };

      initializeData();
    }

  }, []);

  if (!fundraising) return null;

  const handleDonationToggle = (value) => {
    setIsDonationModalOpen(value);
  };

  const closeModal = () => {
    setIsDonationModalOpen(false);
  }

  function DonationActionComponent({ className }) {
    return (
      <S.StoryDonationAction className={className && className}>
        <Button
          type="button"
          onClick={() => handleDonationToggle(true)}
          className="fundraising_button"
          $bgColor={'rgba(255, 64, 80, 0.9)'}
          color={'white'}
        >
          기부하기
        </Button>
        <S.StoryDonationHeartButton className={'test'}>
          {fundraising.heartCount}
        </S.StoryDonationHeartButton>
        <S.StoryDonationSharingButton className={'test'}>
          {fundraising.sharedCount}
        </S.StoryDonationSharingButton>
      </S.StoryDonationAction>
    );
  }
  const progressPercentage = calculatePercentage(
    fundraising.currentAmount,
    0,
    fundraising.targetAmount
  );
  const diff = calculateDaysLeft(fundraising.endDate);

  return (
    <S.Story>
      <S.StoryLayout>
        <S.StoryTopLayout>
          <S.StoryMainImageBox>
            <S.ImageStoryMain imageUrl={fundraising.thumbnailUrl}/>
          </S.StoryMainImageBox>
          <S.StoryTopRightLayout>
            <S.StoryProgressBox>
              <S.StoryTitle size={28}> {fundraising.title}</S.StoryTitle>
              <S.StoryAmount>
                <Em size={25} color={'black'}>
                  {fundraising.currentAmount}원
                </Em>
                <Span>{fundraising.targetAmount}원 목표</Span>
              </S.StoryAmount>
              <Progressbar
                min={0}
                now={fundraising.currentAmount}
                max={fundraising.targetAmount}
              />
              <S.ProgressSubtext>
                <Span color="#ff4050">{progressPercentage}%달성</Span>
                <Em>{diff}일남음</Em>
              </S.ProgressSubtext>
            </S.StoryProgressBox>
            <S.StoryDonationBox>
              <Strong>총 {fundraising.directDonationCount + fundraising.indirectDonationCount} 명이 참여중입니다</Strong>
              <S.StoryDonationInfoList>
                <S.StoryDonationInfoItem>
                  <Span>직접기부({fundraising.directDonationCount}명)</Span>
                  <Span>{fundraising.directDonationAmount}원</Span>
                </S.StoryDonationInfoItem>
                <S.StoryDonationInfoItem>
                  <Span>참여기부({fundraising.indirectDonationCount}명)</Span>
                  <Span>{fundraising.indirectDonationAmount}원</Span>
                </S.StoryDonationInfoItem>
              </S.StoryDonationInfoList>
              <S.StoryDonationGuideList>
                <S.StoryDonationGuideItem>
                  <Span>공유, 응원 댓글로 참여하면 카카오가 기부합니다.</Span>
                </S.StoryDonationGuideItem>
                <S.StoryDonationGuideItem>
                  <Span>기부금은 100% 단체에 전달됩니다.</Span>
                </S.StoryDonationGuideItem>
              </S.StoryDonationGuideList>
              <DonationActionComponent className={'floating_button'} />
            </S.StoryDonationBox>
            {/*<S.StickyRightLayout>*/}
            {/*  <S.StoryAgencyBox></S.StoryAgencyBox>*/}
            {/*</S.StickyRightLayout>*/}
          </S.StoryTopRightLayout>
        </S.StoryTopLayout>
        <S.StoryMiddleLayout>
          <StoryDetails donationActionComponent={DonationActionComponent} fundraisingId={fundraisingId} />
        </S.StoryMiddleLayout>
      </S.StoryLayout>
      <Modal isModalOpen={isDonationModalOpen}>
        <DonationModalContent setIsModalOpen={setIsDonationModalOpen} fundraising={fundraising}/>
        <S.DonationModalClose type="button" onClick={closeModal}>
        X
      </S.DonationModalClose>
      </Modal>
    </S.Story>
  );
}

export default Story;
