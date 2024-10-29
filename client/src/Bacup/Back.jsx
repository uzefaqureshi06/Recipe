import React from 'react'
import './Back.css'
const Back = () => {
  return (
    <div>
    <div class="ebook-section">
    <div class="left">
        <img src="https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021-450x338.png"/>
    </div>
    <div class="right">
        <h3 class="ebook-title">get it now</h3>
        <h1>PINCH OF YUM COOKBOOK</h1>
        <p className='ebook'>The eBook includes our most popular 25 recipes in a beautiful, easy to download format.Enter your email and we'll send it right over!</p>
        <div class="form">
            <input type="text" placeholder="First Name" class="input"/>
            <input type="email" placeholder="Email" class="input"/>
            <button class="submit-btn">GO</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Back


