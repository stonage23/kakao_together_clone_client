import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './Styled';
import { Span } from 'styles/GlobalStyledComponent';
import { Button } from 'components/common/Button';
import axios from 'axios';
import { config } from '../../../config/config';
import { storyMock } from '../../../mocks/mockData';

const tabNavList = [
  { name: '모금소개', id: 'storyTab', url: '' },
  { name: '기부현황', id: 'donatorsTab', url: '' },
  { name: '소식', id: 'newsTab', url: '' },
];

const throttle = (func, delay) => {
  let timeoutId = null;
  return (...args) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        timeoutId = null;
      }, delay);
    }
  };
};

const Subtitle = ({ value, className }) => <S.SubTitle className={className}>{value}</S.SubTitle>;

const Text = ({ value, className }) => (
  <S.Text className={className}>
    {value.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </S.Text>
);

const Image = ({ value, className }) => {

  return (
    <S.ImageBox className={className}>
      <img src={value.url} alt="" />
    </S.ImageBox>
  )
};

const API_BASE_URL = config.apiBaseUrl;

const StoryDetails = ({ donationActionComponent: DonationActionComponent, fundraisingId }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [post, setPost] = useState();

  const tabMenuRef = useRef(null); // DOM 요소를 참조할 Ref
  const stickyButtonRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (tabMenuRef.current) {
      const stickyOffset = tabMenuRef.current.getBoundingClientRect().top;
      if (stickyOffset <= 0) {
        tabMenuRef.current.classList.add('sticky');
        stickyButtonRef.current.classList.add('sticky');
      } else {
        tabMenuRef.current.classList.remove('sticky');
        stickyButtonRef.current.classList.remove('sticky');
      }
    }
  }, []);

  const handleNavClick = index => {
    handleScroll();
    setActiveIndex(index);
  };

  useEffect(() => {

    if (process.env.REACT_APP_ENV === 'mock') {
      const story = storyMock.mockOne;
      setPost(story);
    } else {
      const initializeDate = async () => {
        try {
          await axios.get(API_BASE_URL + `/api/fundraisings/${fundraisingId}/story`)
            .then(response => {
              setPost(response.data);
            });
          console.log('post 불러오기 성공!');
        } catch (e) {
          console.log(e);
          alert('post 불러오기 실패!');
        }
      };

      initializeDate();
    }
  }, []);


  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledScrollHandler);

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleScroll]);

  const TabContent = ({data}) => {

    if (!data) return;
    if (activeIndex === 0)
      return (
        <S.TabContent id="storyTab">
          {data.contents.map((content, index) => {
            switch (content.type) {
              case 'SUBTITLE':
                return <Subtitle key={index} className={'subtitle_document'} value={content.value} />;
              case 'TEXT':
                return <Text key={index} className={'text_document'} value={content.value} />;
              case 'IMAGE':
                return <Image key={index} className={'image_document'} value={content.value} />;
              default:
                return null;
            }
          })}
        </S.TabContent>
      );
    else if (activeIndex === 1) 
      return (
        <S.TabContent id="donatorsTab"></S.TabContent>
      );
    else if (activeIndex === 2) 
      return (
        <S.TabContent id="storyTab"></S.TabContent>
      );
  }

  return (
    <S.StoryDetails>
      <S.TabMenu className="tab_menu" ref={tabMenuRef}>
        <S.TabNavigationBar>
          {tabNavList.map((item, index) => (
            <S.TabNavigationItem
              key={index}
              className={index === activeIndex && 'active'}
            >
              <Button id={item.id} onClick={() => handleNavClick(index)}>
                <Span
                  size={15}
                  color={index === activeIndex ? 'black' : 'rgb(136, 136, 136)'}
                  className="text_tab_menu"
                >
                  {item.name}
                </Span>
              </Button>
            </S.TabNavigationItem>
          ))}
        </S.TabNavigationBar>
      </S.TabMenu>
      <S.FloatingElement ref={stickyButtonRef}>
        <DonationActionComponent className={'floating_button'} />
      </S.FloatingElement>
      <TabContent data={post} />
    </S.StoryDetails>
  );
};

export default StoryDetails;
