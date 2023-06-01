import React from 'react'

import '../Styles/global.css'

import ListAvatars from './Components/ListAvatars/ListAvatars'

export default function page () {
  return (
    <fragment>
      <div className='tittle'>
        <ListAvatars />
      </div>
    </fragment>
  )
}
