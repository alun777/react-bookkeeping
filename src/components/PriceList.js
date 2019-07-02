import React from 'react';

const PriceList = ({ items, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        items.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={item.id}
            >
              <span className="col-1 badge badge-primary">
                <svg 
                  className="icon rounded-circle" 
                  aria-hidden="true"
                  fontSize="30px"
                  style={{ backgroundColor:'#007bff', padding: '2px', color:'#fff', boxSizing: 'border-box'}}
                >
                  <use xlinkHref="#iconlvyou"></use>
                </svg>
              </span>
              <span className="col-5">
                {item.title}
              </span>
              <span className='col-2 font-weight-bold'>
                {(item.category.type === 'income') ? '+' : '-'}
                ${item.price}
              </span>
              <span className="col-2">
                {item.date}
              </span>
              <a
                className="col-1"
                onClick={() => { onModifyItem(item) }}
              >
                <svg 
                  className="icon rounded-circle" 
                  aria-hidden="true"
                  fontSize="30px"
                  style={{ backgroundColor:'#28a745', padding: '2px 4px 4px', color:'#fff', boxSizing: 'border-box'}}
                >
                  <use xlinkHref="#iconbianji"></use>
                </svg>
              </ a>
              <a
                className="col-1"
                onClick={() => { onDeleteItem(item) }}
              >
                <svg 
                  className="icon rounded-circle" 
                  aria-hidden="true"
                  fontSize="30px"
                  style={{ backgroundColor:'#dc3545', padding:'4px', color:'#fff', boxSizing: 'border-box'}}
                >
                  <use xlinkHref="#iconshanchu"></use>
                </svg>
              </a>
            </li>)
    }
  )
}
    </ul>
  )
}

export default PriceList;
