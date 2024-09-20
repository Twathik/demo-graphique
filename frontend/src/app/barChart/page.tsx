import BarChartComponent from "@/components/ChartComponents/CategoryCharts/BarChartComponent";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <CardContent className="min-h-[70vh] min-w-[90vw]">
            <BarChartComponent />
          </CardContent>
          <CardFooter className="flex justify-end gap-4">
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
