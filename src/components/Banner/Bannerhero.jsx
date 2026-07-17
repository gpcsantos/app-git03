import Banneritem from "./BannerheroItem.jsx";

export default function Bannerhero() {
  const item = {
    title: "Bem vindo ao meu site",
    description: "Lorem ipsum dolor sit amet",
    buttonText: "Saiba Mais",
    buttonUrl: "/quem-somos",
  };

  return (
    <section className="w-full h-200 bg-blue-700 bg-cover flex flex-col justify-center items-center pb-10">
      <Banneritem item={item} />
    </section>
  );
}
