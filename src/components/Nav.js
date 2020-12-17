import React, { useEffect, useState } from 'react'
import './Nav.css'
import Burger from './Burger'
import Menu from './Menu'

function Nav() {
  const [show, handleShow] = useState(false)
  const [open, setOpen] = useState(false)

  function checkopen() {
    if (open) {
      setOpen(!open)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll', {})
    }
  }, [])

  return (
    <div className={`nav ${show && 'nav-background'}`}>
      <img
        className="nav-logo"
        onClick={() => window.scrollTo(0, 0)}
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
      />
      <div onClick={() => checkopen()}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>

      <img
        className="nav-avatar"
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87f26e4a-5db3-496f-a47f-485828864b25/de2zytx-3ace6c5a-7d23-4395-81ea-e3ca6332c4fc.png/v1/fill/w_451,h_250,strp/gohan_super_saiyan_2_by_dbzcoolguy67_de2zytx-250t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0yMjYwIiwicGF0aCI6IlwvZlwvODdmMjZlNGEtNWRiMy00OTZmLWE0N2YtNDg1ODI4ODY0YjI1XC9kZTJ6eXR4LTNhY2U2YzVhLTdkMjMtNDM5NS04MWVhLWUzY2E2MzMyYzRmYy5wbmciLCJ3aWR0aCI6Ijw9NDA4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nD6msOeEiMLPuFPoNgUYjk1cxQFT2iWeNlPAfwZ5zew"
        alt="avatar"
      />
    </div>
  )
}

export default Nav
