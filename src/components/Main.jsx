import React from 'react'

const Main = () => {
    return (
        <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/izmir.jpg" className="d-block w-100" alt="img1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Popular Education</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                reiciendis.
              </p>
              <div>
                <button className="btn btn-danger">Start Now</button>
                <button className="btn btn-warning">Register</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/istanbul.jpg" className="d-block w-100" alt="img2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Sucessful Future</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <div>
                <button className="btn btn-danger">Start Now</button>
                <button className="btn btn-warning">Register</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/ankara.jpg" className="d-block w-100" alt="img3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Dream Job</h5>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div>
                <button className="btn btn-danger">Start Now</button>
                <button className="btn btn-warning">Register</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
           

    )
}

export default Main