import { Item } from "./itemInterface";

const formatJson = (data: Item[], parentId: number): Item[] => {
  const formatted = data
    .filter((item) => item.parentId === parentId)
    .map((item) => ({ ...item, children: formatJson(data, item.id) }))
    .sort((a, b) => a.id - b.id);

  return formatted;
};

export { formatJson };
