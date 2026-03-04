import { memo } from 'react';
import { CARD_BASE, CARD_HOVER } from '../constants/classNames';
import { cn } from '../utils/cn';

const Card = memo(function Card({ children, className = "", hover = true }) {
  return (
    <div className={cn(CARD_BASE, hover && CARD_HOVER, className)}>
      {children}
    </div>
  );
});

Card.displayName = 'Card';
export default Card;
