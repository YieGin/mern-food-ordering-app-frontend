"use client";
import { Soup } from "lucide-react";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Dishes, Image12 } from "@/public/assets";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-scroll";

type Props = {
  percentage: string;
  label: string;
}

const PopularDishes = () => {
  const { isAuthenticated } = useAuth0();

  // StatCard Function for reusability
  const StatCard = ({ percentage, label }: Props) => (
    <div className="flex-1 flex gap-3">
      <div className="h-20 bg-white" style={{ width: "2px" }} />
      <div className="flex flex-col gap-y-5">
        <h1 className="text-4xl font-bold text-[#fff]">{percentage}%</h1>
        <p className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6]">{label}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="container flex gap-10 h-full flex-wrap lg:flex-nowrap lg:px-20 justify-between">
        <div className="flex flex-col justify-center gap-4 lg:w-[50%]">
          <h1 className="text-2xl md:text-4xl font-bold lg:w-[90%]">
            Discover the Best Restaurants and Their Popular Dishes
          </h1>
          <p className="text-[0.8rem] md:text-[1rem] text-muted-foreground lg:w-[70%]">
            With BiteZ, you can easily order your favorite food from local
            restaurants. Simply browse, select, and checkout. It&apos;s that simple!
          </p>
          <ul className="text-[0.8rem] md:text-[1rem] text-muted-foreground flex flex-col md:flex-row gap-5">
            <li className="flex flex-col gap-2">
              <Soup className="text-orange-500" size={20} />
              <h2 className="text-2xl md:text-3xl font-bold text-[#222]">
                Featured Restaurants
              </h2>
              Browse through our handpicked collection of restaurants and their
              signature dishes.
            </li>
            <li className="flex flex-col gap-2">
              <Soup className="text-orange-500" size={20} />
              <h2 className="text-2xl md:text-3xl font-bold text-[#222]">
                Popular Dishes
              </h2>
              Indulge in the most loved dishes from our top-rated restaurants.
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <AspectRatio ratio={16 / 10}>
            <img
              src="/assets/Dish.jpg"
              className="object-cover h-full w-full rounded-md"
              alt="Delicious food options"
            />
          </AspectRatio>
        </div>
      </div>

      <Separator className="my-20" />
      <div className="w-full h-[700px] lg:max-h-[500px] flex">
        <Image
          className="object-cover h-[700px] lg:max-h-[500px] w-full absolute brightness-50"
          src={Image12}
          alt="Hero Image"
          width={2000}
          height={2000}
        />
        <div className="flex relative p-10 md:p-20 w-full flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-y-5">
            <p className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6]">
              Delicious
            </p>
            <h1 className="text-3xl font-bold text-[#fff]">
              Discover the Best Food in Town
            </h1>
            <p className="text-[0.8rem] md:text-[1rem] text-[#e6e6e6] md:w-1/2">
              At BiteZ, we&apos;ve partnered with the finest restaurants to bring you
              a wide variety of delicious dishes. Join our community of happy
              customers and start ordering your favorite food today.
            </p>
            <div className="flex gap-5">
              <Button>Learn More</Button>
              {isAuthenticated ? (
                <Link smooth={true} duration={500} to="order">
                  <Button>Order</Button>
                </Link>
              ) : (
                <Button>Sign in</Button>
              )}
            </div>
          </div>
          <div className="space-y-10 w-full">
            <div className="flex gap-3 w-full">
              <StatCard percentage="95" label="Happy Customers" />
              <StatCard percentage="80" label="Fast Delivery Times" />
            </div>
            <div className="flex gap-3 w-full">
              <StatCard percentage="75" label="Restaurants on Board" />
              <StatCard percentage="90" label="Dishes Delivered" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularDishes;
