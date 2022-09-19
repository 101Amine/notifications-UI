import './App.css';
import { NotificationUI } from './Components/NotificationUI';

function App() {
  return (
    <div className="App">



      <main>
        <section className='header'>
          <h1> Notifications <span> 3 </span></h1>

          <p> Mark all as read</p>
        </section>
        <NotificationUI> 
            <h2> Mark Webber </h2>
            <article className='comment_content'> 
              <span> Reacted to your recent post  </span>
              <span> My first tournament today! </span>
           </article>
        </NotificationUI>
      </main>
    </div>
  );
}

export default App;
