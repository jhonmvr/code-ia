import { atom, type ReadableAtom } from 'nanostores';
import type { EditorDocument, ScrollPosition } from '../../components/editor/codemirror/CodeMirrorEditor';
import type { FileMap } from './files';

export class EditorStore {
  documents = atom<Record<string, EditorDocument>>({});
  selectedFile = atom<string | undefined>(undefined);

  constructor(filesStore: any) {
    // Initialize editor store
  }

  get currentDocument(): ReadableAtom<EditorDocument | undefined> {
    return atom((get) => {
      const selectedFile = get(this.selectedFile);
      const documents = get(this.documents);
      return selectedFile ? documents[selectedFile] : undefined;
    });
  }

  setDocuments(files: FileMap) {
    // Set documents implementation
  }

  updateFile(filePath: string, content: string) {
    // Update file implementation
  }

  updateScrollPosition(filePath: string, position: ScrollPosition) {
    // Update scroll position implementation
  }

  setSelectedFile(filePath: string | undefined) {
    this.selectedFile.set(filePath);
  }
} 