import React from 'react'
import PropTypes from 'prop-types'

const CreateBtn = ({ onClick }) => (
  <button
    className="btn btn-primary btn-block d-flex justify-content-center align-items-center"
    onClick={(e) => { onClick() }}
  >

    <svg
      className="icon rounded-circle"
      aria-hidden="true"
      fontSize="20px"
    >
      <use xlinkHref="#iconxinzeng"></use>
    </svg>
    &nbsp; Create a new activity
  </button>
)

CreateBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
}
export default CreateBtn;
