import React from "react";
import CommonDropdown from "../components/CommonDropdown";
import {DatePicker} from "../components/DatePicker";

const Dashboard: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState<string>("");

  return (
    <>
      
      <div className="flex gap-4">
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

        <DatePicker />
      </div>
    </>
  );
};

export default Dashboard;
