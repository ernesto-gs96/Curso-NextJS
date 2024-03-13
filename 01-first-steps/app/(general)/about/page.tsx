import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'About description',
 keywords: ['About page',"Ernesto's About Page",'informacion sobre la pagina']
};
export default function AboutPage() {
  return (
    <>
        <span className="text-7xl">About Page</span>
    </>
  )
}
