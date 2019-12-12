import React from 'react';
import Header from './Header.js';
import './App.css';

class App extends Component {
 
  return (

    <div>
      
  
      <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          
          
          {
            
            this.state.subscribersListToShow.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn">Delete</button>
              </span>
              </div>
            })
          }

       
  );
}
}
export default Header; 

