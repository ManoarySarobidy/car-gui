import { getStatisticsMonthly } from '../../../services/statistiques/index';
import {React, useState, useEffect} from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import revenueData from "./revenueData.json";
import sourceData from "./sourceData.json";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";




const Dashboard = () => {

  const[ statisticsMonthly, setMonthly ] = useState([]);
  const[ isLoading, setIsLoading ] = useState(true);

  const getMonthlyStatistics = async () => {
    let response = await getStatisticsMonthly();
    let response_data = response.data;
    let response_inner_data = response_data.data;
    setMonthly( response_inner_data.statistics );
  };

  useEffect( () => {
    setIsLoading(true);
    getMonthlyStatistics();
    setIsLoading(false);
  }, [isLoading] );

    return (
      <div className="dashboard">
        {/* <div className="dataCard revenueCard"> */}
        {/*   <Line */}
        {/*     data={{ */}
        {/*       labels: revenueData.map((data) => data.label), */}
        {/*       datasets: [ */}
        {/*         { */}
        {/*           label: "Revenue", */}
        {/*           data: revenueData.map((data) => data.revenue), */}
        {/*           backgroundColor: "#064FF0", */}
        {/*           borderColor: "#064FF0", */}
        {/*         }, */}
        {/*         { */}
        {/*           label: "Cost", */}
        {/*           data: revenueData.map((data) => data.cost), */}
        {/*           backgroundColor: "#FF3030", */}
        {/*           borderColor: "#FF3030", */}
        {/*         }, */}
        {/*       ], */}
        {/*     }} */}
        {/*     options={{ */}
        {/*       elements: { */}
        {/*         line: { */}
        {/*           tension: 0.5, */}
        {/*         }, */}
        {/*       }, */}
        {/*       plugins: { */}
        {/*         title: { */}
        {/*           text: "Monthly Revenue & Cost", */}
        {/*         }, */}
        {/*       }, */}
        {/*     }} */}
        {/*   /> */}
        {/* </div> */}

        <div className="dataCard customerCard">
          <Bar
            data={{
              labels: statisticsMonthly.map((data) => data.label),
              datasets: [
                {
                  label: "Count",
                  data: statisticsMonthly.map((data) => data.nombreAnnonce),
                  backgroundColor: [
                    "rgba(43, 63, 229, 0.8)",
                    "rgba(250, 192, 19, 0.8)",
                    "rgba(253, 135, 135, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Tous Les Annonces publiées",
                },
              },
            }}
          />
        </div>

        {/* <div className="dataCard categoryCard"> */}
        {/*   <Doughnut */}
        {/*     data={{ */}
        {/*       labels: sourceData.map((data) => data.label), */}
        {/*       datasets: [ */}
        {/*         { */}
        {/*           label: "Count", */}
        {/*           data: sourceData.map((data) => data.value), */}
        {/*           backgroundColor: [ */}
        {/*             "rgba(43, 63, 229, 0.8)", */}
        {/*             "rgba(250, 192, 19, 0.8)", */}
        {/*             "rgba(253, 135, 135, 0.8)", */}
        {/*           ], */}
        {/*           borderColor: [ */}
        {/*             "rgba(43, 63, 229, 0.8)", */}
        {/*             "rgba(250, 192, 19, 0.8)", */}
        {/*             "rgba(253, 135, 135, 0.8)", */}
        {/*           ], */}
        {/*         }, */}
        {/*       ], */}
        {/*     }} */}
        {/*     options={{ */}
        {/*       plugins: { */}
        {/*         title: { */}
        {/*           text: "Revenue Sources", */}
        {/*         }, */}
        {/*       }, */}
        {/*     }} */}
        {/*   /> */}
        {/* </div> */}
      </div>
    );
}

export default Dashboard;