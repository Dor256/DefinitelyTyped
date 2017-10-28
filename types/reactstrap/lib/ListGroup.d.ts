import { CSSModule } from '../index';

export interface ListGroupProps {
  tag?: React.ReactType;
  flush?: boolean;
  className?: string;
  cssModule?: CSSModule;
}

export const ListGroup: React.StatelessComponent<ListGroupProps>;
