declare module 'vite-plugin-style-import' {
    import { Plugin } from 'vite';

    interface Lib {
      libraryName: string;
      esModule?: boolean;
      resolveStyle: (name: string) => string;
    }

    interface Options {
      libs: Lib[];
    }

    export function styleImport(options: Options): Plugin;
    export type VitePluginStyleImport = Plugin;
    export default styleImport;
  }
