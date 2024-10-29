import React from 'react';
import './PopularVideos.css'; 

const PopularVideos = () => {
  const videos = [
    {
      title: "No Knead Bread",
      url:"https://www.youtube.com/embed/9cyeXuIWKR0",
    },
    {
      title: "Best Soft Zaban Kichda",
      url:"https://www.youtube.com/embed/alP9HbEh83o" ,
    },
    {
      title: "How to Cook Samosa",
      url:"https://www.youtube.com/embed/XFOjIxe5N8A" ,
    },
  ];

  return (
    <div className="popular-videos-container">
      <h2 className="heading">
        <span className="icon">🎥</span> Popular Videos
      </h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <iframe
              width="100%"
              height="200px"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVideos;
