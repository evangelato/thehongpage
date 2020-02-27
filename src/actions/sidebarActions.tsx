/*
 * Sidebar Action Types
 */
export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';

interface OpenSidebarAction {
    type: typeof OPEN_SIDEBAR;
    isSidebarOpen: boolean;
}

interface CloseSidebarAction {
    type: typeof CLOSE_SIDEBAR;
    isSidebarOpen: boolean;
}

export type SidebarActionTypes = OpenSidebarAction | CloseSidebarAction;

/*
 * Sidebar Action Creators
 */
export function openSidebar(): any {
    return { type: OPEN_SIDEBAR };
}

export function closeSidebar(): any {
    return { type: CLOSE_SIDEBAR };
}
