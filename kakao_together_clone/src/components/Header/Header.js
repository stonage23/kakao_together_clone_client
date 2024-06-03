import React, { useEffect, useState } from 'react'
import * as S from './Styled';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import images from 'assets/images';
import { useLoginState } from 'contexts/LoginContext';

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
  const { isLoggedIn, login, logout } = useLoginState();
  const [avatarUrl, setAvatarUrl] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;

  
  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  }
  

  useEffect(() => {
    const getAvatarUrl = () => {
      return isLoggedIn ? images.avatarLogin : images.avatar;
    };

    setAvatarUrl(getAvatarUrl());
  }, [isLoggedIn]);

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
          <div>{isLoggedIn ? '로그인' : '로그아웃'}</div>
        </S.Navigation>
        <S.UserProfileLinkWrapper>
          <S.UserProfileLink as={Link} to={"/UserProfile_hardcoding"}>
            <S.UserProfileImageWrapper>
              <S.UserProfileImage as='img' bgUrl={avatarUrl}/>
            </S.UserProfileImageWrapper>
          </S.UserProfileLink>
        </S.UserProfileLinkWrapper>
        <S.SearchLinkWapper as={Link} to='/search_hardcoding'>
          <FaSearch className='icon' />
        </S.SearchLinkWapper>
        <S.SideMenuButtonWrapper as='button' onClick={toggleSideMenu}>
          <FaBars className="icon" />
        </S.SideMenuButtonWrapper>
      </S.HeaderInner>
      <S.Overlay />
      <S.SideMenu isOpen={isSideMenuOpen}>
        <div>
          <h2>로그인하세요</h2>
          <ul>
            <li>같이기부</li>
            <li>모두의행둥</li>
            <li>마음날씨</li>
            <li>캠페인</li>
            {/* 추가 메뉴 항목 */}
          </ul>
        </div>
      </S.SideMenu>
    </S.Header>
  )
}
