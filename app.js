/** @format */

import data from "./data.json" assert { type: "json" };

console.log(data);

const ctx = document.getElementById("myChart");

const colors = ['hsl(10, 79%, 65%)'];

const obj = {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
        borderWidth: 0,
        backgroundColor: colors,
        borderRadius: "4",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

let currHighest = 0;

const getHighestValue = (arr) => {
  arr.forEach((each) => {
    if (each > currHighest) {
      currHighest = each;
    }
  });
};

data.forEach((datum) => {
  obj.data.labels.push(datum.day);
  obj.data.datasets[0].data.push(datum.amount);
  
});

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
