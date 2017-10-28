import { CSSModule } from '../index';

export interface DropdownItemProps {
  disabled?: boolean;
  divider?: boolean;
  tag?: React.ReactType;
  header?: boolean;
  onClick?: (event: React.MouseEvent<any>) => void;
  className?: string;
  cssModule?: CSSModule;
  href?: string;
}

export const DropdownItem: React.StatelessComponent<DropdownItemProps>;
