import React from 'react';
import Header from './Header.js';
import './ShowSubscribers.css';
import './App.css';

//class App extends Component {

//  class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       subscribersListToShow: []
//     }
//   }
class Showsubscribers extends Component {
  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId); 
  }

//return {
  render() {

    <div>
      
  
      <Header heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          
          
          {
            
            this.props.subscribersList.map(sub => {
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>

              </span>
              </div>
            })
          }

       
  );
}
}
 
export default Showsubscribers;
