import { JestConfig, Path, TransformOptions } from './jest-types';
export declare function process(
  src: string,
  path: Path,
  config: JestConfig,
  transformOptions?: TransformOptions,
): string;
export declare function getCacheKey(
  fileData: string,
  filePath: Path,
  configStr: string,
  options?: TransformOptions,
): string;
