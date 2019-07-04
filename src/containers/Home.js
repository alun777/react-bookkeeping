import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../logo.svg';


import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, padLeft } from '../utility';
import TotalPrice from '../components/TotalPrice';
import MonthPicker from '../components/MonthPicker';
import PriceList from '../components/PriceList';
import ViewTab from '../components/ViewTab';
import CreateBtn from '../components/CreateBtn';

const categoies = {
  "1": {
    "id": 1,
    "name": "Travel",
    "type": "outcome",
    "iconName": "#iconlvyou"
  },
  "2": {
    "id": 2,
    "name": "Food",
    "type": "outcome",
    "iconName": "#iconcanyin"
  }
}

const items = [
  {
    "id": 1,
    "title": "Travel",
    "price": 500,
    "date": "01-06-2019",
    "cid": 1
  },
  {
    "id": 2,
    "title": "Dinner",
    "price": 100,
    "date": "01-07-2019",
    "cid": 2
  }
]

const newItem = {
  "id": 3,
  "title": "Lunch",
  "price": 500,
  "date": "01-07-2019",
  "cid": 2
}

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      tabView: LIST_VIEW
    }
  }

  changeView = (view) => {
    this.setState({
      tabView: view
    })
  }
  changeDate = (year, month) => {
    this.setState({
      currentDate: { year, month }
    })
  }
  modifyItem = (e, modifedItem) => {
    e.preventDefault()
    const modifiedItems = this.state.items.map(item => {
      if (item.id === modifedItem.id) {
        return { ...item, title: 'title updated' }
      } else {
        return item
      }
    })
    this.setState({
      items: modifiedItems
    })

  }
  createItem = () => {
    this.setState({
      items: [newItem, ...this.state.items]
    })
  }

  deleteItem = (e, deletedItem) => {
    e.preventDefault()
    const filteredItems = this.state.items.filter(item => item.id !== deletedItem.id)
    this.setState({
      items: filteredItems
    })
  }

  render() {
    const { currentDate, tabView } = this.state
    const itemsWithCategory = this.state.items.map(item => {
      item.category = categoies[item.cid]
      return item
    }).filter(item => {
      return item.date.includes(`${currentDate.month}-${padLeft(currentDate.year)}`)
    })

    let totalIncome = 0;
    let totalOutcome = 0;
    itemsWithCategory.forEach(item => {
      if (item.category.type === TYPE_OUTCOME) {
        totalOutcome += item.price
      } else {
        totalIncome += item.price
      }
    })

    return (
      <Fragment>
        <header className="App-header">
          <div className="row mb-5">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="row">
            <div className="col-4">
              <MonthPicker
                year={currentDate.year}
                month={currentDate.month}
                onChange={this.changeDate}
              />
            </div>
            <div className="col-8">
              <TotalPrice
                income={totalIncome}
                outcome={totalOutcome}
              />
            </div>
          </div>
        </header>
        <div className="content-area py-3 px-3">
          <ViewTab
            activeTab={tabView}
            onTabChange={this.changeView} />
          <CreateBtn onClick={this.createItem} />
          {
            tabView === LIST_VIEW &&
            <PriceList
              items={itemsWithCategory}
              onModifyItem={this.modifyItem}
              onDeleteItem={this.deleteItem}
            />
          }
          {
            tabView === CHART_VIEW &&
            <h1>This is CHART</h1>
          }
        </div>

      </Fragment>
    )
  }
}

export default Home;
