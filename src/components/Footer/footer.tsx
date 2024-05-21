import { FC } from "react";
import { Link } from "react-router-dom";
import {
  footerFirstListInfo,
  footerSecondListInfo,
  footerThirdListInfo,
} from "@/shared/utils/footerTitleInfo";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer: FC = () => {
  return (
    <>
      <div className="bg-indigo-800">
        <div className="container max-w-[1400px]">
          <div>
            <div className="justify-between flex  max-w-[1400px] pt-10 pb-10">
              <div className="justify-around flex-col flex gap-2 list-none">
                {footerFirstListInfo.map((item) => (
                  <li className="text-white" key={item.text}>
                    <a href={item.link}></a>
                    {item.text}
                  </li>
                ))}
              </div>
              <div className="justify-around flex-col flex gap-2 list-none">
                {footerSecondListInfo.map((item) => (
                  <li className="text-white" key={item.text}>
                    <a href={item.link}></a>
                    {item.text}
                  </li>
                ))}
              </div>
              <div className="justify-around flex-col flex gap-2 list-none">
                {footerThirdListInfo.map((item) => (
                  <li className="text-white" key={item.text}>
                    <a href={item.link}></a>
                    {item.text}
                  </li>
                ))}
              </div>

              <div className="">
                <h2 className="text-white">Join our mailing list</h2>
                <input type="text" />
                <button>FFFFFF</button>
              </div>
            </div>

            <div className="mt-10 mb-10">
              <hr className=" bg-blue-900 h-[2px] " />
            </div>

            <div className="max-w-[1400px] flex mt-10 mb-10 pb-10 items-center justify-between">
              <p>Copyright 2024 Avion LTD</p>
              <div className="flex gap-5">
                <Linkedin />
                <Facebook />
                <Instagram />
                <Twitch />
                <Twitter />
                <Youtube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
