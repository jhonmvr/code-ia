import type { FileMap } from '../store/files';

export interface Snapshot {
  chatIndex: string;
  files: FileMap;
  summary?: string;
}
