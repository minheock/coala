import produce from 'immer';

// export const dummyContent = {
//   id: 20,
//   userInfo: {
//     id: 1,
//     username: '성민',
//     profile: 'https://joeschmoe.io/api/v1/random',
//   },
//   likers: [1, 2, 3, 4, 5, 6],
//   done: true,
//   description:
//     'It has been released as opensource in 2018 and has continually evolved to receive 10k GitHub ⭐️ Stars.It has been released as opensource in 2018 and has continually evolved to receive 10k GitHub ⭐️ Stars.',
//   updateAt: '2022-03-01 04:45:40',
//   title: '이러이러한 굉장한 제목',
//   stack: 'JavaScript',
//   thumbnail:
//     'https://velog.velcdn.com/images/limsaehyun/post/8f076de5-1a20-4e8b-a2bb-19e080c8d2c5/image.jpg',
// };

const initialized = {
  mainContents: [],
  or: false,
};

export const LOAD_CONTENTS_SUCCESS = 'LOAD_CONTENTS_SUCCESS';

export const CONTENT_LIKE_REQUEST = 'CONTENT_LIKE_REQUEST';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONTENT_LIKE_REQUEST:
        draft.or = true;
        break;
      case LOAD_CONTENTS_SUCCESS:
        draft.mainContents = [...action.data];
        break;
      default:
        break;
    }
  });

export default reducer;
