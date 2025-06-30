import type { FileMap } from '../stores/files';

export interface Snapshot {
  chatIndex: string;
  files: FileMap;
  summary?: string;
}
