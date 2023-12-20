import { useState, useEffect, FC } from 'react';
import data from '../../api/data.json';
import { Item } from './utils/itemInterface';
import { formatJson } from './utils/formatJson';
import { AccordionItem } from './lib/AccordionItem';
import { BoxItem } from './lib/BoxItem';

const Table: FC = () => {
  const [formattedData, setFormattedData] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortType, setSortType] = useState<string>('none');

  useEffect(() => {
    const formattedJson = formatJson(data as Item[], 0);
    setFormattedData(formattedJson);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      const formattedJson = formatJson(data as Item[], 0);
      setFormattedData(formattedJson);
    } else {
      const filtered = formattedData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFormattedData(filtered);
    }
  };
  const handleSort = () => {
    const sortedData = [...formattedData];
    if (sortType === 'mix-max') {
      sortedData.sort(
        (a, b) =>
          parseFloat(a.balance.replace(/[$,]/g, '')) -
          parseFloat(b.balance.replace(/[$,]/g, ''))
      );
    } else if (sortType === 'max-min') {
      sortedData.sort(
        (a, b) =>
          parseFloat(b.balance.replace(/[$,]/g, '')) -
          parseFloat(a.balance.replace(/[$,]/g, ''))
      );
    } else {
      sortedData.sort((a, b) => a.id - b.id);
    }
    setFormattedData(sortedData);
  };

  return (
    <div className="app">
      <div className="bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Поиск</button>
      </div>
      <div className="bar">
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="none">Очистить</option>
          <option value="mix-max">Сортировка по балансу (Mix-Max)</option>
          <option value="max-min">Сортировка по балансу (Max-Min)</option>
        </select>
        <button onClick={handleSort}>Применить</button>
      </div>
      <div>{formattedData.map((item) => (item.children.length > 0 ?
        <AccordionItem key={item.id} item={item} /> :
        <BoxItem key={item.id} item={item} />))}</div>
    </div>
  );
};

export { Table };
