import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Item } from '../utils/itemInterface';
import { memo, FC } from 'react';


interface AccordionItemProps {
  item: Item;
}

const AccordionItem: FC<AccordionItemProps> = memo(({ item }) => {
  return (
    <Accordion elevation={0} className="accordion-container">
      <AccordionSummary className="accordion-summary">
        <div className="summary-content">
          <Typography>{item.id}</Typography>
          <Typography>{item.name}</Typography>
          <Typography>{item.balance}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails className="details">
        <div>
          {item.children.map((child) => <AccordionItem key={child.id} item={child} />)}
        </div>
      </AccordionDetails>
    </Accordion>
  );
});

export { AccordionItem };
