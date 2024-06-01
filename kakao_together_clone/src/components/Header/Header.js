import React, { useEffect } from 'react'
import * as S from './Styled';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaRegUser, FaSearch } from 'react-icons/fa';
import images from 'assets/images';

const menuItems = [
  { path: '/', label: '홈' },
  { path: '/donate', label: '매달기부' },
  { path: '/about', label: '같이기부' },
  { path: '/contact', label: '모두의행둥' },
  { path: '/gallery', label: '마음날씨' },
  { path: '/campaign', label: '캠페인' },
];

const context = {
  isLoggedIn: true,
}

const getAvatarUrl = () => {

  if (context.isLoggedIn) return images.avatarLogin;

  return images.avatar;
}

/**
 * 
 * @returns 
 */
export default function Header() {

  const location = useLocation();
  const currentPath = location.pathname;
  const path = `${process.env.PUBLIC_URL}/`

  useEffect(() => {
    
  }, []);

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
        </S.Navigation>
        <S.UserActionLink bgUrl={getAvatarUrl()} as={Link} to={"#"} />
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"></path>
</svg>
        <FaBars className="icon" />
      </S.HeaderInner>
    </S.Header>
  )
}
