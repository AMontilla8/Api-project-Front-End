import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, Area, XAxis,
    YAxis, ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush,
    LineChart } from 'recharts';

const data = [
  { name: 'Date', Recovered: 5990, Deaths: 9800, ConfirmCases: 11400 },
  { name: 'Date', Recovered: 9868, Deaths: 9967, ConfirmCases: 11506 },
  { name: 'Date', Recovered: 7397, Deaths: 1098, ConfirmCases: 1989 },
  { name: 'Date', Recovered: 9480, Deaths: 1200, ConfirmCases: 11228 },
  { name: 'Date', Recovered: 8520, Deaths: 1108, ConfirmCases: 11100 },
  { name: 'Date', Recovered: 6400, Deaths: 680, ConfirmCases: 11700 },
];

// 

export default class Graph extends Component {
  static display = 'ComposedChart'
    render() {
        return( 
            <div className="line-charts">
            <p> Corona Cases </p>
            <div className="composed-chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart width={800} height={400} data={data}
                  margin={{ top: 20, right: 20, bottom: 5, left: 20 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Legend layout="vertical" align="right" verticalAlign="middle"/>
                  <CartesianGrid stroke="#000000" />
                  <Tooltip />
                  <Area type="monotone" dataKey='ConfirmCases' fill="#008b8b" stroke="red" />
                  <Line type="monotone" dataKey="Recovered" stroke="#00ffff" />
                  <Bar dataKey="Deaths" barSize={20} fill="#413ea0" />
                  <ReferenceLine x="Date" stroke="red" label="Max PV PAGE" />
                  <ReferenceDot x="Date" y={1300} stroke="red" />
                  <Brush>
                    <LineChart>
                      <Line dataKey="Recovered" stroke="#6E00AD" dot={false} />
                    </LineChart>
                  </Brush>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
    };
};