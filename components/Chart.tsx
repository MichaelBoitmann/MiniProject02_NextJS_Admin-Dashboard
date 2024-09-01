"use client";

import { Card, Title, Text, AreaChart } from "@tremor/react";


const data = [
  {
    Month: "Jan 24",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 24",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Mar 24",
    Sales: 3890,
    Profit: 2980,
  },
  {
    Month: "Apr 24",
    Sales: 4890,
    Profit: 3400,
  },
  {
    Month: "May 24",
    Sales: 5890,
    Profit: 3398,
  },
  {
    Month: "Jun 24",
    Sales: 4890,
    Profit: 3980,
  },
];

export default function Chart() {
  return <Card className="mt-8">
    <Title>Performance</Title>
    <Text>Comparison Between Sales and Profit</Text>
    <AreaChart 
      className="mt-4 h-80"
      data={data}
      categories={['Sales', 'Profit']}
      index="Month"
      colors={['indigo', 'fuchsia']}
      valueFormatter={(number: number) => 
        `$${Intl.NumberFormat("us").format(number).toString()}`
      }
      yAxisWidth={100}
    />
  </Card>
}
