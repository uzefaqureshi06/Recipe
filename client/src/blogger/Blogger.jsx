import React from 'react';
import './Blogger.css';

const Blogger = () => {
  return (
    <div>
      <div className="food-blogger">
        <div className="blogger">
          <h2 className='grow'>Start & grow<br /> your food blog with</h2>
          <img className='food' src="https://pinchofyum.com/wp-content/assets/images/about/fbp-logo-shadow.png" alt="" />
          <button className='blog'>BECOME A MEMBER</button>

          <div className="food-blogs">
            <h2 className='pro'>FOOD BLOGGER PRO</h2>
            <p className="grew">
              As we grew the blog into a source of income, my tech-loving husband Bjork decided to detail our journey publicly as somewhat of an “experiment.” 
              And as a result, lots of people started asking us how they could do the same thing. In 2013, Bjork and I built a community called Food Blogger Pro 
              as a place to teach people everything we’ve learned over the last 7-8 years in this industry.
            </p>
            <p className="grew">
              Okay, so can I brag about this since it’s really Bjork’s thing, not mine?
            </p>
            <p className="grew">
              You guys, Food Blogger Pro is amazing. It contains over 350 easy-to-understand videos, an active community forum, a panel of industry experts, 
              live monthly events where you can submit your blogging questions, and discounts on tools and services made specifically for food bloggers.
            </p>
            <p className="grew">
              If you’re interested in learning more or becoming a Food Blogger Pro member, 
           click You can also check out The Food Blogger Pro Podcast for quick, actionable blogging tips from some of the best in the biz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogger;
