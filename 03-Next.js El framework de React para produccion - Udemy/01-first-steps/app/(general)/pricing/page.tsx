import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Pricing description',
 keywords: ['Pricing page',"Ernesto's Pricing Page",'Informacion de precios']
};
export default function PricingPage() {
  return (
    <>
        <span className="text-7xl">Pricing Page</span>
    </>
  )
}
