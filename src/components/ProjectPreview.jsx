export default function ProjectPreview({ type }) {
  if (type === 'calc') return <div className="mini-calc"><div>12 <span>× 8</span></div><section><i /><i /><i /><i /><i /><i /><i /><i /></section></div>;
  if (type === 'store') return <div className="mini-store"><div className="mini-product" /><div><b>Northstar</b><span>Objects for daily rituals</span></div></div>;
  return <div className="mini-chart"><div className="chart-bars"><i style={{ height: '40%' }} /><i style={{ height: '65%' }} /><i style={{ height: '50%' }} /><i style={{ height: '82%' }} /><i style={{ height: '72%' }} /><i style={{ height: '95%' }} /></div><span>+24.8%</span></div>;
}
