import * as React from 'react';
import { Chart } from 'react-google-charts';
import './GanttChart.css'

function GanttChart() {
  return (
    <div className='rpgui-content rpgui-container framed-golden-2'>
      <div className='welcome'>
        <h1>Gantt Chart</h1>
      </div>
      <Chart
      className='gantt-container'
        chartType='Gantt'
        loader={<div>Loading Chart</div>}
        data={[
          [
            { type: 'string', label: 'Task ID' },
            { type: 'string', label: 'Task Name' },
            { type: 'string', label: 'Resource' },
            { type: 'date', label: 'Start Date' },
            { type: 'date', label: 'End Date' },
            { type: 'number', label: 'Duration' },
            { type: 'number', label: 'Percent Complete' },
            { type: 'string', label: 'Dependencies' }
          ],
          [
            'Refactor Code',
            'Refactor Code',
            'spring',
            new Date(2019, 2, 22),
            new Date(2019, 5, 20),
            null,
            null,
            null
          ],
          [
            '2019Summer',
            'Summer 2019',
            'summer',
            new Date(2019, 5, 21),
            new Date(2019, 8, 20),
            null,
            100,
            null
          ],
          [
            '2019Autumn',
            'Autumn 2019',
            'autumn',
            new Date(2019, 8, 21),
            new Date(2019, 11, 20),
            null,
            100,
            null
          ],
          [
            '2019Winter',
            'Winter 2019',
            'winter',
            new Date(2019, 11, 21),
            new Date(2020, 2, 21),
            null,
            100,
            null
          ],
          [
            '2020Spring',
            'Spring 2020',
            'spring',
            new Date(2020, 2, 22),
            new Date(2020, 5, 20),
            null,
            50,
            null
          ],
          [
            '2020Summer',
            'Summer 2020',
            'summer',
            new Date(2020, 5, 21),
            new Date(2020, 8, 20),
            null,
            0,
            null
          ],
          [
            '2020Autumn',
            'Autumn 2020',
            'autumn',
            new Date(2020, 8, 21),
            new Date(2020, 11, 20),
            null,
            0,
            null
          ],
          [
            '2020Winter',
            'Winter 2020',
            'winter',
            new Date(2020, 11, 21),
            new Date(2021, 2, 21),
            null,
            0,
            null
          ],
          [
            'Football',
            'Football Season',
            'sports',
            new Date(2019, 8, 4),
            new Date(2020, 1, 1),
            null,
            100,
            null
          ],
          [
            'Baseball',
            'Baseball Season',
            'sports',
            new Date(2020, 2, 31),
            new Date(2020, 9, 20),
            null,
            14,
            null
          ],
          [
            'Basketball',
            'Basketball Season',
            'sports',
            new Date(2019, 9, 28),
            new Date(2020, 5, 20),
            null,
            86,
            null
          ],
          [
            'Hockey',
            'Hockey Season',
            'sports',
            new Date(2019, 9, 8),
            new Date(2020, 5, 21),
            null,
            89,
            null
          ]
        ]}
        options={{
          height: 600,
          gantt: {
            trackHeight: 46
          }
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
}

export default GanttChart;
