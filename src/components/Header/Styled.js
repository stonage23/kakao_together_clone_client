import images from 'assets/images';
import styled, { css } from 'styled-components';
import { Overlay } from 'styles/GlobalStyledComponent';
import { getMaxWidth, getMinWidth } from 'utils/stylesUtil';

export const HeaderDefault = styled.header``;

export const Header = styled(HeaderDefault)`
  position: ${({ $sticky }) => ($sticky ? 'sticky' : 'relative')};
  z-index: 200;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: ${({ theme }) => theme.colors.white};

  @media only screen and (min-width: ${getMinWidth}) {
    height: 70px;
  }

  @media only screen and (max-width: ${getMaxWidth}) {
    min-height: 92px;
  }
`;

export const HeaderInner = styled.div`
  margin: 0px auto;
  min-width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${getMinWidth}) {
    height: 100%;
    width: 1120px;
  }

  @media only screen and (max-width: ${getMaxWidth}) {
    flex-wrap: wrap;
  }
`;

export const MainLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;

  & span {
    overflow: hidden;
    position: absolute;
    clip: rect(0px, 0px, 0px, 0px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    color: transparent;
  }

  @media only screen and (max-width: ${getMaxWidth}) {
    height: 55px;
  }
`;

export const MainLogoLink = styled.div`
  height: 100%;
  width: 115px;
  background: url(${images.mainLogo});
  background-repeat: no-repeat;
  background-position: center center;

  @media only screen and (max-width: ${getMaxWidth}) {
    height: 55px;
  }
`;

export const Navigation = styled.nav`
  height: 100%;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-family: 'Noto Sans KR', sans-serif;

  @media only screen and (max-width: ${getMaxWidth}) {
    order: 2;
    height: 50px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Menus = styled.ul`
  height: 100%;
  display: flex;
  gap: 8px;
  align-items: center;
  white-space: nowrap;

  & a:hover {
    color: #555; /* 호버 시 색상 */
  }

  @media only screen and (max-width: ${getMaxWidth}) {
    padding: 8px;
    width: 100%;
    justify-content: space-between;
    overflow-x: auto;
    scrollbar-width: none;
  }
`;

export const Link = styled.div`
  margin: 0 10px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: #333; /* 글자색 */
  font-weight: 400;

  @media only screen and (max-width: ${getMaxWidth}) {
    font-size: 14px;
    margin: 0px;
    padding: 4px;
  }
`;

export const MenuItem = styled.div`
  ${({ $isactive }) =>
    $isactive &&
    css`
      border-bottom: solid 1px black;
    `}
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

export const UserActions = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  & icon {
    margin-left: 20px;
    font-size: 1.2em;
    cursor: pointer;
  }
`;

export const UserProfileLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: ${getMaxWidth}) {
    display: none !important;
  }
`;

export const UserProfileLink = styled.div`
  display: inline-block;
`;

export const UserProfileImageWrapper = styled.div`
  height: 24px;
  width: 24px;
  -webkit-mask-image: url(${images.squircle});
  mask-image: url(${images.squircle});
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
`;

export const UserProfileImage = styled.div`
  width: 100%;
  height: 100%;
  ${({ bgUrl }) =>
    css`
      background: url(${bgUrl});
    `}
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SearchLinkWapper = styled.div`
  margin: 0px 11px 0px 19px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .icon {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: ${getMaxWidth}) {
    order: 1;
    margin: 0px;
  }
`;

/**
 * @description Button 컴포넌트
 */
export const SideMenuButtonWrapper = styled.div`
  padding: 8px;

  & .icon {
    width: 20px;
    height: 20px;
  }

  @media only screen and (max-width: ${getMaxWidth}) {
    order: -1;
  }
`;

export const SideMenuOverlay = styled(Overlay)`
  justify-content: flex-end;

  & .drawer_container {
    padding: 30px;
    min-width: 300px;
    max-width: 300px;
  }
`;
