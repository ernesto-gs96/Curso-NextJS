import Image from "next/image"
import Link from "next/link"

import { CiBookmarkCheck, CiLogout } from 'react-icons/ci';
import { SidebarItem } from "./SidebarItem";
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPerson, IoPersonOutline } from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const menuItems = [
    { path: "/dashboard", icono: <IoCalendarOutline size={30} />, title: "Dasboard" },
    { path: "/dashboard/rest-todos", icono: <IoCheckboxOutline size={30} />, title: "Rest TODOS" },
    { path: "/dashboard/server-todos", icono: <IoListOutline size={30} />, title: "Server Actions" },
    { path: "/dashboard/cookies", icono: <IoCodeWorkingOutline size={30} />, title: "Cookies" },
    { path: "/dashboard/products", icono: <IoBasketOutline size={30} />, title: "Productos" },
    { path: "/dashboard/profile", icono: <IoPersonOutline size={30} />, title: "Perfil" },
]

export const Sidebar = async () => {

    const session = await getServerSession(authOptions);
    const name = session?.user?.name ?? 'Not name';
    const image = session?.user?.image ?? "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";
    

    return (
        <>
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="-mx-6 px-6 py-4">
                        <Link href="/dashboard/" title="home">
                            {/* Next/Image */}
                            <Image
                                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                                className="w-32"
                                alt="tailus logo"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        <Image
                            src={image}
                            alt=""
                            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                            width={100}
                            height={100}
                            priority
                        />
                        <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{name}</h5>
                        <span className="hidden text-gray-400 lg:block">Admin</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        {menuItems.map( (item,index) => 
                            <SidebarItem key={item.path+index} {...item} />
                        )}
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button type="button" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <CiLogout />
                        <span className="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>
        </>
    )
}
