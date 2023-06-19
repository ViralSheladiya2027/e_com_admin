import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { db } from "../Components/Firebase";
import { collection, getDocs } from "firebase/firestore";
// import { useStore } from "../Store";

// export const data = [
//   ["Year", "Customers", "Products", "Orders"],
//   ["2023", 1000, 400, 200],
//   // ["2015", 1170, 460, 250],
//   // ["2016", 660, 1120, 300],
//   // ["2017", 1030, 540, 350],
//   // ["2018", 1000, 400, 200],
//   // ["2019", 1170, 460, 250],
//   // ["2020", 660, 1120, 300],
//   // ["2021", 1030, 540, 350],
// ];

export const options = {
  chart: {
    title: "Company Performance",
    // subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  colors: ["rgb(53,138,148)", "rgb(37,11,165)", "#188310"],
};

export default function BarChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch product and order data from Firebase
    const fetchData = async () => {
      const productData = await getDocs(collection(db, "products"));
      const orderData = await getDocs(collection(db, "orders"));

      const formattedData = [["Year", "Product", "Order"]];

      productData.forEach((product) => {
        const productYear = product.data().year;
        const orderCount = orderData.docs.filter(
          (order) => order.data().year === productYear
        ).length;
        formattedData.push([productYear, product.data().name, orderCount]);
      });

      // Update the state with the formatted data
      setChartData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="350px"
      loader={<div>Loading Chart</div>}
      data={chartData}
      options={options}
      // options={{
      //   title: 'Product and Order Data',
      //   hAxis: { title: 'Year' },
      //   vAxis: { title: 'Count' },
      // }}
    />
  );
}
