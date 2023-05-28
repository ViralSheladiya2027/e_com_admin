import React, { useEffect, useState }from "react";
import { Chart } from "react-google-charts";
// import { db } from "../Components/Firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { useStore } from "../Store";

export const data = [
  ["Year", "Customers", "Products", "Orders"],
  ["2023", 1000, 400, 200],
  // ["2015", 1170, 460, 250],
  // ["2016", 660, 1120, 300],
  // ["2017", 1030, 540, 350],
  // ["2018", 1000, 400, 200],
  // ["2019", 1170, 460, 250],
  // ["2020", 660, 1120, 300],
  // ["2021", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    // subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  colors:["rgb(53,138,148)","rgb(37,11,165)","#188310"]
};

export default function BarChart() {

//   const setRows = useStore((state) => state.setRows);

//   const [chartData, setChartData] = useState({});
// useEffect(() => {
//   const empCollectionRef = collection(db, "products");
//   const orderCollectionRef = collection(db, "orders");
//   const getUsers = async () => {
//     const data = await getDocs(empCollectionRef);
//     setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getUsers()
//   const getOrders = async () => {
//     const data = await getDocs(orderCollectionRef);
//     setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };
//   getOrders()
//   const products = data.map((item) => item.product);
//   const orders = data.map((item) => item.order);

//   const chartData = {
//     products,
//     datasets: [
//       {
//         label: 'Data',
//         data: orders,
//         backgroundColor: 'rgba(75,192,192,0.6)',
//       },
//     ],
//   };
//   setChartData(chartData);
// }, [])


  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
  );
}
