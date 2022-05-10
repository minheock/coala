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
  solvedContents: [],
  solvingContents: [],
  editContent: null,
  hasMoreContents: true,
};

export const LOAD_MORE_CONTENTS = 'LOAD_MORE_CONTENTS';
export const LOAD_CONTENTS_SUCCESS = 'LOAD_CONTENTS_SUCCESS';
export const LOAD_USERCONTENTS_SUCCESS = 'LOAD_USERCONTENTS_SUCCESS';
export const SOLVED_CONTENTS_SUCCESS = 'SOLVED_CONTENTS_SUCCESS';
export const EDIT_CONTENT_REQUEST = 'EDIT_CONTENT_REQUEST';
export const CONTENT_LIKE_REQUEST = 'CONTENT_LIKE_REQUEST';
export const CONTENT_UNLIKE_REQUEST = 'CONTENT_UNLIKE_REQUEST';
const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_USERCONTENTS_SUCCESS:
        draft.mainContents = [...action.data];
        break;
      case LOAD_CONTENTS_SUCCESS:
        draft.mainContents = [...action.data];
        break;
      case EDIT_CONTENT_REQUEST:
        draft.editContent = action.data;
        break;
      case LOAD_MORE_CONTENTS:
        draft.mainContents = [...action.data];
        break;
      case CONTENT_LIKE_REQUEST:
        {
          const isLike = draft.mainContents.find(
            el => el.id === action.data.contentId,
          );
          isLike.likers.push(action.data.userId);
        }
        break;
      case CONTENT_UNLIKE_REQUEST:
        {
          const isLike = draft;
        }
        break;
      default:
        break;
    }
  });

export default reducer;
