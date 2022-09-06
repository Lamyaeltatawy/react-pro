import React from "react";
import ChartBar from "./chartBar";
import './Chart.css';
const Chart=(props)=>{
    const totalMaximum = Math.max(...dataPointValues); //recive 12 value
    const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
 

    return(
        <div className="chart">
          {props.dataPoints.map=(dataPoint)=>
          <ChartBar 
          key={dataPoint.id}
          value={dataPoint.value} 
          maxValue={null}
          label={dataPoint.label}
        />}
        </div>
    )
}
export default Chart;