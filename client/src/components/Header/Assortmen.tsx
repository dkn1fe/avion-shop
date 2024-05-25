export const Assortmen = () => {
    const assortmenList = [
      { id: 1, title: "Plant pots", link: "/plantsPots" },
      { id: 2, title: "Ceramics", link: "/ceramics" },
      { id: 3, title: "Tables", link: "/tables" },
      { id: 4, title: "Chairs", link: "/chairs" },
      { id: 6, title: "Crockery", link: "/crockery" },
      { id: 7, title: "Tableware", link: "/tableware" },
      { id: 8, title: "Cutlery", link: "/cutlery" },
    ];
  
    return (
      <div className="flex justify-center gap-10 max-[720px]:hidden">
        {assortmenList.map((item) => (
          <p className="text-[#726e8d]" key={item.id}>
            {item.title}
          </p>
        ))}
      </div>
    );
  };
  