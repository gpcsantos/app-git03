import { Link } from "react-router-dom";

export default function Quemsomositem({ item }) {
  return (
    <div className="w-full xl:w-7xl mx-auto flex flex-col xl:flex-row gap-10">
      <div className="w-full xl:w-1/2">
        <img
          src={item.image}
          className="w-full h-100 xl:h-full object-cover rounded-lg shadow-lg"
          alt={item.title}
        />
      </div>
      <div className="w-full xl:w-1/2 flex flex-col gap-4">
        <div>
          <h2 className="text-3xl text-center xl:text-left font-bold mb-2">
            {item.title}
          </h2>
        </div>
        <div className="text-justify xl:text-left">
          {[1, 2, 3].map((_, index) => (
            <p key={index} className="mb-2">
              {item.description}
            </p>
          ))}
        </div>
        <div>
          <div className="flex w-full justify-center xl:justify-start">
            <Link
              to={item.buttonLink}
              className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 text-white"
            >
              {item.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
