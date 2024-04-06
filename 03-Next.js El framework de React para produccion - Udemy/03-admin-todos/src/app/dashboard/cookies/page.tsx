import { TabBar } from "@/components";
import { cookies } from 'next/headers';

export const metadata = {
    title: 'Cookies page',
    description: 'Cookies page',
};

export default function NamePage() {

    const cookieStore = cookies();
    const cookieTab = Number(cookieStore.get('selectedTab')?.value ?? '1');

    // const allCookies = cookieStore.getAll(); // Todas las cookies

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <div className="flex flex-col">
                <span className="text-3xl">Tabs</span>
                <TabBar currentTab={ cookieTab } />
            </div>

        </div>
    );
}