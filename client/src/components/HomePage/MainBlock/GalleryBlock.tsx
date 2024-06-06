import { Link } from "react-router-dom";
import mainLogo from "@/layouts/img/mainBlock/mainLogo.jpg";
import { Button } from "@/shared/ui/ui/button";

export const GalleryBlock = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="bg-[#2A254B] w-full">
          <div className="max-w-[700px] m-auto py-10 max-[500px]:max-w-[300px] max-[600px]:max-w-[400px]">
            <h3 className="text-[32px] text-white max-w-[400px]">
              The furniture brand for the future, with timeless designs
            </h3>
            <Link to="/allproduct">
              <Button className="mt-10 p-6 opacity-50" variant="secondary">
                View collection
              </Button>
            </Link>
            <p className="text-white text-lg mt-10 md:mt-[280px]">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>
        <img
          className="max-w-[520px] w-full max-[1000px]:hidden"
          src={mainLogo}
        />
      </div>
    </div>
  );
};
