import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Item } from '../utils/itemInterface';
import { FC, memo } from 'react';

interface BoxItemProps {
  item: Item;
}

const BoxItem: FC<BoxItemProps> = memo(({ item }) => {
  return (
    <Box className="box-container">
      <div className="box-content">
        <Typography>{item.id}</Typography>
        <Typography>{item.name}</Typography>
        <Typography>{item.balance}</Typography>
      </div>
    </Box>
  );
});

export { BoxItem };
