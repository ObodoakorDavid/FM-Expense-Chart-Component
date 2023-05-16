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
      },
    ],
  },
  options: {
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

const getHighestValue = (arr) => {
  arr.forEach((each) => {
    if (each > currHighest) {
      currHighest = each;
    }
  });
};

data.forEach((datum, i) => {
  obj.data.labels.push(datum.day);
  obj.data.datasets[0].data.push(datum.amount);
  colors.push("hsl(10, 79%, 65%)");
  //   obj.data.datasets[0].label.push(`${datum.day}: ${datum.amount}`);
  //   console.log(obj.data.datasets[0].label);
  if (datum.amount > currHighest) {
    currHighest = datum.amount;
    indexOfHighest = i;
    console.log(i);
  } else {
  }
});

colors[indexOfHighest] = "hsl(186, 34%, 60%)";
console.log(indexOfHighest);
console.log(colors);

console.log(indexOfHighest);

new Chart(ctx, obj);

//  =================================================

// const obj = {
//     type: "bar",
//     data: {
//       labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
//       datasets: [
//         {
//           label: "",
//           data: [4, 6, 8, 5, 4, 7, 4.5],
//           borderWidth: 0,
//           backgroundColor: "hsl(10, 79%, 65%)",
//         },
//       ],
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   };
