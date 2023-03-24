import { useEffect, useState } from 'react';
import './App.css';

const informations = [
  {name: 'Naimur Rahman', job: "Software Engineer", address: "Gazipur, Dhaka"},
  {name: 'Sabbir Rahman', job: "Frontend Engineer", address: "Kaligonj, Dhaka"},
  {name: 'Abir Islam', job: "Backend Engineer", address: "Kisorgonj, Dhaka"}
];

const friends = [
  {name: 'Kader Jilani', phone: '01925234527'},
  {name: 'Kashem Islam', phone: '01925234524'},
  {name: 'Nibir Bishas', phone: '01923234523'},
];

function App() {
  return (
    <div className="App">
      <h2>Dynamic Api Load with useState and useEffect</h2>
      <Users></Users>
      <h2>UseState</h2>
      <Counter></Counter>

       <h2>First Components</h2>
       {
        informations.map(information => <Person name={information.name} job={information.job} address={information.address}></Person>)
       }
       {/* <Person name="Naimur Rahman" job="Software Engineer"></Person>
       <Person name="Akash Ahammed" job="Web-development"></Person> */}
       <h2>Second Component</h2>
       {
        friends.map(friend => <FriendInfo name={friend.name} phone={friend.phone}></FriendInfo>)
       }
       {/* <FriendInfo name="Tuhin Ahammed" phone="01923456243"></FriendInfo>
       <FriendInfo name="Rajib Bishas" phone="014256723243"></FriendInfo> */}
    </div>
  );
}

function Person(props) {
  // console.log(props)
  return (
    <div className="container">
       <h1>Name: {props.name} </h1>
       <h3>Job: {props.job}</h3>
       <h3>Address: {props.address}</h3>
    </div>
  );
}

function FriendInfo(props) {
  // console.log(props)
   return (
     <div className="friendInfo">
        <h2>Name: {props.name} </h2>
        <h4>Phone: {props.phone} </h4>
     </div>
   );
}

function Counter() {
  const [count, setCount] = useState(25)
  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)
  return (
     <div className="counter">
         <h2>Counter: {count} </h2>
         <button onClick={decreaseCount}>Decrease </button>
         <button onClick={increaseCount}>Increase</button>
     </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  // useEffect(()=>{}, [])
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data));
  }, [])

  return (
    <div className="user-container">
       <h2>Users: {users.length} </h2>
       {
        users.map(user => <UserName name={user.name}></UserName>)
       }
    </div>
  );
}

function UserName(props) {
  return (
     <div className="user">
        <h4>Name: {props.name}</h4>
     </div>
  );
}

export default App;
