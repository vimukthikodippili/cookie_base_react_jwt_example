import { useEffect, useState } from 'react';
import api from '../api/axios';

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await api.get('/items');
        setItems(res.data);
      } catch (err) {
        console.error('Failed to load items:', err.response?.data?.message || err.message);
      }
    }
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Shop Items</h2>
      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item._id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}