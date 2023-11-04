import Image from "next/image";
import React from "react";
import Button from "./button";
import { slugify } from "@/utils/slugify";

type Props = {
  alt: string;
  description: string;
  btnText: string;
  className?: string;
  src: string;
  title: string;
};

export default function SectionCard({
  alt,
  btnText,
  description,
  className,
  src,
  title,
}: Props) {
  const slug = slugify(title);

  return (
    <div
      className={`flex flex-col bg-pale-orange rounded-xl shadow-normal hover:shadow-raised transition-[box-shadow] duration-500 ease-in-out overflow-hidden w-[32%] md:w-full ${className}`}
    >
      <div className={`relative h-[200px] w-full`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-[24px] flex flex-col items-center gap-y-[24px] text-center">
        <h2 className="text-[38px] font-semibold leading-[100%]">{title}</h2>
        <p className="text-xl">{description}</p>
        <Button
          className="w-[55%]"
          href={{
            pathname: `/${slug}/curriculum`,
            query: {
              title,
              description,
            },
          }}
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}
