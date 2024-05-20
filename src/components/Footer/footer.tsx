import { FC } from "react";
import { Link } from "react-router-dom";
import {
  footerFirstListInfo,
  footerSecondListInfo,
} from "@/shared/utils/footerTitleInfo";

const Footer: FC = () => {
  return (
    <>
      <div className="bg-indigo-800">
        <div className="container">
          <div className="justify-between flex">
            <div>
              <div className="justify-around flex-col flex gap-2.5">
                {footerFirstListInfo.map((item) => (
                  <li className="text-white" key={item.text}>
                    <a href={item.link}></a>
                    {item.text}
                  </li>
                ))}
              </div>
              <div>
                {footerSecondListInfo.map((item) => (
                  <li className="text-white" key={item.text}>
                    <a href={item.link}></a>
                    {item.text}
                  </li>
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
