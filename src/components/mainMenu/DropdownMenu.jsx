"use client";

import * as React from "react";
import { Link } from "react-router";
import CarouselPic from "./CarouselPic";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function DropdownMenu() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="text-lg">Shop</NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white rounded-xl shadow-none border-none w-[572px] h-[348px]">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 ">
              <li className="">
                <NavigationMenuLink className="border-none">
                  
                    <div className="w-full h-[300px] bg-gray-200 border-none">
                    <CarouselPic/>
                    </div>
                  
                </NavigationMenuLink>
              </li>
              <div className="grid grid-cols-2 gap-8">
              <ul className="border-none text-lg">
                <li className="text-gray-400">
                  <Link to="#">Collection</Link>
                </li>
                <li>
                  <Link to="#">Staff Pick</Link>
                </li>
                <li>
                  <Link to="#">Artist</Link>
                </li>
                <li>
                  <Link to="#">Trendy</Link>
                </li>
              </ul>
              <ul className="border-none text-lg">
                <li className="text-gray-400">
                  <Link to="#">Product</Link>
                </li>
                <li>
                  <Link to="#">Shirt</Link>
                </li>
                <li>
                  <Link to="#">Mug</Link>
                </li>
                <li>
                  <Link to="#">Bag</Link>
                </li>
              </ul>
              </div>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="#" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg">
              How to Work
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="#" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg">
              Express yourself
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DropdownMenu;
