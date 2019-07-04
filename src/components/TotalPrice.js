import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const TotalPrice = ( { income, outcome } ) => (
  <div className="row">
    <div className="col">
      <h4 className="income">Money In：$<span>{income}</span></h4>
    </div>
    <div className="col">
      <h4 className="outcome">Money Out：$<span>{outcome}</span></h4>
    </div>
  </div>
)

TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired,
}
export default TotalPrice