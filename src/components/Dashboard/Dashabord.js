import { useQuery } from "@tanstack/react-query";

import { getUser, getMetrics } from "../../API/userApi";

import GaugeChartComponent from "./GaugeChart";
import Sidenav from "./Sidenav";
import ItemCard from "./ItemCard";
import DataCard from "./DataCard";

const Dashboard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUser("67cc1238ed9052deb5e2c0ff"),
  });

  const { data: metricDetails, isLoading: isMetricLoading } = useQuery({
    queryKey: ["getMetrics"],
    queryFn: () => getMetrics("67cc1238ed9052deb5e2c0ff"),
  });


  if (isLoading || isMetricLoading) {
    // Todo: Show some skeleton UI for loader 
    <h1>Loading......</h1>;
  }
  const { response } = data || {};

  const metricData = metricDetails || {};



  return (
    <div className="flex">
      <Sidenav />
      <div className="w-4/6 h-full bg-gray-50">
        <div className="m-4 p-4">
          <div className="mb-6">
            <h1 className="text-4xl font-bold">
              Welcome, {response?.firstName}{" "}
            </h1>
          </div>

          <div className="bg-white h-[280px] px-4">
            <h1 className="text-2xl font-semibold">Health metrics</h1>
            <div className="p-2 bg-gray-50 w-[550px] rounded-sm mt-2">
              <div className="w-[400px] flex">
                <GaugeChartComponent metricData={metricData} />
                <DataCard metricData={metricData} />
              </div>
            </div>
          </div>
          <ItemCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
