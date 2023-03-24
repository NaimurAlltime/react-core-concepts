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

export default App;
