import React from "react";
import './App.css'
import Headers from "./components/Headers";
import Dashboard from './components/Dashboard'
import LoadingState from "./components/LoadingState";

import ReportSection from "./components/ReportSection";


function App() {
const [loading, setLoading] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
const [fetchedData, setFetchedData] = React.useState<
  { time: string; loggerTemp: number; ambientTemp: number }[] | null | undefined
>(undefined);
  return (
    <>
    <div className='text-core-gray-800 text-base font-medium font-["Inter_Variable"] leading-6'>
      <Headers />
      <Dashboard  />

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
            onRetry={() => {
              setLoading(true);
              setCompleted(false);
            }}
          />
        ) : null}
      </div>
      
    </div>

    </>
  )
}

export default App
