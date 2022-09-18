import React from 'react'
import './notification.css'

export const NotificationUI = () => {
  return (
    <section>
        <picture>
        <img src="./assets/images/avatar-angela-gray.webp" alt='avatar' />  
        </picture>        

        <div className='comment_container'>
            <p className='comment'> <span>Mark Webber</span> reacted to your recent post <span>My first tournament today</span>
            </p>
            <p className='date'>
                 1m ago 
            </p>
        </div>

    </section>
  )
}
