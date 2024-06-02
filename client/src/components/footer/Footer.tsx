import { FC } from "react";
import {
  footerFirstListInfo,
  footerSecondListInfo,
  footerThirdListInfo,
} from "@/shared/utils/footerList";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import { Input } from "@/shared/ui/ui/input";
import { Button } from "@/shared/ui/ui/button";

const Footer: FC = () => {
  return (
    <div className="bg-[#2A254B]">
      <div className="container">
        <div>
          <div className="justify-between flex py-10 max-[1000px]:flex-wrap gap-20">
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
            <div>
              <h2 className="text-white">Join our mailing list</h2>
              <div className="flex mt-5">
                <Input
                  className="bg-[#FFFFFF] opacity-15 pl-5 h-[56px]  rounded-none w-[480px] max-[600px]:w-[224px]"
                  placeholder="your@email.com"
                  type="text"
                />
                <Button
                  className="bg-white h-[56px] rounded-none"
                  variant="secondary"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          <div className="my-10">
            <hr className="bg-blue-900 h-[2px]" />
          </div>
          <div className="flex  pb-10 items-center justify-between">
            <p className="text-white">Copyright 2024 Avion LTD</p>
            <div className="hidden text-center sm:flex gap-5">
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
  );
};

export default Footer;
