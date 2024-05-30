import { Input } from "@/shared/ui/ui/input";
import { Button } from "@/shared/ui/ui/button";

export const SignUp = () => {
  return (
    <div className="bg-[#F9F9F9] h-[481px] w-full max-[600px]:bg-white">
      <div className="container flex justify-center pt-5">
        <div className="bg-white h-[364px] w-full mt-10">
          <div className="text-center mt-10 max-[600px]:text-start">
            <div className="flex flex-col gap-5 mt-10">
              <h3 className="text-4xl max-[600px]:text-[24px]">Join the club and get the benefits</h3>
              <p className="max-w-[470px] m-auto max-[600px]:m-0 max-[600px]:text-[14px]">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
              </p>
            </div>
            <div className="flex max-w-[350px] m-auto pt-16 max-[600px]:m-0 ">
              <Input className="outline-none h-[52px]"  type="email" placeholder="your@email.com" />
              <Button className="bg-[#2A254B] h-[52px] rounded-none">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
