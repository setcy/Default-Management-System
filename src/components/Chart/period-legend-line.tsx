import React from 'react';
import {Axis, Chart, Legend, Line, Tooltip} from 'bizcharts';
import {Spin} from '@arco-design/web-react';
import CustomTooltip from './customer-tooltip';
import useBizTheme from '@/utils/useChartTheme';

const lineColor = ['#21CCFF', '#313CA9', '#249EFF'];
function PeriodLine({ data, loading }: { data: any[]; loading: boolean }) {
  return (
    <Spin loading={loading} style={{ width: '100%' }}>
      <Chart
          theme={useBizTheme()}
          forceUpdate
          height={370}
          padding={[10, 20, 120, 60]}
          data={data}
          autoFit
          scale={{year: 'year'}}
          className={'chart-wrapper'}
      >
          <Line shape="smooth" position="year*count" color={['name', lineColor]}/>
          <Tooltip crosshairs={{type: 'x'}} showCrosshairs shared>
              {(title, items) => {
                  return <CustomTooltip title={title} data={items}/>;
              }}
          </Tooltip>
          <Axis
              name="count"
              label={{
                  formatter(text) {
                      return `${Number(text)}`;
                  },
              }}
          />
          <Legend
              name="name"
              marker={(_, index) => {
                  return {
                      symbol: 'circle',
                      style: {
                          fill: lineColor[index],
                          r: 4,
                      },
                  };
              }}
        />
      </Chart>
    </Spin>
  );
}

export default PeriodLine;
