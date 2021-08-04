import './App.css';
import { Route, Link,Switch, Redirect } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { HomePage } from './HomaPage';
import {TodosPage} from './TodosPage';

function App() {
  const [todo ,setTodo] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
  .then(json => {
    setTodo(json);
  })
  },[]);
  return (
      <div>
      <header>
      <nav>
        <ul style={{display:'flex',gap:'40px',fontSize:'50px',listStyle:'none'}}>
          <li>
            <Link
              to="home"
              activeclassName='is-active'
            >
              
              Home
            </Link>
          </li>
          <li>
          <Link 
            activeclassName='is-active'
            to="todos"
          >
            Todos
          </Link>
        </li>
        </ul>
      </nav>
      </header>
      <Switch>
      <Route path="/home">
        <HomePage/>
      </Route>
      <Route path="/todos" >
        <TodosPage todo={todo} />
      </Route>
      <Redirect path="/home" to="/"/>
      <p>Not Found</p>
      </Switch>
    </div>
  );
}

export default App;
