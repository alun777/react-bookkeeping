import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceList from './components/PriceList';

const items = [
  {
    "id": 1,
    "title": "travel",
    "price": 200,
    "date": "01-07-2019",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "outcome"
    }
  },
  {
    "id": 2,
    "title": "travel",
    "price": 300,
    "date": "01-07-2019",
    "category": {
      "id": 1,
      "name": "travel",
      "type": "outcome"
    }
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <PriceList 
          items={items}
        >
        </PriceList>

      </div>
    )
  }
}

export default App;
