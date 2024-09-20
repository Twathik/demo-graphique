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
        <Card>
          <CardHeader>
            <CardTitle>Exemples de graphiques</CardTitle>
            <CardDescription>
              Veuillez selectionnez un type de graphique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center gap-4">
              <Link href="/categoryChart" prefetch>
                <Button>Category Charts</Button>
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
