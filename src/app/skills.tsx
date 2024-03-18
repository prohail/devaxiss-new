"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Web Development:",
    children:
      "Our team crafts innovative and user-friendly websites, utilizing cutting-edge technologies to ensure a seamless digital experience for your audience.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "We design and develop custom mobile apps that align with your business goals, offering intuitive interfaces and robust functionality across various platforms.",
  },
  {
    icon: SwatchIcon,
    title: "Search Engine Optimization",
    children:
      "We improve website visibility and rankings on search engines through keyword optimization and technical enhancements.",
  },
  {
    icon: HashtagIcon,
    title: "Social Media Marketing",
    children:
      "Our targeted campaigns on social platforms boost brand awareness, engagement, and conversions.",
  },
  {
    icon: EyeIcon,
    title: "Email Management",
    children:
      " We create and manage effective email campaigns, optimizing content for high engagement and ROI.",
  },
  {
    icon: DocumentTextIcon,
    title: "Pay Per Click Management",
    children:
      "Our PPC services optimize ad campaigns to generate quality leads and increase website traffic efficiently.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Our skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What we do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Our services are perfect for fast-growing tech and development
          companies who need to scale up their development capabilities while
          keeping quality, improving productivity and optimizing costs. Discover
          below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
