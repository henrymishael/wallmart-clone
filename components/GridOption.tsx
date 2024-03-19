import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  className?: string;
  image?: string;
};

const GridOption = ({ title, className, image }: Props) => {
  return (
    <Link
      href={{
        pathname: "/search",
        query: { q: title },
      }}
      className={cn(
        "grid-option relative hover:scale-105 duration-300 ease-in-out transition-all overflow-hidden group",
        className
      )}
    >
      {/* <div className='bg-emerald-600  w-[100%] h-[100%] z-30 absolute -top-20 opacity-0 group-hover:-top-0 group-hover:opacity-100 duration-300 ease-in-out transition-all '> */}
      <h2 className='text-xl font-extrabold '>{title}</h2>
      {/* </div> */}
      {image && (
        <Image
          src={image}
          alt={title}
          layout='fill'
          className='object-cover  opacity-20 rounded-md   '
        />
      )}
    </Link>
  );
};

export default GridOption;
