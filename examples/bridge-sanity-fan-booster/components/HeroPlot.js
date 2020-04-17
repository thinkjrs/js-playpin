import React from 'react';
import Plotly from 'plotly.js-dist';
import createPlotComponent from 'react-plotly.js/factory';

const Plot = createPlotComponent(Plotly);

export default () => (
  <Plot
    data={[
      {
        type: 'scatter',
        x: ['2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01'],
        y: [9213, 8515, 7304, 7449],
        marker: {
            color: '#ff0000'
        }
      },
    ]}

    layout={{
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      autosize: true,
      showlegend: false,
      xaxis: {
        showgrid: false,
      },
      yaxis: {
        showgrid: false,
        showticklabels: false,
        title: false
      },
      title: false,
      margin: {
          t: 10,
          b: 25,
          l: 20,
          r: 10 
      }
    }}
    style={{padding:0,margin:0, height:'13rem', width:'90%'}}
    config={{displaylogo: false, displayModeBar: false}}
    
  />
)
