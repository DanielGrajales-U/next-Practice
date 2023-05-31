'use client'
import React, { useState } from 'react'
import Styles from '@/Styles/LikeButton.module.css'

export default function LikeButton ({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)} className={Styles.like_btn}>
      {liked ? '💖' : '🤍'}
    </button>
  )
}
