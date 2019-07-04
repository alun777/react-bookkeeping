import React from 'react';
import PropTypes from 'prop-types';
import { LIST_VIEW, CHART_VIEW } from '../utility'

const generateLinkClass = (current, view) => {
  return (current === view) ? 'nav-link active' : 'nav-link'
}

const ViewTab = ({ activeTab, onTabChange }) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <a 
          className={generateLinkClass(activeTab, LIST_VIEW)} 
          href="/"
          onClick={(event) => {event.preventDefault(); onTabChange(LIST_VIEW)}}
        >
          <svg
            className="icon rounded-circle mr-2"
            aria-hidden="true"
            fontSize="25px"
            color={'#007bff'}
          >
            <use xlinkHref="#iconliebiao"></use>
          </svg>
          List View
        </a>
      </li>
      <li className="nav-item">
        <a 
          className={generateLinkClass(activeTab, CHART_VIEW)} 
          href="/"
          onClick={(event) => {event.preventDefault(); onTabChange(CHART_VIEW)}}
        >
          <svg
            className="icon rounded-circle mr-2"
            aria-hidden="true"
            fontSize="25px"
            color={'#007bff'}
          >
            <use xlinkHref="#icontubiao"></use>
          </svg>
          Chart View
        </a>
      </li>
    </ul>
  )
}

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
}

export default ViewTab;
