import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

function BPChart({ patient }) {
  if (!patient || !patient.diagnosis_history) {
    return <h2>Loading Chart...</h2>;
  }

  const dataHistory = patient.diagnosis_history;

  // Labels (Month + Year)
  const labels = dataHistory.map(
    item => `${item.month} ${item.year}`
  );

  // Data
  const systolicData = dataHistory.map(
    item => item.blood_pressure.systolic.value
  );

  const diastolicData = dataHistory.map(
    item => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "red",
        tension: 0.4
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "blue",
        tension: 0.4
      }
    ]
  };

  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      <h2>Blood Pressure Chart</h2>
      <Line data={data} />
    </div>
  );
}

export default BPChart;