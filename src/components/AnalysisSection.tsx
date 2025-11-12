import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

export function AnalysisSection() {
  return (
    <Card>
      <CardHeader className="text-left">
        <CardTitle className="pl-10"> Predictive Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Point Number 1 */}

        <div className="p-2">
          <Card>
            <CardHeader className="flex justify-between items-start">
              <div className="text-left pb-5">
                <CardTitle className="pb-2">Point Number 1</CardTitle>
                <CardDescription className="text-sm text-gray-600 ">
                  Description for Point Number 1
                </CardDescription>
              </div>

              {/* Priority label on right side */}
              <span className="text-xs font-medium text-green-600 bg-green-200 px-2 py-1 rounded-full">
                Low Priority
              </span>
            </CardHeader>
          </Card>
        </div>

        {/* Point Number 2 */}

        <div className="p-2">
          <Card>
            <CardHeader className="flex justify-between items-start ">
              <div className="text-left pb-5">
                <CardTitle className="pb-2">Point Number 2</CardTitle>
                <CardDescription className="text-sm text-gray-600 ">
                  Description for Point Number 2
                </CardDescription>
              </div>

              {/* Priority label on right side */}
              <span className="text-xs font-medium text-green-600 bg-green-200 px-2 py-1 rounded-full">
                Low Priority
              </span>
            </CardHeader>
          </Card>
        </div>

        {/* Point Number 3 */}
        <div className="p-2">
          <Card className="">
            <CardHeader className="flex justify-between items-start">
              <div className="text-left pb-5">
                <CardTitle className="pb-2">Point Number 3</CardTitle>
                <CardDescription className="text-sm text-gray-600 ">
                  Description for Point Number 3
                </CardDescription>
              </div>

              {/* Priority label on right side */}
              <span className="text-xs font-medium text-green-600 bg-green-200 px-2 py-1 rounded-full">
                Low Priority
              </span>
            </CardHeader>
          </Card>
        </div>

        {/* Point Number 4 */}
        <div className="p-2">
          <Card className="">
            <CardHeader className="flex justify-between items-start">
              <div className="text-left pb-5">
                <CardTitle className="pb-2">Point Number 4</CardTitle>
                <CardDescription className="text-sm text-gray-600 ">
                  Description for Point Number 4
                </CardDescription>
              </div>

              {/* Priority label on right side */}
              <span className="text-xs font-medium text-green-600 bg-green-200 px-2 py-1 rounded-full">
                Low Priority
              </span>
            </CardHeader>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default AnalysisSection;
