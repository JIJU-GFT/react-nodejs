import React from 'react';
import Card from './components/Card';

// import ApiService from './services/ApiService';

// function handleClick() {
//   let dummyPayload = {
//     field1: 'Dummy',
//     field2: 'content',
//   };
//   ApiService.handlePost(dummyPayload);
// }

const options = [
  { name: 'Option 1' },
  { name: 'Option 2' },
  { name: 'Option 3' },
  { name: 'Option 4' },
];

function App() {
  return (
    <div className="App">
      <h1 className="title">Node JS</h1>
      {options.map((item, key) => {
        console.log('Loop', key);
        (<Card id={key}>{item.name}</Card>);
      })}
    </div>
  );
}

export default App;
