import type { Metadata } from "next";
import SubscribeToCategoryChartWebSocket from "@/components/ChartComponents/CategoryCharts/SubscribeToCategoryChartWebSocket";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function CategoryChartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <SubscribeToCategoryChartWebSocket />
    </div>
  );
}
