export interface HamburgerMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

export interface MenuItem {
    id: string;
    label: string;
    onClick: () => void;
}

export type MenuItems = MenuItem[];