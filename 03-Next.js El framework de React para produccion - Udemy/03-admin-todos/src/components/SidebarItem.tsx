"use client";

import { usePathname } from "next/navigation"

interface Props {
    href: string,
    icono: JSX.Element,
    texto: string
}

{/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
export const SidebarItem = ({href, icono, texto}: Props) => {

    const path  = usePathname();

    return (
        <li>
            <a href={href} className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${path===href && "text-white bg-gradient-to-r from-sky-600 to-cyan-400"} `}>
                {icono}
                <span className="-mr-1 font-medium">{texto}</span>
            </a>
        </li>
    )
}
