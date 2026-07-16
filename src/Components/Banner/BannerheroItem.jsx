import { Link } from "react-router-dom";
export default function Bannerheroitem({ item }) {
  return (
    <main className="w-full mt-18">
      {/* <!-- Banner -->// */}
      <section className="w-full bg-linear-to-t from-blue-800 to-orange-700 h-[calc(100vh-5rem)]">
        <div className="w-full px-6 xl:px-0 xl:w-7xl mx-auto flex flex-col items-center justify-center gap-6 h-full">
          <div>
            <h2 className="text-4xl font-bold">{item.title}</h2>
          </div>
          <div>
            <p className="text-lg text-center">{item.description}</p>
          </div>
          <div>
            <Link
              to={item.buttonUrl}
              className="bg-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500 cursor-pointer"
            >
              {item.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
