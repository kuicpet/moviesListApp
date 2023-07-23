/* eslint-disable react/prop-types */
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Rating = ({ initialRating, onChange }) => {
  const [rating, setRating] = useState(initialRating)
  const handleRatingChange = (newRating) => {
    setRating(newRating)
    onChange(newRating)
  }
  return (
    <div className='flex m-2'>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`cursor-pointer ${
            rating >= star ? 'text-yellow-400' : 'text-gray-300'
          }`}
          onClick={() => handleRatingChange(star)}
        />
      ))}
    </div>
  )
}

export default Rating
