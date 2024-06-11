import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';
import { TotalTabPanel } from 'components/Home/CategoryContainer/Styled';
import useDynamicClamp from 'utils/useDynamicClamp';

const SliderComponent = ({data}) => {
    const settings = {
        dots: true, // 슬라이더 하단에 dot 네비게이션 보여줌(true)
        infinite: true, // 무한 루프 슬라이더(true)
        speed: 500, // 슬라이드 전환 속도
        slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1, // 한 번에 스크롤할 수
        adaptiveHeight: true, // 슬라이드 높이 콘텐츠에 맞게 조정
        arrows: false, // 좌우 버튼 제거(false)
        autoplay: true, // 자동 재생(true)
        autoplaySpeed: 3000, // 자동 재생 속도(ms),
        fade: false,
        cssEase: 'ease'
    };

    const slides = [
        {
            id: 1,
            title: "무관심 속 병든 생태계, 가로수",
            subtext: "환경실천연합회는 모금 완료 후 수도권 곳곳의 가로수를 대상으로 모니터링을 진행했습니다. 그 결과 많은 가로수가 시민의 무관심 속에서 성장 환경이 확보되지 않거나 오염으로 고통받는 모습을 확인할 수 있었는데요. 고통받고 오염된 가로수들은 시름시름 앓으며 잎이 노랗게 변한 ",
            thumbnail: "assets/images/hello/img_a_1.png",
            link: "/hardcoding"
        },
        {
            id: 2,
            title: "나는 어떤 꽃일까? s너무 반짝반짝 눈이 부셔 노노노노노노노노노노노",
            subtext: "1년 후 다시 찾은 연희와 도현이네. 가장 달라진 점은, 엄마가 급한 수술을 마친 것입니다. “도와주신 덕분에 수술을 받을 수 있었어요. 그 때 수술을 받지 않았으면 하반신 마비가 되었을 수도 있다고... 얼마나 다행인지 몰라요.”어렸을 때부터 고된 일을 장기간 해",
            thumbnail: "assets/images/hello/img_a_2.png",
            link: "/hardcoding"
        },
        {
            id: 3,
            title: "나랑 가장 닮은 강아지는?ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ하하하하하하하ㅏ하하하ㅏ",
            subtext: "환경실천연합회가로수가 시민의 무관통받는 모습을 확인할 수 있었는데요. 고통받고 오염된 가로수들은 시름시름 앓으며 잎이 노랗게 변한 ",
            thumbnail: "assets/images/hello/img_a_3.png",
            link: "/hardcoding"
        },
    ];

    const DynamicClampItem = (slide) => {
        const { lineClamp, titleRef } = useDynamicClamp(slide.title, slide.content);

        const subtextStyles = {
            WebkitLineClamp: lineClamp,
            maxHeight: lineClamp > 4 ? '135px' : ''
        }
      
        return (
            <div key={slide.id} className="slide">
                <a href={slide.link} className="external_hyperlink">
                    <div>
                        <strong className='slide_title' ref={titleRef}>{slide.title}</strong>
                        <p className='slide_subtext' style={subtextStyles}>{slide.subtext}</p>
                    </div>
                </a>
            </div>
        );
      };
    

    return (
        <div className="slider_container" style={{ position: 'relative' }}>
            <Slider {...settings}>
                {slides.map(data => (
                    DynamicClampItem(data)
                ))}
            </Slider>
        </div>
    );
};

export default SliderComponent;
