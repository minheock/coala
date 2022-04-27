'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          done: 0,
          userId: 1,
          title: '삼항연산자의 다중 조건 사용할 때의 질문입니다',
          content:
            '<p><img src="https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F1.png?alt=media" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>&lt;div className="info"&gt;\n  {isEdit ? ((\n    &lt;input\n      className="location_info"\n      ref={localLocationInput}\n      value={localLocation}\n      onChange={e =&gt; setLocalLocation(e.target.value)}\n    /&gt;\n  ),(&lt;textarea\n    ref={localContentInput}\n    value={localContent}\n    onChange={e =&gt; setLocalContent(e.target.value)}\n  /&gt;)) : (\n    location,content\n  )}\n&lt;/div&gt;</code></pre></div><p>삼항연산자를 다중으로 사용할 시 마지막 태그 및 변수만 출력되는 현상이 나타났습니다</p><p>어째서 제가 처음 쓴 코드는 어째서 뒷내용만 출력되는지 알고 싶습니다 (제가 놓치는 부분이 정확히 어떤것인지 잘 모르겠습니다 seal)</p>',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F1.png?alt=media',
          description:
            '삼항연산자를 다중으로 사용할 시 마지막 태그 및 변수만 출력되는 현상이 나타났습니다</p><p>어째서 제가 처음 쓴 코드는 어째서 뒷내용만 출력되는지 알고 싶습니다 (제가 놓치는 부분이 정확히 어떤것인지 잘 모르겠습니다)',
          stack: 'JavaScript',
          chatroomId: '1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 2,
          title: 'How to sequelize migrate',
          content:
            '<p>현재 쿠키 설정은 domain: "*"와 httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 이 세 옵션만 설정한 상태입니다.</p><p>조사를 한 결과 클라이언트와 서버의 도메인이 다르고, 크롬의 samesite 기본값이 lax로 설정되어 있기 때문에,</p><p>이를 해결하기 위해 SameSite 속성을 None으로 변경하고 secure = true 로 설정해 주어야 한다는 글을 보았습니다.</p><p>여기서 secure 옵션을 true로 설정하려면 클라이언트와 서버 모두 https로 통신해야 한다는 것도 확인했습니다.</p><p>서로 다른 도메인 간의 쿠키 전송을 위해 , 어떤 쿠키 설정 옵션들을 더 바꿔보고 시도해 보는 게 더 좋을까요?</p><p>만약에 더 이상 설정할 수 있는 다른 쿠키 옵션이 없다면, https 배포 후 SameSite=None, secure = true 옵션 설정까지 이루어져야 이 문제를 해결할 수 있겠다고 이해하는게 맞을까요?</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const options = {\n          httpOnly: true,\n          //https 배포 후, 추가할 설정입니다.\n          // sameSite: "none",\n          // secure: true\n          domain: "*",\n          maxAge: 1000 * 60 * 60 * 24 * 7,\n        };</code></pre></div><p><img src="https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F2.png?alt=media" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F2.png?alt=media',
          description:
            '현재 쿠키 설정은 domain:"*"와 httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 이 세 옵션만 설정한 상태입니다.조사를 한 결과 클라이언트와 서버의 도메인이 다르고, 크롬의 samesite 기본값이 lax로 설정되어 있기 ...',
          stack: 'SQL',
          chatroomId: '2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 3,
          title: 'webpack live server 실행 불가능 문제',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>파이널 프로젝트 진행중 create-react-app대신 babel과 webpack을 사용하여 리엑트 환경을 구축하였습니다.</p><p>npm start명령어 실행 시, 웹페이지가 뜨긴 하지만 새로고침(F5)를 누르거나 에러코드가 생겼을 때 수정후 코드를 저장하고 실행하면</p><p>cannot GET/ 이라는 에러가 뜨기때문에</p><p>다시 home(기본 host 주소)로 돌아간 후 다시 라우트된 링크를 클릭해야만 페이지 확인이 가능합니다.</p><p>다시말해 live-server의 기능이 전혀 실행되지 않는 것 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>구글링을 통해 webpack을 수정하였으나 해결되지 않았습니다.',
          thumbnail: null,
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?파이널 프로젝트 진행중 create-react-app대신 babel과 webpack을 사용하여 리엑트 환경을 구축하였습니다.npm start명령어 실행 시, 웹페이지가 뜨긴 하지만 새로고침(F5)를 누르거나 ...',
          stack: 'Shell',
          chatroomId: '3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 4,
          title: 'sprint-practice-deploy EC2, RDS 에러',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>im-sprint-practice-deploy</p><p><br class="ProseMirror-trailingBreak"></p><p>EC2 인스턴스를 통한 서버 실행 후 포스트맨 테스트 시 에러</p><p>MySQL 클라이언트를 통한 RDS DB 인스턴스 및 EC2 인스턴스 서버 연결 에러</p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>인터넷 검색</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>UrClass 지시 사항 중 놓친 것이 없는 것 같은데도 에러가 발생합니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>ubuntu@ip-172-31-44-27:~/im-sprint-practice-deploy/server$ sudo npm start\n\n&gt; server@1.0.0 start /home/ubuntu/im-sprint-practice-deploy/server\n&gt; node app.js\n\n서버가 80번에서 작동중입니다.\nIgnoring invalid configuration option passed to Connection: acquireTimeout. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\nError: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)</code></pre></div>',
          thumbnail: null,
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?im-sprint-practice-deployEC2 인스턴스를 통한 서버 실행 후 포스트맨 테스트 시 에러MySQL 클라이언트를 통한 RDS DB 인스턴스 및 EC2 인스턴스 서버 연결 에러안 되는 부분을 해...',
          stack: 'Bash',
          chatroomId: '4',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          done: 0,
          title: 'mysql 연결이 안됩니다',
          content:
            '<ol><li><p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>Learn SQL Part3 을 진행 중입니다.</p><p>아래와 같은 오류로 인해 스프린트 진행이 안되고 있습니다.</p></li></ol><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>&gt; learn-sql@1.0.0 test:part-3\n&gt; mocha __tests__/part3.test.js\n\nlearnmysql\n\n\n  part 3. 데이터베이스 연결과 스키마\n    part 3-1. connection test\n\n      &lt;YOUR DATABASE CONFIG&gt;\n  \n      host : localhost\n      user : root\n      password : 0000\n      \n      1) should be successful by initialize factoryService instance.\n      2) should be successful to query via factoryService instance.\n        cannot terminate connection of disconnected state.\n    part 3-2. schema\n      3) "before all" hook for "Q 3-1. 현재 있는 데이터베이스에 존재하는 모든 테이블 정보를 보기위한 SQL을 작성해주세요."\n        cannot terminate connection of disconnected state.\n\n  🏭factory service ends.\n\n\n  0 passing (39ms)\n  3 failing\n\n  1) part 3. 데이터베이스 연결과 스키마\n       part 3-1. connection test\n         should be successful by initialize factoryService instance.:\n     Error: the string "ER_BAD_DB_ERROR: Unknown database "learnmysql"" was thrown, throw an Error :)\n      at processTicksAndRejections (node:internal/process/task_queues:96:5)\n\n  2) part 3. 데이터베이스 연결과 스키마\n       part 3-1. connection test\n         should be successful to query via factoryService instance.:\n     Uncaught Error: Cannot enqueue Query after fatal error.\n      at Protocol._validateEnqueue (node_modules/mysql/lib/protocol/Protocol.js:212:16)\n      at Protocol._enqueue (node_modules/mysql/lib/protocol/Protocol.js:138:13)\n      at Connection.query (node_modules/mysql/lib/Connection.js:198:25)\n      at /Users/sg.yksv77/Desktop/섹션3/im-sprint-learn-sql/lib/common/mysql.js:70:23\n      at new Promise (&lt;anonymous&gt;)\n      at FactoryService.query (lib/common/mysql.js:69:12)\n      at Context.&lt;anonymous&gt; (__tests__/part3.test.js:22:50)\n      at processImmediate (node:internal/timers:466:21)\n\n  3) part 3. 데이터베이스 연결과 스키마\n       part 3-2. schema\n         "before all" hook for "Q 3-1. 현재 있는 데이터베이스에 존재하는 모든 테이블 정보를 보기위한 SQL을 작성해주세요.":\n     Error: the string "ER_BAD_DB_ERROR: Unknown database "learnmysql"" was thrown, throw an Error :)\n      at processTicksAndRejections (node:internal/process/</code></pre></div>',
          thumbnail: null,
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?Learn SQL Part3 을 진행 중입니다.아래와 같은 오류로 인해 스프린트 진행이 안되고 있습니다.&gt; learn-sql@1.0.0 test:part-3\\n&gt; mocha __tests__/par...',
          stack: 'C++',
          chatroomId: '5',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title: 'token 스프린트의 server export 부분이 궁금합니다',
          content:
            '<p>저 부분은 해당 스프린트의 server-token폴더의 메인 index.js 파일 부분입니다.</p><p>마지막 부분에 module.exports = server; 부분이 있는데요 ^^<img src="https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F3.png?alt=media" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>왜 있는지, 왜 exports했으나 require로 가져다 쓰는 곳은 한 곳도 없는지 궁금합니다~</p><p>음... 어디서 자료를 찾아야 할지도 모르겠고, 어렵네요.</p><p><br class="ProseMirror-trailingBreak"></p><p>시간을 많이 낭비 하는 것 같아서</p><p><br class="ProseMirror-trailingBreak"></p><p>궁금한 부분에 대해 질문을 남기게 되었네요.</p>',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F3.png?alt=media',
          description:
            '저 부분은 해당 스프린트의 server-token폴더의 메인 index.js 파일 부분입니다.마지막 부분에 module.exports = server; 부분이 있는데요 ^^왜 있는지, 왜 exports했으나 require로 가져다 쓰는 곳은 한 곳도 없는지 궁금합니다...',
          stack: 'JSON',
          chatroomId: '6',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title:
            'cloudfront, elb route53 사용후에도 배포된 웹사이트 보안연결(https)안됨',
          content:
            '<p>firstproject에서 https 인증서를 사용해서 배포했음에도 불구하고 보안연결(https)가 사용되지 않았음이라고 뜬다.</p><p>처음부터 다시 해보기도 하고, 코드스테이츠에서 제공한 레퍼런스를 통해 다시 해보기도 했지만 https인증서가 브라우저에서는 유효하다고 뜨고 주소도 https로 시작하는데 왜 그러는지 모르겠다.</p><p>도메인도 https://buble.cf 으로 접속도 되고 브라우저에서 인증서도 유효하다고 뜨는데 주의요함으로 계속 뜨는 부분에서 이해가 가지 않는다.<img src="https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F4.png?alt=media" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F4.png?alt=media',
          description:
            'firstproject에서 https 인증서를 사용해서 배포했음에도 불구하고 보안연결(https)가 사용되지 않았음이라고 뜬다.처음부터 다시 해보기도 하고, 코드스테이츠에서 제공한 레퍼런스를 통해 다시 해보기도 했지만 https인증서가 브라우저에서는 유효하다고 뜨고 ...',
          stack: 'React',
          chatroomId: '7',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 8,
          title: 'MVC - cmarket 스프린트 controller의 index.js 질문',
          content:
            '<p>하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..</p><p><br class="ProseMirror-trailingBreak"></p><p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면</p><p>코드에 queryString 변수가 2개 있습니다.</p><p>첫 번째 queryString의 마지막부분에 values (?,?) 이렇게 되어있고</p><p>두 번째 queryString 변수에는 values ? 이렇게 되어있는데요,</p><p>두번째 부분은 왜 (?,?,?) 이런식으로 되어있지 않은 건지 이해가 안되어서요.</p><p><br class="ProseMirror-trailingBreak"></p><p>그리고</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;\n      const params = [[userId, totalPrice]];\n\n      db.query(queryString, [params], (error, result) =&gt; {\n        if (result) {\n          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;</code></pre></div><p>이렇게 해도 작동이 잘 되어서요. 저기에서 params 변수 안의 값에 배열을 하나라도 제거하면 안되더라구요..</p><p>정확히 어떤 패턴으로 넣어야 하는지 감이 잡히지 않네요,</p>',
          thumbnail: null,
          description:
            '하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면코드에 querySt...',
          stack: 'Java',
          chatroomId: '8',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 9,
          title:
            'EC2 server npm start 시 listen EADDRINUSE: address already in use ::: 포트번호 에러가 납니다',
          content:
            '<p>서버 배포중 npm start를 하면 이미 사용중인 포트번호라고 합니다.</p><p>listen EADDRINUSE: address already in use ::: 포트번호</p><p>이렇게 에러가 나오는데 문제는 포트번호를 바꿔서 배포해봐도 똑같이 바꾼 포트번호로 사용중이라고 합니다. 여러번 바꿔도 똑같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>그래서</p><p>sudo lsof -i:포트번호</p><p>로 포트번호가 사용중인 PID 를 확인하고 kill -9 피드번호 죽여도</p><p>똑같이 listen EADDRINUSE: address already in use ::: 포트번호 에러가 납니다</p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>sudo kill -9 포트번호</p><p>로 서버를 죽여도 여전히 listen EADDRINUSE: address already in use ::: 포트번호 라는 에러가 나고</p><p>sudo lsof -i:포트번호 로 확인해보면 PID 번호가 달라져있습니다. 몇번이고 죽여도 다시 PID 번호만 달라질 뿐 똑같습니다</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><p>Error: listen EADDRINUSE: address already in use :::8080</p><p>at Server.setupListenHandle [as _listen2] (node:net:1330:16)</p><p>at listenInCluster (node:net:1378:12)</p><p>at Server.listen (node:net:1465:7)</p><p>at Function.listen (/home/ubuntu/Pinch-Hitter-1/server/node_modules/express/lib/application.js:618:24)</p><p>at Object. (/home/ubuntu/Pinch-Hitter-1/server/app.js:48:5)</p><p>at Module._compile (node:internal/modules/cjs/loader:1103:14)</p><p>at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)</p><p>at Module.load (node:internal/modules/cjs/loader:981:32)</p><p>at Function.Module._load (node:internal/modules/cjs/loader:822:12)</p><p>at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)</p><p>Emitted "error" event on Server instance at:</p><p>at emitErrorNT (node:net:1357:8)</p><p>at processTicksAndRejections (node:internal/process/task_queues:83:21) {</p><p><br class="ProseMirror-trailingBreak"></p><p>code: "EADDRINUSE" ,</p><p>errno: -98,</p><p>syscall: "listen",</p><p>address: "::",</p><p>port: 8080<img src="https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F5.png?alt=media" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://firebasestorage.googleapis.com/v0/b/coala-f8574.appspot.com/o/file%2Fsub%2Fsub2%2F5.png?alt=media',
          description:
            '서버 배포중 npm start를 하면 이미 사용중인 포트번호라고 합니다.listen EADDRINUSE: address already in use ::: 포트번호이렇게 에러가 나오는데 문제는 포트번호를 바꿔서 배포해봐도 똑같이 바꾼 포트번호로 사용중이라고 합니다. 여...',
          stack: 'Vue',
          chatroomId: '9',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
