import React from 'react';
import Plotly from 'plotly.js-dist';
import createPlotComponent from 'react-plotly.js/factory';

const Plot = createPlotComponent(Plotly);

export default () => (
  <Plot
    data={[
      {
        type: 'pie',
        labels: ['Spent', 'Remaining'],
        values: [1991, 1009],
        marker: {
            colors: ['#ff0000', 'rgb(50, 50, 50)']
        },
        textinfo: 'label+value',
      },
    ]}

    layout={{
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      autosize: true,
      showaxeslabels: false,
      showlegend: false,
      xaxis: {
        showgrid: false,
        title: false
      },
      yaxis: {
        showgrid: false,
        showaxeslabels: false,
        title: false
      },
      title: false,
      margin: {
          t: 0,
          b: 0,
          l: 0,
          r: 0
      }
    }}
    style={{padding:0,margin:0, height:'100%', width:'100%'}}
    config={{displayModeBar: false}}
    
  />
)
