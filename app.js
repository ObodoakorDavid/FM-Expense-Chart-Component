/** @format */

import data from "./data.json" assert { type: "json" };

console.log(data);

const ctx = document.getElementById("myChart");

const colors = [];
const hoverColors = [];

const obj = {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: null,
        fill: false,
        data: [],
        borderWidth: 0,
        backgroundColor: colors,
        borderRadius: "6",
        borderSkipped: false,
        base: null,
        hoverBackgroundColor: hoverColors,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (TooltipItem) {
            return `$${TooltipItem.formattedValue}`;
          },
          title: function (TooltipItem) {
            return "";
          },
        },
        displayColors: false,
      },
    },
    onHover: (event, chartElement) => {
      event.native.target.style.cursor = chartElement[0]
        ? "pointer"
        : "default";
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  },
};

let currHighest = 0;
let indexOfHighest = 0;

data.forEach((datum, i) => {
  obj.data.labels.push(datum.day);
  obj.data.datasets[0].data.push(datum.amount);
  hoverColors.push("hsl(10, 79%, 65%, 0.8)");
  colors.push("hsl(10, 79%, 65%)");

  if (datum.amount > currHighest) {
    currHighest = datum.amount;
    indexOfHighest = i;
  }
});

colors[indexOfHighest] = "hsl(186, 34%, 60%)";
hoverColors[indexOfHighest] = "hsl(186, 34%, 60%, 0.8)";
console.log(hoverColors);

new Chart(ctx, obj);

//  =================================================
