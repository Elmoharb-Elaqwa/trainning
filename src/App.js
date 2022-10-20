import './App.css';
import { Container } from 'react-bootstrap';
import Meeting from './components/Meeting';
import Data from './components/Data';
import Controller from './components/Controller';
import { person } from './person';
import { useState } from 'react';
function App() {
  const [personData, setPersonData] = useState(person);
  const deletePersonData = () => {
    setPersonData([]);
  };
  const putPersonData = () => {
    setPersonData(person);
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <Meeting person={personData} />
        <Data person={personData} />
        <Controller
          deletePersonData={deletePersonData}
          putPersonData={putPersonData}
        />
      </Container>
    </div>
  );
}

export default App;
