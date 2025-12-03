import React from "react";
import TemperatureChartSection from "../components/TemperatureChartSection";
import type { TemperatureChartPoint } from "../components/TemperatureChartSection";
import TemperatureSummaryCard from "../components/TemperatureSummaryCard";
import AnalysisSection from "../components/AnalysisSection";
import EmptyState from "../components/common/EmptyState";


type ReportProps = {
  city?: string;
  fromDate?: string;
  toDate?: string;
};

// Static chart data for UI-only
const tempData: TemperatureChartPoint[] = [
  { date: "2024-01-01", loggerTemp: 4, ambientTemp: 14 },
  { date: "2024-02-01", loggerTemp: 3, ambientTemp: 15 },
  { date: "2024-03-01", loggerTemp: 5, ambientTemp: 18 },
  { date: "2024-04-01", loggerTemp: 6, ambientTemp: 20 },
  { date: "2024-05-01", loggerTemp: 7, ambientTemp: 22 },
  { date: "2024-06-01", loggerTemp: 7, ambientTemp: 24 },
  { date: "2024-07-01", loggerTemp: 6, ambientTemp: 23 },
  { date: "2024-08-01", loggerTemp: 5, ambientTemp: 22 },
  { date: "2024-09-01", loggerTemp: 4, ambientTemp: 21 },
  { date: "2024-10-01", loggerTemp: 3, ambientTemp: 19 },
  { date: "2024-11-01", loggerTemp: 4, ambientTemp: 17 },
  { date: "2024-12-01", loggerTemp: 5, ambientTemp: 16 },
  { date: "2025-01-01", loggerTemp: 4, ambientTemp: 14 },
  { date: "2025-02-01", loggerTemp: 3, ambientTemp: 15 },
  { date: "2025-03-01", loggerTemp: 5, ambientTemp: 18 },
  { date: "2025-04-01", loggerTemp: 6, ambientTemp: 20 },
  { date: "2025-05-01", loggerTemp: 7, ambientTemp: 23 },
  { date: "2025-06-01", loggerTemp: 8, ambientTemp: 26 },
  { date: "2025-07-01", loggerTemp: 7, ambientTemp: 25 },
  { date: "2025-08-01", loggerTemp: 6, ambientTemp: 23 },
  { date: "2025-09-01", loggerTemp: 5, ambientTemp: 22 },
  { date: "2025-10-01", loggerTemp: 4, ambientTemp: 20 },
  { date: "2025-11-01", loggerTemp: 4, ambientTemp: 18 },
  { date: "2025-12-01", loggerTemp: 5, ambientTemp: 16 },
];


const Report: React.FC<ReportProps> = ({ city, fromDate, toDate }) => {


  const missingFields = [];
  if (!city) missingFields.push("city");
  if (!fromDate) missingFields.push("From date");
  if (!toDate) missingFields.push("To Date");

  if (missingFields.length > 0) {
    return (
      <EmptyState message={`Please provide: ${missingFields.join(", ")}.`} />
    );
  }


  return (
    <>
      {/*Temperature Summary Card */}
      <div className="px-4 py-2">
        <TemperatureSummaryCard  />
      </div>
      {/* Analysis Summary Section */}
      <div className="px-4 py-2">
        <AnalysisSection />
      </div>

      {/* Temperature Chart */}
      <div className="px-4 py-4">
        <TemperatureChartSection data={tempData} />
      </div>
    </>
  );
};

export default Report;
