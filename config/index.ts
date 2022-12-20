import type { PartialConfigType } from 'PackageNameByCore';
import { PROGRAMPATH } from 'PackageNameByCore/build/process-env';
import path from 'path';

const conf: PartialConfigType = {
  compiler: 'tsc',
  alias: {
    'libraryNameTemplate': path.resolve(PROGRAMPATH, './umd'),
  },
};

export default conf;
