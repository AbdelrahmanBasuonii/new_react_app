import { Plus, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data';

// Provides product filtering and cart interactions for the storefront demo.
export default function Store() {
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const categories = ['All', ...new Set(products.map((product) => product.category))];
  const visible = category === 'All' ? products : products.filter((product) => product.category === category);
  // Adds a selected product to the local shopping bag.
  const add = (product) => setCart([...cart, product]);
  return <div className="demo-shell store-shell"><div className="store-nav"><div><span className="store-logo">NORTHSTAR <i>goods</i></span><span className="store-sub">Objects for daily rituals</span></div><button className="cart-button"><ShoppingBag size={17} /> Bag <b>{cart.length}</b></button></div><div className="store-hero"><div><p className="eyebrow">Spring / 25 collection</p><h2>Useful things,<br /><em>beautifully considered.</em></h2><p>Quiet objects for louder ideas.</p></div><div className="store-shape"><span>New</span></div></div><div className="store-toolbar"><div>{categories.map((item) => <button key={item} className={category === item ? 'filter active' : 'filter'} onClick={() => setCategory(item)}>{item}</button>)}</div><span>{visible.length} objects</span></div><div className="product-grid">{visible.map((product) => <article className="product-item" key={product.name}><div className="product-visual" style={{ background: product.color }}><button onClick={() => add(product)} aria-label={`Add ${product.name} to bag`}><Plus size={18} /></button><div className="product-symbol">{product.name.slice(0, 1)}</div></div><div className="product-detail"><span>{product.category}</span><strong>{product.name}</strong><b>${product.price}</b></div></article>)}</div>{cart.length > 0 && <div className="cart-toast"><ShoppingBag size={17} /> {cart.length} item{cart.length > 1 ? 's' : ''} in your bag <span>${cart.reduce((sum, item) => sum + item.price, 0)}</span></div>}</div>;
}
