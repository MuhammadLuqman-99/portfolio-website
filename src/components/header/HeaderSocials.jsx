import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linked.com" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><ImGithub/></a>
      <a href="https://dribbble.com" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials