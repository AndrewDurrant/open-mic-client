import React from 'react'
// import { format as formatDate } from 'date-fns' ** see index.js for all of these
import './Utils.css'

// export function NiceDate({ date, format='Do MMMM YYYY' }) {
//   return formatDate(date, format)
// }

export function Hyph() {
  return <span className='Hyph'>{' - '}</span>
}

export function Button({ className, ...props }) {
  console.log(props);
  
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