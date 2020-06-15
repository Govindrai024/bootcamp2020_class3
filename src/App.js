import React from 'react';
import './App.css';
import Subject from './subject.js';

function App() {
  return (
    <div className="App">
    <h1>Hello Sir,</h1>
      {/* <Subject sub1Name="parent and child elements" sub2Name="React" sub3Name="React with different components  "/> */}
      <Subject sub1Name="parent and child elements"/>
      <Subject sub1Name="React"/>
      <Subject sub1Name="React with different components  "/>
      
      

    </div>
   
  );
}

export default App;
