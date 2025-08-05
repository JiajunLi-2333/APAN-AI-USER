import './App.css';
import backgroundImage from './assets/meal-bg.jpg';

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <nav className="navbar">
        <ul className="nav-list">
          <li>Home</li>
          <li>Discover</li>
          <li>Share</li>
          <li>Search</li>
          <li><i className="fa-regular fa-user"></i></li>
          <li><i className="fa-regular fa-heart"></i></li>
        </ul>
      </nav>

      <div className="hero-text">
        <h1>Meal <span>Dice</span></h1>
        <p>smart meal suggestions based on what you have</p>
      </div>
    </div>
  );
}

export default App;