import React from 'react';
import './Pancake.css';

const Pancake = () => {
  return (
    <div className='bhisnoi'>
      <div className="breadcru">
        <div className="bread">
          <a href="#">PINCH OF YUM</a>
          <svg viewBox="0 0 24 24">
            <path d="M10 6l6 6-6 6" />
          </svg>
          <a href="#">DINNERS</a>
          <svg viewBox="0 0 24 24">
            <path d="M10 6l6 6-6 6" />
          </svg>
          <span>Tofu and Brown Rice Lettuce Wraps with Peanut Sauce</span>
        </div>
      </div>

      <div className="scallion-section">
        <section className="sections">
          <div className="scallion">
            <div className="scallo">
              <h1 className="eggs">Tofu and Brown Rice Lettuce Wraps<br/> with Peanut Sauce</h1>
              <div className="rating">⭐⭐⭐⭐⭐ 2 REVIEWS / 5 AVERAGE</div>
              <p className="frozen">
              These lettuce wraps are ridiculously good! Crunchy, fresh, and packed with tofu,<br/> brown rice, crispy onions, plus a drizzle of peanut sauce and spicy mayo. Delicious!
              </p>
            </div>
            <button className="jump">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#592376">
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/>
              </svg> 
              JUMP TO RECIPE
            </button>

            <div className="froze">
              <img className="bottom-image" src="https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Lettuce-Wraps-4.jpg" alt="Additional Pancake Image" />
            </div>

            <div class="container swiper">
    <div class="slider-wrapper">
      <div class="card-list swiper-wrapper">
        <div class="card-item swiper-slide">
          <img src="https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-lindsay.jpg" alt="User Image" class="user-image"/>
          <h2 class="user-name">HI! I'M LINDSAY</h2>
          <h2 class="user-nam">nice to meet you</h2>
          <p class="user-profession">I'm a former 4th grade teacher, now full time blogger. My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate.</p>
        </div>
        </div>
        </div>
        </div>

          </div>
        </section>
        <div className="post-content">
    <h2 className='comment'>FEATURED COMMENT</h2>
    <p className='topped'>
        "Easiest dinner ever! Topped ours with peanuts and Trader Joe’s crispy jalapenos. 
        It was on the table in 15 minutes with little effort, and we loved it. Will make again!"
    </p>
   
    <div className="author-info">
        <span className="author-name">Sarah</span>
        <div className="comment-count">
            <span>87 more comments</span>
        </div>
    </div>
    <div className="divider"></div>
    <p className='top'>This is a fan favorite recipe that’s part of our Fall 2022 SOS Series! <a href="#">View the full series.</a></p>
    <div className="divider"></div>

    <p className="much">
    How much do I love a quick pan-fried crumbled tofu and brown rice filling...
    There’s just something about these flavors and textures that makes a person feel good in their heart. It’s light but it’s filling, it’s savory but a little sweet and spicy, it has a complexity of texture with a delicate, fresh crunch and an almost-meaty-like filling, and it comes together so ridiculously fast – I mean, let’s just go ahead and accept right now that this is a recipe that cannot be made just once.
    </p>
    <p className="much">There’s just something about these flavors and textures that makes a person feel good in their heart. It’s light but it’s filling, it’s savory but a little sweet and spicy, it has a complexity of texture with a delicate, fresh crunch and an almost-meaty-like filling, and it comes together so ridiculously fast – I mean, let’s just go ahead and accept right now that this is a recipe that cannot be made just once.</p>
   
    <p className='much'>There’s just something about these flavors and textures...</p>
    <p className='highlight'>This recipe has absolutely been our most-made meal of the summer.</p>
<div className="divider"></div>
    <div className="post-links">
  <h2>IN THIS POST: EVERYTHING YOU NEED FOR THESE LETTUCE WRAPS</h2>
  <ul>
    <li><a href="#">Our Short and Sweet Ingredient List</a></li>
    <li><a href="#">What I Love About These Lettuce Wraps</a></li>
    <li><a href="#">Frequently Asked Questions About This Recipe</a></li>
    <li><a href="#">VIDEO to Make Lettuce Wraps</a></li>
    <div className="divider"></div>
  </ul>
</div>


    <div className="tofu">
    
      <img src="https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Lettuce-wraps.jpg" alt="" />
    </div>
 
    <div className="social-follow">
            <h3 className="follow-heading">FOLLOW US</h3>
            <div className="social-icons">
            <a href="#"><i className='bx bxl-instagram' ></i></a>
      <a href="#"><i className='bx bxl-pinterest-alt' ></i></a>
      <a href="#"><i className='bx bxl-facebook'></i></a>
      <a href="#"><i className='bx bxl-twitter' ></i></a>  
      <a href="#"><i class='bx bxl-tiktok'></i></a>  


            </div>
            <p className="signup-heading"><span>signup</span> For Email updates</p>
            <p className="subtext">Get a Free eCookbook with our top 25 recipes.</p>
            <form className="signup-form">
                <input type="text" placeholder="First Name" className="input-field" />
                <input type="email" placeholder="Email" className="input-field" />
                <button type="submit" className="submit-btn">GO</button>
            </form>
        </div>
    
</div>


      </div>
    </div>
  );
};

export default Pancake;
