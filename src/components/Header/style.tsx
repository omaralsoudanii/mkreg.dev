import styled, { css } from 'styled-components'

const base = css`
  padding: 5px 8px 4px;
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 4;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  a {
    padding: 8px 32px;
    border-radius: 4px;
    width: 100%;
    text-align: center;
    margin: 0 1px;
  }
`

export const Container = styled.header`
  ${base};
  justify-content: space-around;
`

export const InnerGrid = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  justify-self: center;
  max-width: 968px;
  position: relative;
  grid-template-columns: repeat(6, max-content);
  z-index: 3;
`

export const MobileContainer = styled.header`
  ${base};

  font-size: 16px;
  justify-content: center;
  align-items: ${(props) => (props.expanded ? 'flex-start' : 'center')};
  flex-direction: ${(props) => (props.expanded ? 'column' : 'row')};
  padding-bottom: ${(props) => (props.expanded ? '16px' : '4px')};

  a {
    text-align: center;
  }
`

export const CloseButton = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  font-size: 26px;
  font-weight: 300;
  width: 40px;
  height: 40px;
  left: -4px;
  top: -4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`

export const MenuButton = styled.div`
  position: absolute;
  width: 56px;
  height: 50px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`

export const ThemeButtonMobile = styled.div`
  position: absolute;
  width: 56px;
  height: 50px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
`

export const ThemeButton = styled.div`
  position: absolute;
  right: 1rem;
  padding: 0.5rem 0.5rem;
  z-index: 3;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const Label = styled.span.attrs(({ isActive }) => ({
  className: `nav-label ${isActive && 'active'}`,
}))`
  display: flex;
  flex: 1;
  z-index: 3;
  position: relative;

  a {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100%;

    a {
      text-align: left;
      padding: 8px 12px;
      margin-left: 0;
    }
  }
`
