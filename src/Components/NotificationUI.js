import React from 'react'
import './notification.css'

export const NotificationUI = (props) => {
  return (
    <section style={{background:props.seen ? 'white': 'hsl(210, 60%, 98%)'}}>
        <picture>
        <img src={props.avatar} alt='avatar' />  
        </picture>        

        <div className='comment_container'>
          <div className='left_side'>
              <h2> {props.username} </h2>
              <p> {props.date} </p>
          </div>

            {props.children}


        </div>


        {props.message &&  <div className='dm_message'> 
        
          {props.message}
         </div> }

    </section>
  )
}
