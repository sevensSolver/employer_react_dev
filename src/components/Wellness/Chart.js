import { XAxis, Tooltip, LineChart, CartesianGrid, Line } from 'recharts';
import styles from './index.module.css';
const lineData = [
  { name: '1', uv: 1000 },
  { name: '2', uv: 1500 },
  { name: '3', uv: 2000 },
  { name: '4', uv: 2780 },
  { name: '5', uv: 3890 },
  { name: '6', uv: 2390 },
  { name: '7', uv: 3490 },
  { name: '8', uv: 7490 },
  { name: '9', uv: 5490 },
  { name: '10', uv: 3490 },
];

const Chart = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '50%' }}>
      <p className={styles.sectionTitle}>Wellness Analytics</p>
      <LineChart
        width={390}
        height={220}
        data={lineData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid stroke="#e5e5e5" horizontal={true} vertical={false} />
        <XAxis
          dataKey="name"
          tick={{ fill: 'grey', fontSize: 12 }}
          tickLine={{ display: 'none' }}
          interval={0}
          stroke="#e5e5e5"
        />
        <Tooltip contentStyle={{ lineHeight: '24px' }} />
        <Line type="basis" dataKey="uv" stroke="#3ab44d" />
      </LineChart>
    </div>
  );
};

export default Chart;
