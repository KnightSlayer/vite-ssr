import * as homeRoute from './data/home';
import * as aboutRoute from './data/about';

type TRouteData = {
  checkPath: (s: string) => boolean;
  getData: (params: string) => any
}

const routesList: TRouteData[] = [
  aboutRoute,
  homeRoute,
];

export const getPageData = async (path: string) => {
  const theRoute = routesList.filter(r => r.checkPath(path))[0];

  return theRoute?.getData(path);
}
