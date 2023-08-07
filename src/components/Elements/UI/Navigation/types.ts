export interface NavigationItem {
  label: string;
  to: string;
  onClick?: () => void;
  url?: string;
}
