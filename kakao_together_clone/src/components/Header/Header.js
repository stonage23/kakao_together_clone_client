import React, { useEffect, useState } from 'react'
import * as S from './Styled';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import images from 'assets/images';
import { SideMenu } from './SideMenu';
import { MaskingImage } from 'components/MaskingImage';
import { useUserContext } from 'contexts/UserContext';

const menuItems = [
  { path: '/', label: '홈' },
  { path: '/donate', label: '매달기부' },
  { path: '/about', label: '같이기부' },
  { path: '/contact', label: '모두의행둥' },
  { path: '/gallery', label: '마음날씨' },
  { path: '/campaign', label: '캠페인' },
];


/**
 * 
 * @returns 
*/
export default function Header() {
  
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const { user, login, logout } = useUserContext();
  const [avatarUrl, setAvatarUrl] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;

  
  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  }
  
  const closeMenu = () => {
    setSideMenuOpen(false);
  };
  
  const userProfileImg = <MaskingImage maskUrl={images.squircle} imgUrl={avatarUrl} />;
  
  useEffect(() => {
    const getAvatarUrl = () => {
      return user ? images.avatarLogin : images.avatar;
    };
    
    setAvatarUrl(getAvatarUrl());
  }, [user]);
  
  useEffect(() => {
    document.body.style.overflow = isSideMenuOpen ? 'hidden' : 'auto';
  }, [isSideMenuOpen])

  return (
    <S.Header id='header'>
      <S.HeaderInner>
        <S.MainLogo as='h1'>
          <S.MainLogoLink as={Link} to="/"><span>카카오같이가치</span></S.MainLogoLink>
        </S.MainLogo>
        <S.Navigation id='navigation'>
          <S.Menus as='ul'>
            {menuItems.map(item => (
              <S.MenuItem as='li' key={item.path} href={item.path} isActive={currentPath === item.path}>
                <S.Link as={Link} to={item.path}>{item.label}</S.Link>
              </S.MenuItem>
            ))}
          </S.Menus>
          <button onClick={login}>로그인</button>
          <button onClick={logout}>로그아웃</button>
          <div>{user ? '로그인' : '로그아웃'}</div>
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
      <S.Overlay className={isSideMenuOpen ? 'open' : 'close'} onClick={closeMenu}>
        <SideMenu isSideMenuOpen={isSideMenuOpen} userProfileImg={userProfileImg} />
      </S.Overlay>
    </S.Header>
  )
}
