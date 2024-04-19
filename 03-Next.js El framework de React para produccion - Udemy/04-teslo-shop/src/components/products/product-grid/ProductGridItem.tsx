"use client";

import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
    product: Product,
}
export const ProductGridItem = ({product}:Props) => {

    const [displayImage, setdisplayImage] = useState(product.images[0]);
  return (
    <div className="rounde-md overflow-hidden fade-in">
        <Link href={`/products/${product.slug}`}>
        <Image
            src={`/products/${displayImage}`}
            alt={product.title}
            className="w-full object-cover rounded"
            width={500}
            height={500}
            onMouseEnter={() => setdisplayImage(product.images[1])}
            onMouseLeave={() => setdisplayImage(product.images[0])}
        />
        </Link>

        <div className="p-4 flex flex-col">
            <Link 
               className="hover:text-blue-600"
                href={`/products/${product.slug}`}
            >
                {product.title}
            </Link>
            <span className="font-bold">${product.price}</span>
        </div>
    </div>
  )
}
