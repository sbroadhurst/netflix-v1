import React from 'react'
import { StyledMenu } from './Menu.styled'
import { setMediaType } from '../../slices/mediaSlice'
import { useDispatch } from 'react-redux'

interface Props {
  open: boolean
}

const Menu = ({ open }: Props) => {
  const dispatch = useDispatch()

  const setType = (type: string) => {
    dispatch(setMediaType(type))
  }

  return (
    <StyledMenu open={open}>
      {' '}
      <>
        {/* <p onClick= {()=>setType()}>
    <span role="img" aria-label="movies">
      &#x1F3E0;
    </span>{' '}
    HOME
  </p>{' '} */}
        <p onClick={() => setType('movie')}>
          <span role="img" aria-label="movies">
            &#x1F3A5;{' '}
          </span>
          Movies
        </p>{' '}
        <p onClick={() => setType('tv')}>
          <span role="img" aria-label="movies">
            &#x1F4FA;
          </span>{' '}
          TVSHOWS
        </p>{' '}
      </>
    </StyledMenu>
  )
}
export default Menu
