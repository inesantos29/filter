import React, { useState, useEffect } from 'react'
import data from '../../utils/data'
import { Card } from '../Card'
import { NavCategory } from '../NavCategory'
import { SearchBar } from '../SearchBar'
import { Pagination } from '../Pagination'

const CardsEngine = () => {
  const [filteredData, setFilteredData] = useState(data)
  const [currentPage, setCurrentPage] = useState(1)
  const [indexOfFirstCard, setIndexOfFirstCard] = useState(0)
  const [indexOfLastCard, setIndexOfLastCard] = useState(2)
  const [cardsPerPage] = useState(3)

  const handleSearch = (search) => {
    const normalizedSearch = search.toLowerCase()
    if (normalizedSearch.length === 0) {
      updateSearchPagination(data)
      return
    }

    const filteredAfterSearch = data.filter(
      (item) =>
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch)
    )

    // Sets the current page to the first one after each search, allowing to reset the pagination
    setCurrentPage(1)
    updateSearchPagination(filteredAfterSearch)
  }

  useEffect(() => {
    updateSearchPagination(filteredData)
  })

  const updateSearchPagination = (dataToFilter) => {
    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    setIndexOfFirstCard(indexOfFirstCard)
    setIndexOfLastCard(indexOfLastCard)
    setFilteredData(dataToFilter)
  }
  // Change page
  const paginate = (pageNumber) => {
    // updates the indexes
    const indexOfLastCard = pageNumber * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    setIndexOfFirstCard(indexOfFirstCard)
    setIndexOfLastCard(indexOfLastCard)
    setCurrentPage(pageNumber)
  }

  return (
    <div className="flex-container">
      <NavCategory />

      <section className="apps-list">
        <SearchBar onChange={handleSearch} />
        {filteredData.slice(indexOfFirstCard, indexOfLastCard).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            categories={item.categories}
            subscriptions={item.subscriptions}
          />
        ))}

        <Pagination
          paginate={paginate}
          data={filteredData}
          currentPage={currentPage}
        />
      </section>
    </div>
  )
}

export default CardsEngine
