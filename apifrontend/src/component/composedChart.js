import React, { Component } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Bar, Area, XAxis,
    YAxis, ReferenceLine, ReferenceDot, Tooltip, Legend, CartesianGrid, Brush,
    LineChart } from 'recharts';

const data = [
  { name: 'trial 1', uv: 5990, pv: 9800, amt: 91400 },
  { name: 'trial 2', uv: 9868, pv: 9967, amt: 91506 },
  { name: 'trial 3', uv: 7397, pv: 1098, amt: 989 },
  { name: 'trial 4', uv: 9480, pv: 1200, amt: 1228 },
  { name: 'trial 5', uv: 8520, pv: 1108, amt: 1100 },
  { name: 'trial 6', uv: 6400, pv: 680, amt: 1700 },
];


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
                  <Area type="monotone" dataKey='amt' fill="#008b8b" stroke="red" />
                  <Line type="monotone" dataKey="uv" stroke="#00ffff" />
                  <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                  <ReferenceLine x="trial 2" stroke="red" label="Max PV PAGE" />
                  <ReferenceDot x="trial 2" y={1300} stroke="red" />
                  <Brush>
                    <LineChart>
                      <Line dataKey="uv" stroke="#6E00AD" dot={false} />
                    </LineChart>
                  </Brush>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
    };
};