import React, { useEffect, useState } from 'react'
import * as S from './Styled';
import { Link, matchPath, useLocation, useMatch } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import images from 'assets/images';
import { SideMenu } from './SideMenu';
import { MaskingImage } from 'components/MaskingImage';
import { useUserContext } from 'contexts/UserContext';
import { useLocationContext } from 'contexts/LocationContext';

const navItems = [
  { path: '/', label: '홈', matchPatterns: ['/'] },
  { path: '/fundraisings/regular-donations', label: '매달기부', matchPatterns: ['/fundraisings/regular-donations'] },
  { path: '/fundraisings/now', label: '같이기부', matchPatterns: ['/fundraisings/now', '/fundraisings/:id/story'] },
  { path: '/actions/projects', label: '모두의행동', matchPatterns: ['/actions'] },
  { path: '/hello', label: '마음날씨', matchPatterns: ['/hello'] },
  { path: '/boards/campaigns', label: '캠페인', matchPatterns: ['/boards'] },
];

export default function Header() {

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { user, login, logout } = useUserContext();
  const [avatarUrl, setAvatarUrl] = useState('');
  const {pathname: currentPath} = useLocationContext();

  const userProfileImg = <MaskingImage maskurl={images.squircle} imgurl={avatarUrl} />;

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  }
  
  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };
  
  useEffect(() => {
    const getAvatarUrl = () => {
      return user ? images.avatarLogin : images.avatar;
    };
    
    setAvatarUrl(getAvatarUrl());
  }, [user]);
  
  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen])

  const checkisactive = (item) => {

    const isactive = item.matchPatterns.some(pattern => matchPath({ path: pattern, end: true }, currentPath));
    return isactive;
  }

  const renderMenuItem = () => {
    return navItems.map(item => {
      return (
      <S.MenuItem as='li' key={item.path} href={item.path} isactive={checkisactive(item)}>
        <S.Link as={Link} to={item.path}>{item.label}</S.Link>
      </S.MenuItem>
      )
    })
  }

  return (
    <S.Header id='header'>
      <S.HeaderInner>
        <S.MainLogo as='h1'>
          <S.MainLogoLink as={Link} to="/"><span>카카오같이가치</span></S.MainLogoLink>
        </S.MainLogo>
        <S.Navigation id='navigation'>
          <S.Menus as='ul'>
            {renderMenuItem()}
          </S.Menus>
          {/* <button onClick={login}>로그인</button>
          <button onClick={logout}>로그아웃</button>
          <div>{user ? '로그인' : '로그아웃'}</div> */}
        </S.Navigation>
        <S.UserProfileLinkWrapper>
          <S.UserProfileLink as={Link} to={"/UserProfile_hardcoding"}>
            {userProfileImg}
          </S.UserProfileLink>
        </S.UserProfileLinkWrapper>
        <S.SearchLinkWapper as={Link} to='/search_hardcoding'>
          <FaSearch className='icon' />
        </S.SearchLinkWapper>
        <S.SideMenuButtonWrapper as='button' onClick={toggleSideMenu}>
          <FaBars className="icon" />
        </S.SideMenuButtonWrapper>
      </S.HeaderInner>
      <S.Overlay className={isSideMenuOpen ? 'open' : 'close'} onClick={closeSideMenu}>
        <SideMenu isSideMenuOpen={isSideMenuOpen} userProfileImg={userProfileImg} />
      </S.Overlay>
    </S.Header>
  )
}
