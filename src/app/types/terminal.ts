export interface ITerminal {
  write: (data: string) => void;
  resize: (cols: number, rows: number) => void;
  onData: (callback: (data: string) => void) => void;
} 