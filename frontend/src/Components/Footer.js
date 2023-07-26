import { Typography } from 'antd'
import React from 'react'

export default function Footer() {
  return (
    <div className='appFooter'>
        <Typography.Link href='tel:+123456789'>+91 8925739053</Typography.Link>
        <Typography.Link href='#' target={"_blank"}>Privacy Policy</Typography.Link>
        <Typography.Link href='#' target={"_blank"}>Terms & Conditions</Typography.Link>
    </div>
  )
}
