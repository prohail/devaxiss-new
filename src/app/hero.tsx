"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import profilePic from "../../public/hero_image_1.svg";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl font-thin "
            placeholder={undefined}
          >
            We build great web <br /> and mobile apps
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder={undefined}
          >
            Delivering exceptional web and mobile app solutions tailored to meet
            the unique needs of clients across various industries.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
              placeholder={undefined}
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem]"
                placeholder={undefined}
              >
                require offer
              </Button>
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal !text-gray-500"
            placeholder={undefined}
          >
            Read our{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={profilePic}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
