import React from "react";
import CommonDropdown from "../components/common/CommonDropdown";
import { DatePicker } from "../components/DatePicker";
import { Button } from "@/components/ui/button";
import LoadingState from "../components/common/LoadingState";
import ReportSection from "./Report";
import { formatLocalDate } from "@/utils/formatDate";

const Dashboard: React.FC = () => {
  const [selectedCity, setSelectedCity] = React.useState<string>("");
  const [fromDate, setFromDate] = React.useState<Date | null>(null);
  const [toDate, setToDate] = React.useState<Date | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);

  const handleCheck = async () => {
    setLoading(true);
    setCompleted(false);
  };  

  return (
    <>
      <div className="flex gap-4 items-end">
        {/* Dropdown for selecting From location */}
        <div className="p-3 space-y-3 font-medium font-['Inter'] leading-4">
          <CommonDropdown
            label="Location"
            options={[
              "Mumbai",
              "New Delhi",
              "Ahmedabad",
              "Bangalore",
              "Chennai",
              "Cochin",
              "Chandigarh",
              "Calicut",
              "Varanasi",
              "Bhubaneswar",
              "Kolkata",
              "Indore",
              "Jaipur",
              "Hyderabad",
              "Pune",
              "Vizag",
            ]}
            value={selectedCity}
            onChange={setSelectedCity}
          />
        </div>

        {/* From Date Picker */}
        <DatePicker label="From Date" value={fromDate} onChange={setFromDate} />

        {/* To Date Picker */}
        <DatePicker label="To Date" value={toDate} onChange={setToDate} />

        {/* Check Button - aligned with Date Picker */}
        <div className="p-3 space-y-3 justify-start text-alias-content-inverted text-sm font-medium font-['Inter'] leading-4">
          <Button
            className="bg-black text-white h-10 w-[100px]"
            onClick={handleCheck}
          >
            Check
          </Button>
        </div>
      </div>

      {/* Loading state */}
      <div className="mt-2">
        {loading ? (
          <LoadingState
            duration={3000}
            message="Fetching Data"
            onComplete={() => {
              setLoading(false);
              setCompleted(true);
            }}
          />
        ) : completed ? (
          <ReportSection
            city={selectedCity}
            fromDate={fromDate ? formatLocalDate(fromDate) : ""}
            toDate={toDate ? formatLocalDate(toDate) : ""}
          />
        ) : null}
      </div>
    </>
  );
};


export default Dashboard;
