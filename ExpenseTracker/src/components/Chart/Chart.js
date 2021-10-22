import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = ({dataPoints}) => {

	const maxValue = Math.max(...dataPoints.map(d => d.value));

	return (
		<div className="chart"> 
			{dataPoints.map(dataPoint => (
				<ChartBar 
					value={dataPoint.value} 
					maxValue={maxValue} 
					label={dataPoint.label} 
					key={dataPoint.label} />
				)
			)}
		</div>
	)
}

export default Chart;