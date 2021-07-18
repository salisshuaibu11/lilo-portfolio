
function Subscribe() {
  return (
    <section className="subscribe px-14 mt-10">
      <div className="xl:px-32 px-10 rounded-lg py-5 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 text-center">
        <div style={{width: '70%'}} className="mx-auto">
          <h4 className="xl:text-3xl text-lg" style={{color: '#0A093C'}}>Subscribe to the news-letter to recieve latest informtion about our services</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices aliquam sit vestibulum, duis nunc, velit. Bibendum egestas eleifend lacus proin ultrices ut tristique. Vitae phasellus mauris lectus pharetra dolor, hendrerit dictum</p>
        </div>
        <form className="w-full mt-10 relative">
          <input className="w-full outline-none rounded-full py-3 px-5" placeholder="input your email address for best offers" />
          <button style={{right: '0.1rem', top: '0.2rem'}} className="text-white bg-red-400 px-10 py-2 absolute rounded-full">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe;
