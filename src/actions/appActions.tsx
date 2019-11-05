/*
 * Action Types
 */
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

interface ToggleMessageAction {
    type: typeof TOGGLE_SIDEBAR;
    isSidebarOpen: boolean;
}

export type AppActionTypes = ToggleMessageAction;

/*
 * Action Creators
 */
export function toggleSidebar() {
    return { type: TOGGLE_SIDEBAR };
}