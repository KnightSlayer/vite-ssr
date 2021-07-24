import { initMoviesStore } from './moviesStore'

const initiators = [
  initMoviesStore,
]

export default (serverData: any) => {
  initiators.forEach(init => init(serverData));
};
