import React from "react";
import Headers from "@/components/Headers";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";



const Auth = () => { 
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");


    return (
        <div>
            <Headers />

            <div className="font-['Inter']"> 
                 <div className="hidden md:flex items-center justify-center p-1">
                    <div className="bg-gray-100 rounded-full p-3 flex items-center justify-center">
                        <div className="bg-white rounded-full p-3 flex items-center justify-center">
                        <img
                        src="src/assets/stethoscope.svg"
                        alt="Auth Banner"
                        className="w-7 max-w-md rounded-lg"
                        />
                    </div>
                    </div>
                    </div>
                <div className="mx-85   ">
                    <h1 className="text-3xl font-medium ">
                        Login into Your account
                    </h1>
                    <h1 className="text-xl text-gray-500 pb-8">
                        Enter your details to login
                    </h1>
                    <Card>
                        <CardContent className="space-y-2 m-5 p-3   ">

                            {/* Username Input Field */}
                           <label className="flex items-center gap-1 text-gray-800 font-medium text-l">
                                Username
                                <span className="text-red-500">*</span>
                            </label>
                            <div className="pb-5">
                                <Input  value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" type="username" placeholder="Enter your Username" />
                            </div>

                             {/* Password  Input Field */}
                           <label className="flex items-center gap-1 text-gray-800 font-medium text-l">
                                Password
                                <span className="text-red-500">*</span>
                            </label>
                            <Input  value={password} onChange={(e) => setPassword(e.target.value)} className="h-11" type="password" placeholder="Enter your Password" />

                            {/* Login Button */}
                            <Button className="w-full h-10 mt-4 bg-gray-400 hover:bg-blue-800 text-white font-medium">
                                Login
                            </Button>
                        </CardContent>

                        
                    </Card>
                </div>


            </div>
        </div>
    );
};

export default Auth;