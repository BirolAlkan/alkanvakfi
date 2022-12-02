import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="container bg-light p-3">
  <h2 className="display-6 text-danger text-center mb-4">CONTACT</h2>
  <article id="form">
    
    <div className="row g-4">
      <div className="col-md-4">
        <i className="fas fa-phone fa-2x text-danger" />
        <h4>Telephone</h4>
        <a href="tel:+905434694426">+95434694426</a>
      </div>
      <div className="col-md-4">
        <i className="fab fa-whatsapp fa-3x text-danger" />
        <h4>Whatsapp</h4>
        <a href="https://wa.me/+905434694426">+905434694426</a>
      </div>
      <div className="col-md-4">
        <i className="fas fa-envelope fa-2x text-danger" />
        <h4>email</h4>
        <a href="mailto:birolalkan93@gmail.com">birolalkan93@gmail.com</a>
      </div>
    </div>
    <form className="row g-3 mt-4">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="col-md-6">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="enter your email"
        />
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          id="subject"
          placeholder="Enter your subject"
        />
      </div>
      <div className="col-12 form-floating">
        <textarea
          type="text"
          className="form-control"
          id="comment"
          placeholder="Enter your comments"
          defaultValue={""}
        />
        <label htmlFor="comment">Comments</label>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-danger"
          style={{ width: "7rem" }}
        >
          Submit
        </button>
      </div>
    </form>
  </article>
  <article id="location" className="mt-4">
    <iframe src="https://www.google.com/maps/d/embed?mid=1_KOxE5PPw1SbB2fgWXYsgbATrYc&hl=tr&ehbc=2E312F" width="100%" height="480" allowFullScreen="true"></iframe>
      {/* width="100%"
      height={450}
      style={{ border: 0 }}
      allowFullScreen="true"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" */}
    
  </article>
</section>

    </div>
  )
}

export default Contact