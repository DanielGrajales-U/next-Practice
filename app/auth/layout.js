import React from 'react'
import Counter from '../Components/Counter/Counter'

export default function layout ({ children }) {
  return (
    <>
      <Counter />
      {children}
    </>
  )
}
