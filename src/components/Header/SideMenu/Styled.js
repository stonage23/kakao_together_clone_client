import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  width: 0px;
  height: 0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);

  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  visibility: hidden;
  z-index: 1000;

  &.open {
    transform: translateX(0);
    visibility: visible;

    width: 80%;
    height: 100%;
  }
`;

export const SideMenuBody = styled.div`
  width: 100%;
`;

const Ul = styled.ul`
  padding: 0px;
  margin: 0px;
`;

export const UserProfileLink = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
`;

export const UserProfileConatainer = styled.div`
  & .mask {
    width: 40px;
    height: 40px;
  }
`;

export const UserProfileNickname = styled.div`
  padding-left: 10px;
  font-size: 16px;
  letter-spacing: -1.5px;
`;

export const Li = styled.li``;

export const ListItem = styled(Li)``;

export const NavLink = styled.div``;

export const MyTabList = styled(Ul)`
  margin-top: 20px;
  width: 100%;
  display: flex;
  background-color: rgb(249, 249, 249);
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 6px;

  & ${ListItem} {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  & ${NavLink} {
    width: 100%;
    padding: 12px;
    display: inline-flex;
    justify-content: center;
  }

  & ${ListItem} + ${ListItem}::before {
    content: '';
    width: 2px;
    height: 10px;
    background-color: rgb(229, 229, 229);
    color: rgb(68, 68, 68);
  }
`;

export const SideMenuNavigation = styled.nav`
  padding-top: 28px;
`;

export const MenuList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 5px;

  & ${ListItem} {
    display: flex;
    justify-content: flex-start;
    font-size: 16px;
  }

  & ${NavLink} {
    padding: 6px 0px;
    height: 100%;
    display: inline-flex;
    gap: 10px;
    line-height: 1.88;
    text-align: center;
  }
`;

export const SupportList = styled(Ul)`
  margin: 0px -18px;
  padding: 20px 0px 0px;
  display: flex;
  flex-wrap: wrap;

  & ${ListItem} {
    margin: 0px 18px;
    width: calc(50% - 36px);
  }

  & ${NavLink} {
    padding: 5px 0px;
    color: rgb(102, 102, 102);
    font-size: 14px;
    line-height: 1.87;
  }
`;
