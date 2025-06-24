export interface __Tab__ {
  name: string;
  href: string;
}

export interface __TabsButtonProps__ {
  tab: __Tab__;
  selected: boolean;
  onSelect: () => void;
}
