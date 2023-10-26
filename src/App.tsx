import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from "./components/Greet";
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Anu',
    last: 's'
  }
  const personList =[ {
    
    first: 'nikhil',
    last: 'v'
  },
  {
    
    first: 'nandhu',
    last: 'm'
  },
  {
    
    first: 'manu',
    last: 'p'
  }
]

  return (
    <div className="App">
      {/* <Greet name ='Anandu' messageCount={10} isLoggedIn= {false}/>
      <Person name={personName}/>  
      <PersonList names= {personList}/>
      <Status status = 'success'/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>  Oscar goes to </Heading>
      </Oscar>
      <Greet name ='Anandu'  isLoggedIn= {true}/>
      <Button handleClick={(event, id)=>{
        console.log("Button clicked", event, id);
      }} />
      <Input value='' handleChange={(event)=>{console.log("jjjjj",event);
      }}/>
      <Container styles= {{ border:'1px solid black', padding:'1rem' , backgroundColor:'red'}}/>
       */}
       
    </div>
  );
}

export default App;
