import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from "recharts";

interface TemperatureChartProps {
  data: Array<{
    time: string;
    loggerTemp: number;
    ambientTemp: number;
  }>;
}

export function TemperatureChartSection({ data }: TemperatureChartProps) {

   const sampleData = [
    { time: "10:00", loggerTemp: 4.5, ambientTemp: 25.1 },
    { time: "11:00", loggerTemp: 5.0, ambientTemp: 26.3 },
    { time: "12:00", loggerTemp: 6.2, ambientTemp: 28.0 },
    { time: "13:00", loggerTemp: 7.0, ambientTemp: 29.4 },
    { time: "14:00", loggerTemp: 6.5, ambientTemp: 30.1 },
    { time: "15:00", loggerTemp: 5.8, ambientTemp: 31.0 },
    { time: "16:00", loggerTemp: 5.2, ambientTemp: 30.5 },
    { time: "17:00", loggerTemp: 4.8, ambientTemp: 29.2 },
    { time: "18:00", loggerTemp: 4.3, ambientTemp: 27.8 },
  ];

  
  const chartData = data && data.length > 0 ? data : sampleData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperature Monitoring</CardTitle>
        <CardDescription>Logger temperature vs. ambient temperature over time</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <ReferenceLine y={2} stroke="#22c55e" strokeDasharray="3 3" label="Min (2°C)" />
            <ReferenceLine y={8} stroke="#ef4444" strokeDasharray="3 3" label="Max (8°C)" />
            <Line type="monotone" dataKey="loggerTemp" stroke="#3b82f6" name="Logger Temp (Inside Shipper)" strokeWidth={2} />
            <Line type="monotone" dataKey="ambientTemp" stroke="#f59e0b" name="Ambient Temp (Outside)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export default TemperatureChartSection;