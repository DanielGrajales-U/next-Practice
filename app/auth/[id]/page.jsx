import React from 'react'

export default function Post ({ params }) {
  const { id } = params
  return (
    <div>This is the post of {id}</div>
  )
}
