import React from 'react'
import './notification.css'

export const NotificationUI = (props) => {
  return (
    <section>
        <picture>
        <img src="./assets/images/avatar-angela-gray.webp" alt='avatar' />  
        </picture>        

        <div className='comment_container'>
            {props.children}
        </div>

    </section>
  )
}
