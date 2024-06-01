import images from "assets/images";
import styled, { css } from "styled-components";


export const Header = styled.header`

  position: sticky;
  z-index: 200;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: var(--white-color);
  
  
  `;

export const HeaderInner = styled.div`

    height: 70px;
    width: 1120px;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 768px) {
        height: 70px;
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
  `;
  
  export const MainLogoLink = styled.div`
    
    height: 100%;
    width: 115px;
    background: url(${images.mainLogo});
    background-repeat: no-repeat;
    background-position: center center;
  `;

  export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333; /* 글자색 */
    font-family: 'Noto Sans KR', sans-serif; /* 폰트 적용 */
  
    height: 100%;
  `;

export const Menus = styled.ul`
  height: 100%;
  display: flex;  
  align-items: center;

  & a {
    text-decoration: none;
    color: #333; /* 글자색 */
    margin: 0 10px;
    font-weight: 400;
  }

  & a:hover {
    color: #555; /* 호버 시 색상 */
  }
`

export const Link = styled.div`
    
`;

export const MenuItem = styled.div`
    ${({isActive}) => 
    isActive && // huge라는 props가 존재하면 다음 css 적용
    css `
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
  align-items: center;
  justify-content: center;
  font-size: 20px;
  gap: 25px;

  & icon {
    margin-left: 20px;
    font-size: 1.2em;
    cursor: pointer;
  }
`;

export const UserProfileWrapper = styled.div`
    align-items: center;
    justify-content: center;
`;


export const UserActionLink = styled.div`
    height: 24px;
    width: 24px;
    background-size: cover;
    border-radius: 10px;

    ${({bgUrl}) => css`
      
      background: url(${bgUrl});
    `}
`;