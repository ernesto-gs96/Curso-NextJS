"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"

interface Props {
    path: string,
    icono: React.ReactNode,
    title: string
}

export const SidebarItem = ({path, icono, title}: Props) => {

    const pathName  = usePathname();

    {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
    return (
        <li>
            <Link href={path} className={`
                px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
                hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
                ${pathName===path && "text-white bg-gradient-to-r from-sky-600 to-cyan-400"} 
            `}>
                {icono}
                <span className="group-hover:text-white-700">{title}</span>
            </Link>
        </li>
    )
}
