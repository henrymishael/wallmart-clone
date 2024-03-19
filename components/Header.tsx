"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";

const Header = () => {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  return (
    <header className='flex flex-col md:flex-row bg-walmart px-6 py-7 space-x-5 items-center sticky left-0 top-0 z-50  '>
      <div className='flex  items-center px-2.5 py-1   hover:bg-black/30 rounded-full transition-all ease-in-out duration-300 '>
        <Link href='/' className='mb-5 md:mb-0 '>
          <Image
            src='https://links.papareact.com/xsi'
            alt='Logo'
            width={150}
            height={150}
            className=''
          />
        </Link>
      </div>

      <form
        onSubmit={handleSubmit}
        className='flex items-center bg-white rounded-full w-full flex-1'
      >
        <input
          className='flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black'
          type='text'
          placeholder='Search Everything at walmart online and in store...'
          name='input'
        />
        <button type='submit'>
          <Search className='rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer ' />
        </button>
      </form>
      <div className='flex space-x-5 mt-5 md:mt-0 '>
        <div className='hidden md:flex items-center px-2.5 py-1  hover:bg-black/30 rounded-full transition-all ease-in-out duration-300  '>
          <Link
            href=''
            className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'
          >
            <Grid2X2 size={20} />
            <p>Departments</p>
          </Link>
        </div>
        <div className='hidden md:flex items-center px-2.5 py-1  hover:bg-black/30 rounded-full transition-all ease-in-out duration-300  '>
          <Link
            href=''
            className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'
          >
            <LayoutGrid size={20} />
            <p>Services</p>
          </Link>
        </div>
        <div className='flex  items-center px-2.5 py-1 hover:bg-black/30 rounded-full transition-all ease-in-out duration-300  '>
          <Link
            href=''
            className='flex text-white font-bold items-center space-x-2 text-sm'
          >
            <Heart size={20} />
            <div>
              <p className='text-xs font-extralight'>Reorder</p>
              <p>My Items</p>
            </div>
          </Link>
        </div>
        <div className='flex  items-center px-2.5 py-1 hover:bg-black/30 rounded-full transition-all ease-in-out duration-300  '>
          <Link
            href=''
            className='flex text-white font-bold items-center space-x-2 text-sm'
          >
            <User size={20} />
            <div>
              <p className='text-xs font-extralight'>Sign In</p>
              <p>Account</p>
            </div>
          </Link>
        </div>
        <div className='flex  items-center px-2.5 py-1 hover:bg-black/30 rounded-full transition-all ease-in-out duration-300  '>
          <Link
            href={"/basket"}
            className='flex flex-col text-white font-bold items-center space-x-2 text-sm  '
          >
            <div className='relative '>
              <ShoppingCart size={20} />
              <span className='absolute w-5 bg-yellow-500 bottom-3 left-3 text-[12px] flex items-center justify-center font-semibold font-titleFont text-white rounded-full'>
                {cart.length}
              </span>
            </div>
            <div>
              {/* <p className='text-xs font-extralight'>No Items</p> */}
              <p>{cart.length > 0 ? `${total}` : "USD 0.00"}</p>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
