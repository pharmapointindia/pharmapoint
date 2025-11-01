import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

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
          <CardHeader className="text-left">
            <CardTitle> Point Number 1</CardTitle>
              <CardDescription className="text-sm text-gray-600">Description for Point Number 1</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        </div>
       

         {/* Point Number 2 */}

         <div className="p-2">
          <Card>
          <CardHeader className="text-left">
            <CardTitle> Point Number 2</CardTitle>
            <CardDescription className="text-sm text-gray-600">Description for Point Number 2</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

         </div>
        
         {/* Point Number 3 */}
        <div className="p-2"><Card className="">
          <CardHeader className="text-left">
            <CardTitle> Point Number 3</CardTitle>
            <CardDescription className="text-sm text-gray-600">Description for Point Number 3</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        </div>


         {/* Point Number 4 */}
        <div className="p-2"><Card className="">
          <CardHeader className="text-left">
            <CardTitle> Point Number 4</CardTitle>
            <CardDescription className="text-sm text-gray-600">Description for Point Number 4</CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default AnalysisSection;
