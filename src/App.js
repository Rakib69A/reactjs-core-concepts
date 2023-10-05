import logo from './logo.svg';
import './App.css';

const number = 1234;
const singers =[
              {name:'Dr. Mahfuz', job:'singer'},
              {name:'Dr. Havana', job:'singer'},
              {name:'Dr. Emma', job:'singer'},
              {name:'Dr. jackson', job:'singer'}
] 
const singerStyle = {
  color: 'purple',
  backgroundColor: 'gray'
}
function App() {
  const nayoks = ['Rakib Hasan', 'Imam Hasan', 'Mahadi Hasan', 'Istiyak Ahmed'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika = "Anonna"></Person>
      <Person name={nayoks[1]} nayika = "Anu"></Person>
      <Person name={nayoks[3]}></Person> */}
      <h4>This is the Friend function</h4>
      <Friend name={nayoks[2]}></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
  </div>
  ) 
}

function Friend(props){
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <p>Job: Programming</p>
    </div>
  )
}
export default App;
