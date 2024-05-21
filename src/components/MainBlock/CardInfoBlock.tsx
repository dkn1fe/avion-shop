import { Car, CircleCheck, CreditCard, Sprout } from "lucide-react";

export const CardInfoBlock = () => {
  const cardInfo = [
    {
      id: 1,
      title: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard",
      img: <Car size={20} />,
    },
    {
      id: 2,
      title: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftmanship",
      img: <CircleCheck size={20} />,
    },
    {
      id: 3,
      title: "Unbeatable prices",
      text: "For our materials and quality you won’t find better prices anywhere",
      img: <CreditCard size={20} />,
    },
    {
      id: 4,
      title: "Recycled packaging",
      text: "We use 100% recycled packaging to ensure our footprint is manageable",
      img: <Sprout size={20} />,
    },
  ];
  return (
    <div className="container">
      <h3 className="text-center mt-20 text-2xl max-[500px]:text-start">
        What makes our brand different
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-8 gap-5">
        {cardInfo.map((item) => (
          <div key={item.id} className="max-w-[270px] flex flex-col gap-2 mt-6">
            {item.img}
            <h3 className="text-[20px]">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
