import { ArticlePlusDuotone } from "../../icons/ArticlePlusDuotone";
const DataCard = ( { metricData } ) => {
    //TODO: From API missing Glucose value. So 
    const { temperature} = metricData;
    return(
        <div className="flex-col justify-center">
        <div className="w-[200px] mx-2 mb-2 h-[100px] bg-white flex items-center justify-center">
          <div className="mr-4">
            <ArticlePlusDuotone />
          </div>
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-xl font-bold text-center">
              {temperature}
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
    )
}

export default DataCard;