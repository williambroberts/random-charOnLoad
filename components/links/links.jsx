import React from 'react'
import Link from 'next/link'
import IconGmail from '../icons/social/gmail'
import IconGithub from '../icons/social/github'
import IconLeetcode from '../icons/social/leetcode'
import IconHotjar from '../icons/social/jar'
import Icon459Linkedin2 from '../icons/social/linkedin'
import CenteredFlexRow from '../setup/layout/centeredFlexRow'
//misc.css
const Links = () => {
  return (
    <>
    <CenteredFlexRow>
        <a href="https://www.linkedin.com/in/williambroberts/"  className='anchor-external' target='_blank'><Icon459Linkedin2/></a>
        <a href="3williamroberts:recipient@gmail.com"  className='anchor-external' target='_blank'><IconGmail/></a>
        <Link href="/"  className='anchor-internal' ><IconHotjar/></Link>
        <a href="https://github.com/williambroberts"  className='anchor-external' target='_blank'><IconGithub/></a>
        <a href="https://leetcode.com/thew1lego/" className='anchor-external' target='_blank'><IconLeetcode/></a>

    </CenteredFlexRow>
    </>
  )
}

export default Links