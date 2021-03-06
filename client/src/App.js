import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Person from './components/Person';
// import createUser from './components/Users/UserCreate';
import Lonely from './components/Lonely';
import data from './data.json';
import Registration from './components/auth/Registration';
// import Login from './components/auth/Login'
// import { Link, BrowserRouter as Router } from 'react-router-dom'





// function Users() {
//   return (
//     <Router>
//     <div className="App">
//       <h1>User Tracker</h1>
//       <Link to="/users">Users</Link>
//       <createUser />
//       </div>
//     </Router>

 
//   )
// }

const App = () => {
  const createUser = (opts) => {
    fetch('/users', {
        method: 'post',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({user: opts}) //package to backend
    }).then(function (response) {
        console.log(response)
        return response.json();
     }).then(function (data) {
       setActiveUser(data.user)

  
    //     ChromeSamples.log('Created Gist:', data.html_url);
    });
  
  }



  
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null)

  const removedPersonFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter(user => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case 'ADD_TO_LIKED_USERS':
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case 'ADD_TO_DISLIKED_USERS':
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          setDislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };

  return (
    <div className="app">
      <Header createUser={createUser} activeUser={activeUser}/>
      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
         
        />
      )}
    </div>
  );
};

export default App;