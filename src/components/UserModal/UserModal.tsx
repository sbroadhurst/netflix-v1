import React, { useEffect } from 'react'
import { ModalBackgroundStyled, ModalStyled, CloseButtonStyled } from './UserModal.styled'
import { useDispatch } from 'react-redux'
import { setUserModalOpen } from '../../slices/mediaSlice'

interface IModalProps {
  isOpen: boolean
}

const UserModal = ({ isOpen = false }: IModalProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })

  const dispatch = useDispatch()
  // if isOpen is false, dont render anything
  if (!isOpen) {
    return null
  }

  // if isOpen is true, render the modal
  return (
    <>
      <ModalBackgroundStyled />
      <ModalStyled>
        <CloseButtonStyled onClick={() => dispatch(setUserModalOpen())}>X</CloseButtonStyled>
        <h1>This is the modal</h1>
        <h2>Some modal content here</h2>
      </ModalStyled>
    </>
  )
}

export default UserModal
