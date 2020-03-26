import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ paginate, data, currentPage }) => {
  const [activePage, setActivePage] = useState(1)
  const pageNumbers = []
  const CARDSPERPAGE = 3
  for (let i = 1; i <= Math.ceil(data.length / CARDSPERPAGE); i++) {
    pageNumbers.push(i)
  }

  useEffect(() => {
    // forces to first page whenever is a different search
    if (currentPage === 1) {
      setActivePage(1)
    }
  }, [currentPage])

  return (
    <ul className="pagination">
      <li hidden={activePage === pageNumbers[0]}>
        <a
          onClick={() => {
            paginate(activePage - 1)
            setActivePage(activePage - 1)
          }}
          href="#number"
        >
          &lt;
        </a>
      </li>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a
            className={number === activePage ? 'active' : ''}
            onClick={() => {
              setActivePage(number)
              paginate(number)
            }}
            href="#number"
          >
            {number}
          </a>
        </li>
      ))}
      <li hidden={activePage === pageNumbers[pageNumbers.length - 1]}>
        <a
          onClick={() => {
            paginate(activePage + 1)
            setActivePage(activePage + 1)
          }}
          href="#number"
        >
          &gt;
        </a>
      </li>
    </ul>
  )
}

export default Pagination

Pagination.propTypes = {
  paginate: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
}
