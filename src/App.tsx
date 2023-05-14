import './App.css'
import etsy from './assets/etsy.svg'
import instagram from './assets/instagram.svg'
import whatsapp from './assets/whatsapp.svg'

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-tab">About me</div>
          <div className="nav-tab">Projects</div>
          <div className="nav-tab">Contact</div>
        </nav>
      </header>
      <main>
        <h1>Hi, I'm Raspberry Kid</h1>
      </main>
      <footer>
        <h3>Follow me on social media:</h3>
        <img className="social-media-icon" src={etsy} />
        <img className="social-media-icon" src={instagram} />
        <img className="social-media-icon" src={whatsapp} />
      </footer>
    </>
  )
}

export default App
