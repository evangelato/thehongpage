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

/*
 * About Me Action Types
 */
export const GET_ABOUT_ME = 'GET_ABOUT_ME';

interface GetAboutMeAction {
    type: typeof GET_ABOUT_ME;
    content: string;
}

export type AboutMeTypes = GetAboutMeAction;

/*
 * About Me Action Creators
 */
export function getAboutMe(): any {
    return { type: GET_ABOUT_ME };
}
