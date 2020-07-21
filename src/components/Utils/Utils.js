import React from 'react'
import './Utils.css'

export function AverageRating(num) {
  let  stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(<i key={stars.length} className="fas fa-microphone-alt icon-4x rate_filled"></i>)
  }
  while (stars.length < 4) {
    stars.push(<i key={stars.length} className="fas fa-microphone-alt icon-4x rate_empty"></i>)
  }
  return stars;
}

export function Hyph() {
  return <span className='Hyph'>{' - '}</span>
}

export function Button({ className, ...props }) {
  
  return <button className={['Button', className].join(' ')} {...props} />
}

export function Textarea({ className, ...props }) {
  return (
    <textarea className={['Textarea', className].join(' ')} {...props} />
  )
}

export function Input({ className, ...props }) {
  return (
    <input className={['Input', className].join(' ')} {...props} />
  )
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}

export function Section({ className, grid, ...props }) {
  const classes = [
    'Section',
    grid && 'Section--grid',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props} />
  )
}