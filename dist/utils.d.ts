import { TsJestConfig } from './jest-types';
export declare function getJestConfig(root: any): any;
export declare function getTSJestConfig(globals: any): TsJestConfig;
export declare function getTSConfigOptionFromConfig(globals: any): any;
export declare function mockGlobalTSConfigSchema(
  globals: any,
):
  | {
      'ts-jest': {
        tsConfigFile: string;
      };
    }
  | {
      __TS_CONFIG__: any;
    };
export declare function getTSConfig(
  globals: any,
  collectCoverage?: boolean,
): any;
