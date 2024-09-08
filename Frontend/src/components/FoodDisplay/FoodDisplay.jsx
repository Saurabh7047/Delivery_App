import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/storeContext'
import FoodItems from '../FoodItems/FoodItems'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
      <div>
          <div className="food-display" id='food-display'>
              <h2>Top Dishes near you</h2>
              <div className="food-display-list">
                  {
                      food_list.map((item, index) => {
                          if (category === "All" || category === item.category) {
                              return <FoodItems key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                        }
                        
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default FoodDisplay