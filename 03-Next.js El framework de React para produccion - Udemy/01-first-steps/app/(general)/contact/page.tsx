import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'Contact description',
 keywords: ['Contact page',"Ernesto's Contact Page",'Informacion de contacto']
};
export default function ContactPage() {
  return (
    <>
        <span className="text-7xl">Contact Page</span>
    </>
  )
}
