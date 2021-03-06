import React from 'react'

interface Props {
  className?: string
}

const BackIcon = ({ className }: Props) => (
  <svg
    className={className || ''}
    version='1.1'
    width='36'
    height='36'
    viewBox='0 0 36 36'
    preserveAspectRatio='xMidYMid meet'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.66,15.61,18,6,8.34,15.61A1,1,0,1,0,9.75,17L17,9.81V28.94a1,1,0,1,0,2,0V9.81L26.25,17a1,1,0,0,0,1.41-1.42Z'
      className='clr-i-outline clr-i-outline-path-1'
    />
    <rect x='0' y='0' width='36' height='36' fillOpacity='0' />
  </svg>
)

export default BackIcon
