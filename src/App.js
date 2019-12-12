import React from 'react';
import Header from './Header.js';
import './App.css';

function App() {
  let subscribers = [
    {
      id: 1,
      name: "Shilpa Bhat",
      phone: "8888888888"
    },
    {
      id: 2,
      name: "Srishti Gupta",
      phone: "9999999999"
    }
  ];
  return (

    <div>
      <Header />
  

          
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          
          
          {
            subscribers.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
              </div>
            })
          }

       
  );
}


