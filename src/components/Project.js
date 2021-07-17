import "./styles/Project.css"

function Project({
  userOne, projectDetail, time, duration, price, client, dollarSign
}) {
  return (
    <div className="bg-white rounded-lg mr-4" style={{ height: "25rem" }}>
      <div className="project__header flex-col rounded-md h-full">
        <div className="project__header__top">
          <div className="w-full flex items-start p-2 justify-between">
            <span className="flex items-center">
              <img className="mr-3" src={time} alt="Time" /> 13/07/2021
            </span>
            <div className="flex items-start">
              <img
                className="object-contain"
                src={userOne}
                alt="user one"
              />
              <img
                className="object-contain"
                src={userOne}
                alt="user one"
              />
              <img
                className="object-contain"
                src={userOne}
                alt="user one"
              />
            </div>
          </div>

          <div className="project__header__bottom p-2 bg-gray-50 opacity-60">
            <p className="flex items-center">
              <img src={client} className="mr-3" alt="" /> Author of
              publication
            </p>
            <p className="flex items-center">
              <img src={projectDetail} className="w-5 mr-3" alt="" />{" "}
              Duration of projects
            </p>
            <p className="flex items-center">
              <img src={dollarSign} className="w-5 mr-3" alt="" /> {price}
            </p>
          </div>
        </div>
        <div className="project__footer text-center py-3">
          <p className="mb-2">Lorem ipsum dolor sit amet!</p>
          <button
            className="rounded-full text-white py-2"
            style={{ width: "80%", backgroundColor: "#FF5C00" }}
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Project;
