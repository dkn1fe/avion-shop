import { Button } from "@/shared/ui/ui/button";
import historyImg from "@/layouts/img/historyBlock/historyImg.jpg";

export const HistoryBlock = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="container md:pl-[134px]">
        <div className="max-w-[514px] text-start flex flex-col gap-6 pt-16">
          <h3 className="text-2xl">
            From a studio in London to a global brand with over 400 outlets
          </h3>
          <div className="flex flex-col gap-8 text-[#505977] md:gap-24">
            <p>
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>
            <p>
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>
          <Button className="w-full px-6 mt-8 md:w-auto" variant="secondary">
            Get in touch
          </Button>
        </div>
      </div>
      <div className="flex-1 justify-end max-w-full mt-10 md:mt-0 md:max-w-[720px] md:-ml-[514px]">
        <img
          src={historyImg}
          alt="History Image"
          className="w-full h-auto object-cover md:max-w-full"
        />
      </div>
    </div>
  );
};
