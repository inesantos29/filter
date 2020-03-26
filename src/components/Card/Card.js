import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ name, description, categories, subscriptions }) => {
  return (
    <ul>
      <li>
        <div className="app-item">
          <div className="box-info">
            <div className="box-info--content">
              <div className="description">
                <h1>{name}</h1>
                <p>{description}</p>
              </div>
              <div className="tags">
                {categories.map((category, index) => (
                  <span key={index}>
                    <span>{category}</span>
                    {index + 1 !== categories.length && <span>{' / '}</span>}
                  </span>
                ))}
              </div>
            </div>
            <div className="box-info--footer">
              <ul>
                {subscriptions.map((item, index) => (
                  <li key={index}>
                    <span>{item.name}</span>
                    {item.price === 0 ? (
                      <h3>
                        Free
                        <sup />
                      </h3>
                    ) : (
                      <h3>
                        {item.price}
                        <sup>€</sup>
                      </h3>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Card

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  subscriptions: PropTypes.array.isRequired,
}
