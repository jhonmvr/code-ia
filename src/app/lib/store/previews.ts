import { atom, type ReadableAtom } from 'nanostores';

export class PreviewsStore {
  previews: ReadableAtom<Record<string, any>> = atom({});

  constructor(webcontainer: any) {
    // Initialize previews store
  }
} 