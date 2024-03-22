'use client';
import { useAppSelector } from "@/store";
import { SimpleWidget } from ".."
import { IoCartOutline } from "react-icons/io5";

export const WidegetGrid = () => {
  
  const isCart = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
        <SimpleWidget 
          title={ `${isCart}` }
          subTitle="Productos agregados"
          label="Contador"
          icon={ <IoCartOutline size={70} className="text-blue-600" /> }
          href="/dashboard/counter"
        />
    </div>
  )
}
