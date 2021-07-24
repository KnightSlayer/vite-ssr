import { init as moviesInit } from './moviesStore'

const handlers = [
  moviesInit,
]

export default (serverData: any) => {
  // for server this could be called several times.
  // check different users data
  handlers.forEach(init => init(serverData));

  // setTimeout(() => {
  //   clear all stores ??
  // })
};
