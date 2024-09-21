import PieChartComponent from "@/components/ChartComponents/CategoryCharts/PieChartComponent";
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
            <CardTitle>Exemples de graphique</CardTitle>
            <CardDescription>
              Veuillez selectionnez un type de graphique
            </CardDescription>
          </CardHeader>
          <CardContent className="md:min-h-[50vh]">
            <PieChartComponent />
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
            <Link href="/barChart" prefetch>
              <Button>Bar Chart</Button>
            </Link>
            <Link href="/timeSeriesChart" prefetch>
              <Button>Time Series</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
