import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id="contact" className="container bg-light p-3">
  <h2 className="display-6 text-danger">CONTACT</h2>
  <article id="form">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
      sit nulla numquam sunt esse aliquam? Quae, delectus! Saepe, explicabo
      dolor!
    </p>
    <div className="row g-4">
      <div className="col-md-4">
        <i className="fas fa-phone fa-2x text-danger" />
        <h4>Telephone</h4>
        <a href="tel:+90234556565">+90234556565</a>
      </div>
      <div className="col-md-4">
        <i className="fab fa-whatsapp fa-3x text-danger" />
        <h4>Whatsapp</h4>
        <a href="https://wa.me/+90234556565">+90234556565</a>
      </div>
      <div className="col-md-4">
        <i className="fas fa-envelope fa-2x text-danger" />
        <h4>email</h4>
        <a href="mailto:info@clarusway.com">info@clarusway</a>
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
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.5521395148!2d28.871754336967353!3d41.005236293762124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1663183693965!5m2!1sen!2str"
      width="100%"
      height={450}
      style={{ border: 0 }}
      allowFullScreen="true"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </article>
</section>

    </div>
  )
}

export default Contact