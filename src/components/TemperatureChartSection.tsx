import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

export interface TemperatureChartPoint {
  date: string;
  loggerTemp: number;
  ambientTemp: number;
}

interface TemperatureChartSectionProps {
  data: TemperatureChartPoint[];
}


export default function TemperatureChartSection({ data }: TemperatureChartSectionProps) {
 return (
    <Card>
      <CardHeader className="text-left">
        <CardTitle>Temperature Monitoring</CardTitle>
        <CardDescription>
          Logger temperature vs. ambient temperature over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={325}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
            label={{
                position: "insideCenter",
                dx: -17,
              }}
              dataKey="date"
              tickFormatter={(date) =>
                new Date(date).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              }
              interval="preserveStartEnd"
              tickMargin={2}
              tick={{ fontSize: 12, dy: 6 }}
              minTickGap={30}
              padding={{ left: 10, right: 10 }}
            />
            
            <YAxis
              label={{
                value: "Temperature (°C)",
                angle: -90,
                position: "insideCenter",
                dx: -17,
              }}
            />
              <Tooltip />
              <Legend  verticalAlign="bottom" 
                align="center"
                wrapperStyle={{
                  paddingTop: 10, 
                  paddingBottom: 10, 
                  lineHeight: "24px", 
                }}/>
              <ReferenceLine
                y={2}
                stroke="#22c55e"
                strokeDasharray="3 3"
                label="Min (2°C)"
              />

              <ReferenceLine
                y={8}
                stroke="#ef4444"
                strokeDasharray="3 3"
                label="Max (8°C)"
              />
              <Line
                type="monotone"
                dataKey="loggerTemp"
                stroke="#3b82f6"
                name="Logger Temp (Inside Shipper)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="ambientTemp"
                stroke="#f59e0b"
                name="Ambient Temp (Outside)"
                strokeWidth={2}
              />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};