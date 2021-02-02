import base from './base';
// eslint-disable-next-line import/no-cycle
import dark from './dark';
// eslint-disable-next-line import/no-cycle
import { IThemes } from './utils';

/**
 * The default theme to load
 */
export const DEFAULT_THEME: string = 'dark';

export const themes: IThemes = {
  base,
  dark,
};
