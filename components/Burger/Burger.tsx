import React from 'react'
import { StyledBurger } from './Burger.styled'

interface Props {
  open: boolean
  setOpen: Function
}

const Burger = ({ open, setOpen }: Props) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
