import produce from 'immer';

export const dummyContent = {
  id: 1,
  userInfo: {
    userId: 1,
    username: '성민',
    profile: 'https://joeschmoe.io/api/v1/random',
  },
  likers: [1, 2, 3, 4, 5, 6],
  solved: true,
  description:
    'It has been released as opensource in 2018 and has continually evolved to receive 10k GitHub ⭐️ Stars.It has been released as opensource in 2018 and has continually evolved to receive 10k GitHub ⭐️ Stars.',
  updateAt: '2022-03-01 04:45:40',
  title: '이러이러한 굉장한 제목',
  stack: 'JavaScript',
  thumbnail:
    'https://velog.velcdn.com/images/limsaehyun/post/8f076de5-1a20-4e8b-a2bb-19e080c8d2c5/image.jpg',
  editorBody: `<p><img src="https://uicdn.toast.com/toastui/img/tui-editor-bi.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><h1>Awesome Editor!</h1><p>It has been <em>released as opensource in 2018</em> and has <del>continually</del> evolved to <strong>receive 10k GitHub ⭐️ Stars</strong>.</p><h2>Create Instance</h2><p>You can create an instance with the following code and use <code data-backticks="1">getHtml()</code> and <code data-backticks="1">getMarkdown()</code> of the <a href="https://github.com/nhn/tui.editor">Editor</a>.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const editor = new Editor(options);</code></pre></div><blockquote><p>See the table below for default options</p><blockquote><p>More API information can be found in the document</p></blockquote></blockquote><table><thead><tr><th><p>name</p></th><th><p>type</p></th><th><p>description</p></th></tr></thead><tbody><tr><td><p>el</p></td><td><p><code data-backticks="1">HTMLElement</code></p></td><td><p>container element</p></td></tr></tbody></table><h2>Features</h2><ul><li><p>CommonMark + GFM Specifications</p><ul><li><p>Live Preview</p></li><li><p>Scroll Sync</p></li><li><p>Auto Indent</p></li><li><p>Syntax Highlight</p><ol><li><p>Markdown</p></li><li><p>Preview</p></li></ol></li></ul></li></ul><h2>Support Wrappers</h2><blockquote><ul><li><p>Wrappers</p><ol><li class="task-list-item checked" data-task="true" data-task-checked="true"><p>React</p></li><li class="task-list-item checked" data-task="true" data-task-checked="true"><p>Vue</p></li><li class="task-list-item" data-task="true"><p>Ember</p></li></ol></li></ul></blockquote>`,
};

const initialized = {
  mainContents: [dummyContent],
  or: false,
};

export const CONTENT_LIKE_REQUEST = 'CONTENT_LIKE_REQUEST';

const reducer = (state = initialized, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CONTENT_LIKE_REQUEST:
        draft.or = true;
        break;
      default:
        break;
    }
  });

export default reducer;
