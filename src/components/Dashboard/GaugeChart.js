import GaugeChart from "react-gauge-chart";

const GaugeChartComponent = ({ metricData }) => {

    const { bloodPressure, heartBeatRate} = metricData;

    return(
        <div className="bg-white p-2">
        <h1 className="text-lg font-semibold">Heart Rate</h1>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={3}
        percent={heartBeatRate/100}
        arcWidth={0.3}
        textColor="#FFFFFF"
        className="w-[400px]"
      />
      <div className="flex justify-center">

      <h1 className="text-sm">{bloodPressure} bph</h1>
      </div>
    </div>
    )
}

export default GaugeChartComponent;