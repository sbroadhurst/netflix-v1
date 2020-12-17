import React from 'react'
import { StyledMenu } from './Menu.styled'
import HomeIcon from '../../assets/homeIcon.png'
import TVIcon from '../../assets/tvIcon.png'

interface Props {
  open: boolean
}

const navigation = (
  <>
    <p>
      <span role="img" aria-label="movies">
        &#x1F3E0;
      </span>{' '}
      HOME
    </p>{' '}
    <p>
      <span role="img" aria-label="movies">
        &#x1F3A5;{' '}
      </span>
      Movies
    </p>{' '}
    <p>
      <span role="img" aria-label="movies">
        &#x1F4FA;
      </span>{' '}
      TVSHOWS
    </p>{' '}
  </>
)

const Menu = ({ open }: Props) => {
  return <StyledMenu open={open}>{navigation}</StyledMenu>
}
export default Menu
