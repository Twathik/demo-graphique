import BarChartComponent from "@/components/ChartComponents/CategoryCharts/BarChartComponent";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-10">
      <div className="flex flex-row justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Chart examples</CardTitle>
            <CardDescription>
              Select a chart, open in multiple tabs to check real time sync
            </CardDescription>
          </CardHeader>
          <CardContent className="md:min-h-[50vh]">
            <BarChartComponent />
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Link href="/barChart" prefetch target="_blank">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900">
                Open in new tab
              </Button>
            </Link>
            <Link href="/timeSeriesChart" prefetch>
              <Button>Time Series</Button>
            </Link>
            <Link href="/pieChart" prefetch>
              <Button>Pie Chart</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
