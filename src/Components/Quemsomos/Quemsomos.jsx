import QuemsomosItem from "./QuemsomosItem.jsx";

export default function Quemsomos() {
  const item = {
    title: "Quem somos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci doloribus perferendis numquam aut quaerat unde iste illum officia eum enim voluptatum accusamus, veniam consequuntur blanditiis laudantium saepe, odio distinctio labore.",
    image: "https://picsum.photos/1920/1080",
    buttonText: "'Fale conosco'",
    buttonLink: "/contato",
  };

  return (
    <section className="w-full py-16">
      <QuemsomosItem item={item} />
    </section>
  );
}
