import GaugeChart from "react-gauge-chart";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../API/userApi"
import { ArticlePlusDuotone } from "../../icons/ArticlePlusDuotone";
import { Link } from "react-router";

const Dashboard = () => {

    const { data, isLoading} = useQuery({ queryKey: ['getUser'], queryFn: () => getUser("67cc1238ed9052deb5e2c0ff") });
    
    if(isLoading){
        <h1>Loading......</h1>
    }
    const { response } = data || {};

  return (
    <div className="flex">
      <div className="w-1/6 h-screen bg-gray-500 text-white">
        <div className="m-4">
          <h1 className="text-2xl font-bold">Bayer Health</h1>
        </div>
        <div className="list-none m-4">
          <Link to="/dashboard"><li className="my-2">Dashboard</li></Link>
          <Link to="/profile"><li className="my-2">My Profile</li></Link>
          <Link to="/Health metrics"><li className="my-2">Health metrics</li></Link>
          <Link to="/messages"><li className="my-2">Messages</li></Link>
          <Link to="/"><li className="my-2">Logout</li></Link>
        </div>
      </div>
      <div className="w-4/6 h-full bg-gray-50">
        <div className="m-4 p-4">
          <div className="mb-6">
            <h1 className="text-4xl font-bold">Welcome, {response?.firstName} </h1>
          </div>

          <div className="bg-white h-[280px] px-4">
            <h1 className="text-2xl font-semibold">Health metrics</h1>
            <div className="p-2 bg-gray-50 w-[550px] rounded-sm mt-2">
              <div className="w-[400px] flex">

                <div className="bg-white p-2">
                    <h1 className="text-lg font-semibold">Hear Rate</h1>
                  <GaugeChart
                    id="gauge-chart1"
                    nrOfLevels={3}
                    percent={0.10}
                    textColor="#FFFFFF"
                    className="w-[400px]"
                  />
                </div>
                <div className="flex-col justify-center">
                  <div className="w-[200px] mx-2 mb-2 h-[100px] bg-white flex items-center justify-center">
                    <div className="mr-4">
                      <ArticlePlusDuotone />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <h1 className="text-xl font-bold text-center">
                        33.90* C
                      </h1>
                      <p className="text-center">Body Temperature</p>
                    </div>
                  </div>
                  <div className="w-[200px] mx-2 h-[100px] bg-white flex items-center justify-center">
                    <div className="mr-4">
                      <ArticlePlusDuotone />
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <h1 className="text-xl font-bold">114.77 mg/dL</h1>
                      <p>Blood Glucose</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white mt-4 p-4 gap-2 rounded-sm">
            <h1 className="text-2xl font-bold">Health Tip for the Day</h1>
            <p>Stay hydrated! Aim to drink at least 8 glasses of the water per day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
