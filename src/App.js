import './App.css';
import { NotificationUI } from './Components/NotificationUI';

function App() {


  const message = "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."


  const avatars = [
    './assets/images/avatar-mark-webber.webp',
    './assets/images/avatar-angela-gray.webp',
    './assets/images/avatar-jacob-thompson.webp',
    './assets/images/avatar-rizky-hasanuddin.webp',
    './assets/images/avatar-kimberly-smith.webp',
    './assets/images/avatar-nathan-peterson.webp',
    './assets/images/avatar-anna-kim.webp',
  ]
  return (
    <div className="App">



      <main>
        <div className='header'>
          <h1> Notifications <span> 3 </span></h1>

          <p> Mark all as read</p>
        </div>
        <NotificationUI username={'Mark Webber'} date={'1m ago'} avatar={avatars[0]} > 
            <article className='comment_content'> 
              <span> Reacted to your recent post  </span>
              <span> My first tournament today! </span>
              <div className='red_dot'/>
            </article>
        </NotificationUI>

        <NotificationUI username={'Angela Gray'} date={'5m ago'} avatar={avatars[1]}> 
            <article className='comment_content'> 
              <span> Followed you  </span>
              <div className='red_dot'/>
            </article>
        </NotificationUI>

        <NotificationUI username={'Jacob Thompson'} date={'1 day ago'} avatar={avatars[2]}> 
            <article className='comment_content'> 
              <span> has joined your group  </span>
              <span className='chess'> Chess Club </span>
              <div className='red_dot'/>
            </article>
        </NotificationUI>


        <NotificationUI username={'Rizky Hassanuddin'} date={'5 days ago'} message={message} avatar={avatars[3]} seen={true}> 
            <article className='comment_content'> 
              <span> sent you a private message </span>
            </article>
        </NotificationUI>

        <NotificationUI username={'Kimberly Smith'} date={'1 week ago'} avatar={avatars[4]} seen={true} > 
            <article className='comment_content'> 
            <div className='flex gap-10'>
              <span> commented on your picture </span>
              <img className='img_chess' src='./assets/images/image-chess.webp' alt='img_chess'/>
            </div>
            </article>
        </NotificationUI>

        <NotificationUI username={'Nathan Peterson'} date={'1 week ago'} avatar={avatars[5]} seen={true} > 
            <article className='comment_content'> 
              <span> reacted to your recent post </span>
              <span> 5 end-game strategies  </span>

            </article>
        </NotificationUI>

        <NotificationUI username={'Anna Kim'} date={'1 week ago'} avatar={avatars[6]} seen={true}> 
            <article className='comment_content'> 
              <span> left the group  </span>
              <span className='chess'> Chess Club </span>
            </article>
        </NotificationUI>

      </main>
    </div>
  );
}

export default App;
