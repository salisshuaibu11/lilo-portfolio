import contactImage from "../assets/images/contact.png";

function Contact() {
  return (
    <section className="contact w-screen relative xl:px-14 px-10 mt-10">
      <form className="w-full px-14 py-3 bg-gray-300">
        <h2 className="mb-5">Contact form</h2>
        <div className="xl:w-4/5 w-full mb-5">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 text-gray-600 rounded-md outline-none md:px-8 focus:shadow-xl" placeholder="Full Name"/>
        </div>
        <div className="xl:w-4/5 w-full mb-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 text-gray-600 rounded-md outline-none md:px-8 focus:shadow-xl" placeholder="Full Name"/>
        </div>
        <div className="xl:w-4/5 w-full mb-5">
            <label htmlFor="message">Message</label>
            <textarea
              rows="7"
              id="message"
              name="message"
              className="w-full px-4 py-2 text-gray-600 rounded-md outline-none md:px-8 focus:shadow-xl">
              </textarea>
        </div>
        <div className="xl:w-4/5 w-full mb-5">
            <button style={{width: "222px"}} type="button" className="py-2 bg-white text-center rounded-full">Envoyez</button>
        </div>
      </form>
      {/*<div className="absolute" style={{top: '3rem', left: "63rem"}}>
        <img className="object-contain" style={{width: '80%'}} src={contactImage} alt="a lady smiling" />
      </div>*/}
    </section>
  )
}

export default Contact;
