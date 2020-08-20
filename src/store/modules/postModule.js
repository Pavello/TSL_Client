const state = {
  newsList: [
    {
      id: 1,
      title: 'Rozpoczęcie sezonu letniego',
      date: '2020.01.01',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean non eros non metus ullamcorper venenatis. Fusce at nulla iaculis,
      vehicula leo in, faucibus turpis. Cras sed ex laoreet, accumsan turpis ac,
      ullamcorper arcu. In malesuada facilisis eros eget elementum. Nulla facilisi. Vivamus c
      ondimentum libero sed mi auctor tincidunt. Suspendisse potenti. Suspendisse
      a metus sed arcu scelerisque porttitor.
      Suspendisse non accumsan sapien.`,
    },
    {
      id: 2,
      title: 'Zwyciezcy turnieju finałowego sezonu zimowego',
      date: '2020.01.01',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean non eros non metus ullamcorper venenatis. Fusce at nulla iaculis,
      vehicula leo in, faucibus turpis. Cras sed ex laoreet, accumsan turpis ac,
      ullamcorper arcu. In malesuada facilisis eros eget elementum. Nulla facilisi. Vivamus c
      ondimentum libero sed mi auctor tincidunt. Suspendisse potenti. Suspendisse
      a metus sed arcu scelerisque porttitor.
      Suspendisse non accumsan sapien.`,
    },
    {
      id: 3,
      title: 'Gramy pomimo koronwirusa!',
      date: '2020.01.01',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean non eros non metus ullamcorper venenatis. Fusce at nulla iaculis,
      vehicula leo in, faucibus turpis. Cras sed ex laoreet, accumsan turpis ac,
      ullamcorper arcu. In malesuada facilisis eros eget elementum. Nulla facilisi. Vivamus c
      ondimentum libero sed mi auctor tincidunt. Suspendisse potenti. Suspendisse
      a metus sed arcu scelerisque porttitor.
      Suspendisse non accumsan sapien.`,
    },
  ],
};

const getters = {
  allPosts: (state) => state.newsList,
  getPostById: (state) => (id) => state.newsList.find((post) => post.id === id),
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
