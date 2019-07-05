import React, { Component } from 'react'
import PropTypes from 'prop-types';

class CategorySelect extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedCategoryId: this.props.selectedCategory && this.props.selectedCategory.id
    }
  }

  selectedCategory = (event, category)=>{
    event.preventDefault()
    this.setState({
      selectedCategoryId: category.id
    })
    this.props.onSelectCategory(category)
  }

  render() {
    const { categories } = this.props
    const { selectedCategoryId } =this.state
    return (
      <div className="category-select-component">
        <div className="row">
          {
            categories.map((category, index) => {
              const activeClassName = (selectedCategoryId === category.id) ?
                'category-item col-3 active' : 'category-item col-3'
              return (
                <div 
                  className={activeClassName} 
                  key={index}
                  onClick={(event)=>{this.selectedCategory(event, category)}}
                >
                  <svg
                    className="icon rounded-circle"
                    aria-hidden="true"
                    fontSize="50px"
                  >
                    <use xlinkHref={category.iconName}></use>
                  </svg>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default CategorySelect;
