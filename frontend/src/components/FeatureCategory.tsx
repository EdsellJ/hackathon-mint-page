import homeContent from "json/home.json";

interface Props {
  category: "students" | "teachers";
}

export default function FeatureCategory({ category }: Props) {
  const titleOrder =
    category === "students"
      ? { img: "order-1", title: "order-2" }
      : { img: "order-2", title: "order-1" };
  return (
    <div className="category my-5">
      <div className="category-title d-flex align-items-center my-3 gap-4">
        <img
          className={titleOrder.img}
          src={homeContent[category].icon}
          alt={homeContent[category].title}
          height="76px"
          width="60px"
        />
        <h3 className={`${titleOrder.title} font-lora text-xl fw-bolder`}>
          {homeContent[category].title}
        </h3>
      </div>
      <ul className="list-unstyled d-flex">
        {homeContent[category].features.map((item, index) => {
          const listIndex = index + 1;
          return (
            <li key={item.icon} className="relative hover-element mx-5">
              <span className="d-flex justify-content-center fw-bold fs-5 align-items-center text-white rounded-circle">
                {listIndex}
              </span>
              <img src={item.icon} alt={item.title} />
              <p className="font-dmsans text-black text-center my-3">
                {item.title}
              </p>
            </li>
          );
        })}
      </ul>
      <style jsx>
        {`
          li.relative span {
            background-color: #f7623f;
            height: 40px;
            width: 40px;
          }
          li.relative:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  );
}
