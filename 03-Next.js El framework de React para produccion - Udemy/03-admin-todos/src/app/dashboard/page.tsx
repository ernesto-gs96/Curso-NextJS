import { WidgetItem } from "@/components/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function NamePage() {

    const session = await getServerSession(authOptions);
    if (!session) {
        redirect('/api/auth/signin')
    }

    return (
        <div className="grid gap-6 md:grid-cols-1">

            <WidgetItem title={"Usuario conectado S-side"}>
                <div className="flex flex-col">
                    <span>{session.user?.name}</span>
                    <span>{session.user?.image}</span>
                    <span>{session.user?.email}</span>
                    <span>{session.user?.roles?.join(',')}</span>
                    <div>
                        {JSON.stringify(session)}
                    </div>
                </div>
            </WidgetItem>

        </div>
    );
}