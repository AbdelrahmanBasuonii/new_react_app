import { Terminal } from 'lucide-react';
import { useState } from 'react';

// Provides the interactive calculator demo and its local calculation history.
export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [history, setHistory] = useState([]);
  // Applies a calculator key to the current display and expression.
  const press = (key) => {
    if (key === 'AC') { setDisplay('0'); setExpression(''); return; }
    if (key === '=') {
      try { const result = Function(`"use strict"; return (${expression || display})`)(); const line = `${expression || display} = ${result}`; setDisplay(String(result)); setExpression(String(result)); setHistory([line, ...history].slice(0, 4)); } catch { setDisplay('Error'); setExpression(''); }
      return;
    }
    if (key === '±') { setDisplay(String(Number(display) * -1)); return; }
    if (key === '%') { setDisplay(String(Number(display) / 100)); return; }
    if (key === '.') { if (!display.includes('.')) setDisplay(`${display}.`); return; }
    if ('0123456789'.includes(key)) { const next = display === '0' ? key : display + key; setDisplay(next); setExpression(expression + key); return; }
    if ('+-×÷'.includes(key)) { setExpression(`${expression || display}${key === '×' ? '*' : key === '÷' ? '/' : key}`); setDisplay('0'); }
  };
  return <div className="demo-shell calculator-shell"><div className="demo-heading"><div><span className="demo-label"><Terminal size={15} /> Precision calculator</span><h2>Numbers, without the noise.</h2></div><span className="live-pill"><i /> Live demo</span></div><div className="calculator-body"><div className="calc-history"><p className="eyebrow">Recent calculations</p>{history.length ? history.map((item) => <div key={item}>{item}</div>) : <span className="muted">Your calculation history will appear here.</span>}</div><div className="calc-machine"><div className="calc-display"><small>{expression || 'Ready when you are'}</small><strong>{display}</strong></div><div className="calc-keys">{['AC','±','%','÷','7','8','9','×','4','5','6','-','1','2','3','+','0','.','='].map((key) => <button key={key} className={['÷','×','-','+','='].includes(key) ? 'calc-key operator' : key === 'AC' ? 'calc-key clear' : 'calc-key'} onClick={() => press(key)}>{key}</button>)}</div></div></div></div>;
}
