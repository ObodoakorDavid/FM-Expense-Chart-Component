/** @format */

import data from "./data.json" assert { type: "json" };

console.log(data);

const ctx = document.getElementById("myChart");

const colors = [];

const obj = {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Amount",
        fill: false,
        data: [],
        borderWidth: 0,
        backgroundColor: colors,
        borderRadius: "4",
        base: null,
        hoverBackgroundColor: ['red', 'white'],
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
  colors.push("hsl(10, 79%, 65%)");
  if (datum.amount > currHighest) {
    currHighest = datum.amount;
    indexOfHighest = i;
  }
});

colors[indexOfHighest] = "hsl(186, 34%, 60%)";
console.log(indexOfHighest);
console.log(colors);

console.log(indexOfHighest);

new Chart(ctx, obj);

//  =================================================
