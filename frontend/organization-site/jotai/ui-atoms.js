import { atom } from 'jotai'

const showLeftSidebarAtom = atom(true)
const showRightSidebarAtom = atom(false)
const isNavigatingAtom = atom(false)

export { showLeftSidebarAtom, showRightSidebarAtom, isNavigatingAtom }
