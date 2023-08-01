import './App.css';
import Chart from 'react-apexcharts'

import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
const [options, setOptions] = useState( {
  chart: {
    id: 'apexchart-example'
  },
  xaxis: {
    categories: []
  }
})

const [series, setSeries] = useState([{
  name: 'series-1',
  data: []
}])




useEffect(() => {

  const age = [];
  const salary = [];
  axios.get("https://dummy.restapiexample.com/api/v1/employees")
  .then(response => {
    console.log("responses", response);
    response.data.data.map(item => {
      age.push(item.employee_age);
      salary.push(item.employee_salary);
    })

    setOptions({
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: salary
      }
    })

    setSeries([{
      name: 'series-1',
      data: age
    }])



  })
}, [])

  return (
      <Chart options={options} series={series} type="bar" width={800} height={500} />
    )
  }


export default App
