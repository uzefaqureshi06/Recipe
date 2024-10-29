import React from 'react'
import './AboutMe.css'
const AboutMe = () => {
  return (
    <div>
      <div class="about-container">
    <div class="about-image">
        <img src="https://pinchofyum.com/wp-content/assets/images/about/lindsay-hero.jpg" alt="About me image"/>
    </div>
    <div class="about-content">
        <h3 className='consul'> <span>Pinch of Yum</span> &gt; About Me</h3>
        <br/>
        <h1 className='abou'>About Me</h1>
        <h2 className='name'>Hi, My Name is <span class="signatu">Uzefa!</span></h2>
        <p className='buid'>Building My Pinch of Yum-Inspired Website: A Full-Stack Journey</p>
        <p className='complete'>After completing 12th grade, I joined Sangameshwar Academy College to study engineering. My curiosity for how websites work led me to learn HTML, CSS, JavaScript, and advanced tools like React and Node.js, which paved the way for my transition into full-stack development.
I've worked on various projects, including a GM website and portfolios.<br/> A highlight was finishing Hacktoberfest in just 7 days, earning badges like the Shark badge. My greatest achievement, however, is building a full-stack website inspired by the Pinch of Yum recipe blog, <br/>A project that depened my passion for web development.
Moving forward,<br/> my goal is to keep learning and growing as a full-stack developer.
</p>
    </div>
</div>

    </div>
  )
}

export default AboutMe
