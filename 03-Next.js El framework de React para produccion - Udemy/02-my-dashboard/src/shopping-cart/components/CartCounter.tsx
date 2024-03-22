"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { initCounterState, addOne, subStractOne } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface Props {
  value?: number
}

export const CartCounter = ({ value = 10 }: Props) => {

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value))
  }, [dispatch, value])

  // const [count, setCount] = useState(value);
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
          type="button"
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>

        <button 
          type="button"
          className="flex items-center justify-center p-2 rounded-xl bg-red-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch(subStractOne())}
        >
          -1
        </button>
      </div>
    </>
  )
}
