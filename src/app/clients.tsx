"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = ["bazar", "beemall", "saudagar", "sfm1"];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          Our Clients
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-14">
          {CLIENTS.map((logo, key) => (
            <Image
              key={key}
              alt={logo}
              width={768}
              height={768}
              className="w-40"
              src={`/image/clients/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
