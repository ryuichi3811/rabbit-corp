import { url } from '..';

export const pm = (locale: string, path: string) => {
  return url + locale + path;
};

export const pmReve = (locale: string, path: string) => {
  return url + locale + '/reve' + path;
};

export const pmNorika = (locale: string, path: string) => {
  return url + locale + '/norika' + path;
};
