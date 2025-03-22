export interface NavItem {
    id: string; // Section ID
    label: string; // Label to display in the navigation bar
}

export interface NavbarProps {
    navItems: NavItem[]; // List of navigation items passed as props
}
