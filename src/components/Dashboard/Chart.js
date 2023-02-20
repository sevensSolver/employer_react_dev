import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  LineChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';
import styles from './index.module.css';

const data = [
  { name: '1', uv: 1000, pv: 2400 },
  { name: '2', uv: 1500, pv: 1398 },
  { name: '3', uv: 2000, pv: 3800 },
  { name: '4', uv: 2780, pv: 3908 },
  { name: '5', uv: 3890, pv: 3800 },
  { name: '6', uv: 2390, pv: 3800 },
];

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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30 }}>
      <div className={styles.chartBox}>
        <p style={{ marginBottom: 10 }}>Policy Frequency</p>
        <div className={styles.chartInnerBox}>
          <ResponsiveContainer width="100%">
            <BarChart barGap={0} data={data}>
              <Tooltip />
              <Bar dataKey="pv" fill="#f9eae8" />
              <Bar dataKey="uv" fill="#f86a30" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.chartBox}>
        <p style={{ marginBottom: 10 }}>Policy Frequency</p>
        <div className={styles.chartInnerBox}>
          <ResponsiveContainer width="100%">
            <LineChart
              width={370}
              height={170}
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
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Chart;
