import React from 'react'
import PropTypes from 'prop-types'

const SearchBar = ({ onChange }) => (
  <header>
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by App"
    />
  </header>
)

export default SearchBar

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
}
