import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--codeia-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--codeia-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--codeia-elements-terminal-textColor'),
    background: cssVar('--codeia-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--codeia-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--codeia-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--codeia-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--codeia-elements-terminal-color-black'),
    red: cssVar('--codeia-elements-terminal-color-red'),
    green: cssVar('--codeia-elements-terminal-color-green'),
    yellow: cssVar('--codeia-elements-terminal-color-yellow'),
    blue: cssVar('--codeia-elements-terminal-color-blue'),
    magenta: cssVar('--codeia-elements-terminal-color-magenta'),
    cyan: cssVar('--codeia-elements-terminal-color-cyan'),
    white: cssVar('--codeia-elements-terminal-color-white'),
    brightBlack: cssVar('--codeia-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--codeia-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--codeia-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--codeia-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--codeia-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--codeia-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--codeia-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--codeia-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
