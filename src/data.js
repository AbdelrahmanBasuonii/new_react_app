import { BarChart3, ShoppingBag, Terminal } from 'lucide-react';

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Selected work' },
  { id: 'lab', label: 'Project lab' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'contact', label: 'Contact' },
];

export const projects = [
  { id: 'calc', tag: '01 / Utility', title: 'Precision calculator', text: 'A keyboard-friendly calculator with expression history and clean state handling.', accent: 'coral', icon: Terminal },
  { id: 'store', tag: '02 / Commerce', title: 'Northstar goods', text: 'A focused storefront with live filtering, cart logic, and an intentional checkout path.', accent: 'mint', icon: ShoppingBag },
  { id: 'dash', tag: '03 / Analytics', title: 'Signal dashboard', text: 'An operational dashboard for spotting movement across revenue, retention, and traffic.', accent: 'sky', icon: BarChart3 },
];

export const products = [
  { name: 'Field Notes', category: 'Stationery', price: 18, color: '#f3c6a8' },
  { name: 'Ceramic Tumbler', category: 'Objects', price: 32, color: '#c9d8d3' },
  { name: 'Canvas Utility Bag', category: 'Carry', price: 46, color: '#b5c8db' },
  { name: 'Studio Cap', category: 'Wear', price: 28, color: '#e4d3aa' },
];
