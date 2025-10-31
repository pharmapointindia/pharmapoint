import React from "react";
import CommonDropdown from "../components/CommonDropdown";
import {DatePicker} from "../components/DatePicker";
import { Button } from "@/components/ui/button"
import LoadingState from "./LoadingState"
import ReportSection from "./ReportSection"





const Dashboard: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<string>("");
  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
const [fetchedData, setFetchedData] = React.useState<
  { time: string; loggerTemp: number; ambientTemp: number }[] | null | undefined
>(undefined);
  return (
    <>
      <div className="flex gap-4 items-end">
        {/* Dropdown for selecting From location */}
        <div className="p-3 space-y-3">
          <CommonDropdown
            label="From"
            options={["Mumbai", "Delhi", "Bangalore", "Chennai"]}
            value={selectedItem}
            onChange={setSelectedItem}
          />
        </div>

        {/* Dropdown for selecting To location */}
        <div className="p-3 space-y-3">
          <CommonDropdown
            label="To"
            options={["Mumbai", "Delhi", "Bangalore", "Chennai"]}
            value={selectedItem}
            onChange={setSelectedItem}
          />
        </div>

        {/* Date Picker */}
        <DatePicker />

        {/* Check Button - aligned with Date Picker */}
        <div className="p-3 space-y-3 justify-start text-alias-content-inverted text-sm font-medium font-['Inter'] leading-4">
          <Button
            className="bg-black text-white h-[40px] w-[100px]"
            onClick={() => {
              setLoading(true);
              setCompleted(false);
            }}
          >
            Check
          </Button>
        </div>


         
  

      </div>

      {/* Loading state */}
      <div className="mt-2">
        {loading ? (
          <LoadingState
            duration={2000}
            message="Fetching Data"
            onComplete={() => {
              setLoading(false);
              setCompleted(true);
              // simulate a fetch result: set to null to show empty state
              setFetchedData(null);
            }}
          />
        ) : completed ? (
          <ReportSection
            data={fetchedData}
          />
        ) : null}
      </div>
    </>
  );
};

export default Dashboard;
