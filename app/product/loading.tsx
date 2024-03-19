import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  return (
    <div className='p-10 w-full flex flex-col lg:flex-row items-center lg:items-start  space-x-4 mx-10 space-y-4 lg:space-y-8 justify-between'>
      <div className='flex space-x-4'>
        <div className='hidden lg:inline space-y-4'>
          <Skeleton className='w-[100px] h-[100px] rounded-md' />
          <Skeleton className='w-[100px] h-[100px] rounded-md' />
          <Skeleton className='w-[100px] h-[100px] rounded-md' />
          <Skeleton className='w-[100px] h-[100px] rounded-md' />
        </div>

        <Skeleton className='inline lg:hidden w-[200px] h-[200px] rounded-md' />
        <Skeleton className='hidden lg:inline lg:w-[400px]  lg:h-[300px] rounded-md' />
      </div>
      <div className='w-[400px] h-[520px] sm:h-[780px] rounded-md space-y-2 border p-2 animate-pulse'>
        <Skeleton className='w-[380px] h-[40px] sm:w-[500px] rounded-md' />
        <Skeleton className='w-[380px] h-[40px] sm:w-[500px] rounded-md' />
        <Skeleton className='w-[380px] h-[400px] sm:w-[500px]  sm:h-[650px] rounded-md' />
      </div>
    </div>
  );
}

export default Loading;
