import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation.js';
import Content from './components/Content.js';
import Profile from './components/Profile.js';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
var students = [
  { profile: "./profiles/avatar5.png", id: 1, name: "Hariharan", age:getAge() , follows: getFollowers(), following: getFollowers(), projects:getProjects()  },
  { profile: "./profiles/avatar1.png", id: 2, name: "Arjun", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: "./profiles/avatar3.png", id: 3, name: "Ram", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: "./profiles/avatar2.png", id: 4, name: "Rajini", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: "./profiles/avatar5.png", id: 5, name: "Danush", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: "./profiles/avatar2.png", id: 6, name: "John Doe", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: "./profiles/avatar1.png", id: 7, name: "Dhruv", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: "./profiles/avatar2.png", id: 8, name: "Vikram", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: "./profiles/avatar3.png", id: 9, name: "Ajith", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() },
  { profile: logo, id: 10, name: "Stuart", age: getAge(), follows: getFollowers(), following: getFollowers(), projects: getProjects() }];
var content = "login";
function App() {
  return (
    <div className="App">
      <header >
        <Navigation />
      </header>
      <Content page={content}/>
      <Profile args={students} />
      <footer>
        &copy; HariharanUmapathi 2021
      </footer>
    </div>
  );
}
function getAge()
{
  return Math.round(80*Math.random());
}
function getProjects()
{
  return Math.round(100*Math.random());
}
function getFollowers()
{
  return Math.round(100000*Math.random());
}

export default App;
