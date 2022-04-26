import styled from 'styled-components'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    open?: boolean
    scrollY?: number
  }
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #111;
  height: 100rem;
  text-align: left;
  padding: 6rem 2rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  img {
    height: 2rem;
    padding-right: 20px;
    object-fit: contain;
  }

  p {
    cursor: pointer;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      width: 100vw;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`
