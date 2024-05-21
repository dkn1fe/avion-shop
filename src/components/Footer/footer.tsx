import { FC } from "react";
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
            <div className="justify-between flex  max-w-[1400px] pt-10 pb-10 max-[500px]: flex-wrap gap-20">
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
                <button>FFFFF</button>
              </div>
            </div>

            <div className="mt-10 mb-10">
              <hr className=" bg-blue-900 h-[2px] " />
            </div>

            <div className="max-w-[1400px] flex mt-10 mb-10 pb-10 items-center justify-between">
              <p className="text-white">Copyright 2024 Avion LTD</p>
              <div className="hidden text-center sm:flex gap-5 ">
                <Linkedin className="text-white" />
                <Facebook className="text-white" />
                <Instagram className="text-white" />
                <Twitch className="text-white" />
                <Twitter className="text-white" />
                <Youtube className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
