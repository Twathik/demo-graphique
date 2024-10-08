import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TimeSeriesChartComponent from "@/components/ChartComponents/TimeSeriesChart/TimeSeriesChartComponent";

export default function Home() {
  return (
    <main className="pt-10">
      <div className="flex flex-row justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Chart examples</CardTitle>
            <CardDescription>Select a chart</CardDescription>
          </CardHeader>
          <CardContent className="md:min-h-[50vh] md:min-w-[90vw]">
            <TimeSeriesChartComponent />
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Link href="/pieChart" prefetch>
              <Button>Pie chart</Button>
            </Link>
            <Link href="/barChart" prefetch>
              <Button>Bar Chart</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
