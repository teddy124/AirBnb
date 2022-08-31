import React from 'react'
import Button from '@mui/material/Button'
import "./SearchPage.css"

function SearchPage() {
  return (
    <div className='searchPage__info'>
    <p>62 stays · 26 august to 30 august · 2 guest</p>
    <h1>Stays nearby</h1>
    <Button variant="outlined">Cancellation Flexibility</Button>
    <Button variant="outlined">Type of place</Button>
    <Button variant="outlined">Price</Button>
    <Button variant="outlined">Rooms and beds</Button>
    <Button variant="outlined">More filters</Button>
</div>
  )
}

export default SearchPage