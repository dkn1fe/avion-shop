import { Link } from "react-router-dom";

export const Assortmen = () => {
  const assortmenList = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "All Products", link: "/allproduct" },
    { id: 3, title: "Shopping Basket", link: "/baskets" },
  ];

  return (
    <div className="flex justify-center gap-10 max-[720px]:hidden">
      {assortmenList.map((item) => (
        <Link to={item.link}>
          <p className="text-[#615e77]" key={item.id}>
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
};
