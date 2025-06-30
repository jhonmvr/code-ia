import { atom, type WritableAtom } from 'nanostores';
import type { ITerminal } from '../../types/terminal';

export class TerminalStore {
  showTerminal: WritableAtom<boolean> = atom(false);
  boltTerminal: ITerminal | undefined;

  constructor(webcontainer: any) {
    // Initialize terminal store
  }

  toggleTerminal(value?: boolean) {
    this.showTerminal.set(value ?? !this.showTerminal.get());
  }

  attachTerminal(terminal: ITerminal) {
    // Attach terminal implementation
  }

  attachBoltTerminal(terminal: ITerminal) {
    this.boltTerminal = terminal;
  }

  onTerminalResize(cols: number, rows: number) {
    // Terminal resize implementation
  }
} 