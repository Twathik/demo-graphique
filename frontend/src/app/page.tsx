import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row justify-center">
        <Card className="mt-40 h-[20vh]">
          <CardHeader>
            <CardTitle>Exemples de graphiques</CardTitle>
            <CardDescription>
              Veuillez selectionnez un type de graphique
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center item-center gap-4 ">
            <div className="gap-4 flex">
              <Link href="/barChart" prefetch>
                <Button>Bar Charts</Button>
              </Link>
              <Link href="/pieChart" prefetch>
                <Button>Pie Chart</Button>
              </Link>
              <Link href="/timeSeriesChart" prefetch>
                <Button>Time Series Chart</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
