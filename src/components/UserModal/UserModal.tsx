import React, { useEffect } from 'react'
import { ModalBackgroundStyled, ModalStyled, CloseButtonStyled, ModalContent } from './UserModal.styled'
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
        <ModalContent>
          <h1>Stephen</h1>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87f26e4a-5db3-496f-a47f-485828864b25/de2zytx-3ace6c5a-7d23-4395-81ea-e3ca6332c4fc.png/v1/fill/w_451,h_250,strp/gohan_super_saiyan_2_by_dbzcoolguy67_de2zytx-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yMjYwIiwicGF0aCI6IlwvZlwvODdmMjZlNGEtNWRiMy00OTZmLWE0N2YtNDg1ODI4ODY0YjI1XC9kZTJ6eXR4LTNhY2U2YzVhLTdkMjMtNDM5NS04MWVhLWUzY2E2MzMyYzRmYy5wbmciLCJ3aWR0aCI6Ijw9NDA4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nD6msOeEiMLPuFPoNgUYjk1cxQFT2iWeNlPAfwZ5zew"
            alt="avatar"
          />
          <h2>Avatar Profile Modal</h2>
        </ModalContent>
      </ModalStyled>
    </>
  )
}

export default UserModal
