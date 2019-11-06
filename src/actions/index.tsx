/*
 * Action Types
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
 * Action Creators
 */
export function openSidebar() {
    return { type: OPEN_SIDEBAR };
}

export function closeSidebar() {
    return { type: CLOSE_SIDEBAR };
}