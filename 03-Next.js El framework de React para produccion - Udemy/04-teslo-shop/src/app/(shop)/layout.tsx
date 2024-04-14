import { TopMenu } from "@/components";

export default function ShopLayout({ children }: {
 children: React.ReactNode;
}) {
  return (
    <div className="min-h-scree">
      <TopMenu/>
      {children}
    </div>
  );
}