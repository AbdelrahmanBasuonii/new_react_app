// Displays one labeled dashboard KPI and its change indicator.
export default function Metric({ label, value, change }) {
  return <div className="metric"><span>{label}</span><strong>{value}</strong><b><span>↗</span> {change}</b></div>;
}
