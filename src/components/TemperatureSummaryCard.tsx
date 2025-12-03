import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

export interface TemperatureChartPoint {
  date: string;
  loggerTemp: number;
  ambientTemp: number;
}

// interface TemperatureSummaryCardProps {
//   data: TemperatureChartPoint[];
// }

export default function TemperatureSummaryCard() {
  return (
    <>
      <div className="flex flex-row ">
        <Card className=" m-1 py-2 w-100 ">
          <CardHeader className="text-left text-sm text-gray-400">
            <CardTitle>TEMPERATURE WILL BE MAINTAINED AT</CardTitle>
            <CardDescription className="text-green-600 text-3xl tracking-wide font-bold">
              2°C - 8°C
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className=" m-1 py-2 w-100">
          <CardHeader className="text-left text-sm text-gray-400">
            <CardTitle>TEMPERATURE FROM OUR RECORD </CardTitle>
            <CardDescription className=" text-black text-3xl tracking-wide font-bold">
              23°C
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="m-1 py-2 w-100">
          <CardHeader className="text-left text-sm text-gray-400">
            <CardTitle>AMBIENT TEMPERATURE AT BANGALORE</CardTitle>
            <CardDescription className=" text-black text-3xl tracking-wide font-bold">
              2°C - 8°C
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
