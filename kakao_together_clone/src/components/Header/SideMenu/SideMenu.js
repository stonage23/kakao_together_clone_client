import React from 'react'
import * as S from './Styled';
import { Link } from 'react-router-dom';
import { HiddenLabelTag } from 'components/CommonStyles/Styled';
import { useUserContext } from 'contexts/UserContext';


const myTabItems = [
  {
    icon : '',
    label: 'MY',
    url: '',
  },
  {
    icon: '',
    label: '알림',
    url: '',
  }
]

const navItems = [
  {
    label: "같이기부",
    url: "/hardcoding",
  },{
    label: "모두의행동",
    url: "/hardcoding",
  },{
    label: "마음날씨",
    url: "/hardcoding",
  },{
    label: "캠페인",
    url: "/hardcoding",
  }
];

const supportItems = [
  {
    label: "같이가치 소개",
    url: "hardcoding",
  },{
    label: "매거진",
    url: "hardcoding",
  },{
    label: "공지사항",
    url: "hardcoding",
  },{
    label: "모금제안",
    url: "hardcoding",
  }
];

const SideMenu = ({isSideMenuOpen, userProfileImg}) => {

  const { user } = useUserContext();
  
  /**
   * 리스트 아이템을 렌더링하는 함수
   * @function 
   * @param {Array} items 
   * @param {Object} items.item - 리스트의 각 아이템
   * @param {String} items.item.icon - 사용할 아이콘 이미지 주소
   * @param {String} items.item.label - 해당 요소의 내용 문자열
   * @param {String} items.item.url - 이동할 페이지 주소
   * @returns {React.Component}
   */
  const listRender = (items) => (
    items.map((item, index) => (
      <S.ListItem key={index}>
        <S.NavLink as={Link} to={item.url}>
          {item.label}
        </S.NavLink>
      </S.ListItem>
    ))
  );

  return (
    <S.SideMenuContainer className={`drawer_container ${isSideMenuOpen ? 'open' : 'close'}`} onClick={(e) => e.stopPropagation()}>
      <S.SideMenuBody>
          <S.UserProfileConatainer>
            <S.UserProfileLink as={Link} to='/loginpage_hardcoding'>
              {userProfileImg}
              <S.UserProfileNickname as='span'>
                <stron>{user ? user.nickname : '로그인하세요'}</stron>
              </S.UserProfileNickname>
            </S.UserProfileLink>
          </S.UserProfileConatainer>
          <S.MyTabList>
           {listRender(myTabItems)}
          </S.MyTabList>
          <HiddenLabelTag as='h2'>사이드 메뉴</HiddenLabelTag>
          <S.SideMenuNavigation>
            <S.MenuList as='ul'>
              <S.MenuList>
                {listRender(navItems)}
              </S.MenuList>
            </S.MenuList>
          </S.SideMenuNavigation>
          <S.SupportList>
            {listRender(supportItems)}
          </S.SupportList>
      </S.SideMenuBody>
    </S.SideMenuContainer>
  )
}

export default SideMenu