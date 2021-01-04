import styled from 'styled-components'

export const ModalBackgroundStyled = styled.div`
  background: #00000;
  backdrop-filter: blur(2px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  position: fixed;
`

export const ModalStyled = styled.div`
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  min-width: 30rem;
  z-index: 2;
  display: flex;
`

export const CloseButtonStyled = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  font-size: 1.5em;
  &:hover {
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  background: white;
  text-align: center;
`
