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
            '<p><img src="https://blog.kakaocdn.net/dn/UKLUn/btqCZ1noXf7/VwrQksjo0DRprQKd1kfSNK/img.png" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>&lt;div className="info"&gt;\n  {isEdit ? ((\n    &lt;input\n      className="location_info"\n      ref={localLocationInput}\n      value={localLocation}\n      onChange={e =&gt; setLocalLocation(e.target.value)}\n    /&gt;\n  ),(&lt;textarea\n    ref={localContentInput}\n    value={localContent}\n    onChange={e =&gt; setLocalContent(e.target.value)}\n  /&gt;)) : (\n    location,content\n  )}\n&lt;/div&gt;</code></pre></div><p>삼항연산자를 다중으로 사용할 시 마지막 태그 및 변수만 출력되는 현상이 나타났습니다</p><p>어째서 제가 처음 쓴 코드는 어째서 뒷내용만 출력되는지 알고 싶습니다 (제가 놓치는 부분이 정확히 어떤것인지 잘 모르겠습니다 seal)</p>',
          thumbnail:
            'https://blog.kakaocdn.net/dn/UKLUn/btqCZ1noXf7/VwrQksjo0DRprQKd1kfSNK/img.png',
          description:
            '삼항연산자를 다중으로 사용할 시 마지막 태그 및 변수만 출력되는 현상이 나타났습니다</p><p>어째서 제가 처음 쓴 코드는 어째서 뒷내용만 출력되는지 알고 싶습니다 (제가 놓치는 부분이 정확히 어떤것인지 잘 모르겠습니다)',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 2,
          title: 'How to sequelize migrate',
          content:
            '<p>현재 쿠키 설정은 domain: "*"와 httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 이 세 옵션만 설정한 상태입니다.</p><p>조사를 한 결과 클라이언트와 서버의 도메인이 다르고, 크롬의 samesite 기본값이 lax로 설정되어 있기 때문에,</p><p>이를 해결하기 위해 SameSite 속성을 None으로 변경하고 secure = true 로 설정해 주어야 한다는 글을 보았습니다.</p><p>여기서 secure 옵션을 true로 설정하려면 클라이언트와 서버 모두 https로 통신해야 한다는 것도 확인했습니다.</p><p>서로 다른 도메인 간의 쿠키 전송을 위해 , 어떤 쿠키 설정 옵션들을 더 바꿔보고 시도해 보는 게 더 좋을까요?</p><p>만약에 더 이상 설정할 수 있는 다른 쿠키 옵션이 없다면, https 배포 후 SameSite=None, secure = true 옵션 설정까지 이루어져야 이 문제를 해결할 수 있겠다고 이해하는게 맞을까요?</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const options = {\n          httpOnly: true,\n          //https 배포 후, 추가할 설정입니다.\n          // sameSite: "none",\n          // secure: true\n          domain: "*",\n          maxAge: 1000 * 60 * 60 * 24 * 7,\n        };</code></pre></div><p><img src="https://blog.kakaocdn.net/dn/UKLUn/btqCZ1noXf7/VwrQksjo0DRprQKd1kfSNK/img.png" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://blog.kakaocdn.net/dn/UKLUn/btqCZ1noXf7/VwrQksjo0DRprQKd1kfSNK/img.png',
          description:
            '현재 쿠키 설정은 domain:"*"와 httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 이 세 옵션만 설정한 상태입니다.조사를 한 결과 클라이언트와 서버의 도메인이 다르고, 크롬의 samesite 기본값이 lax로 설정되어 있기 ...',
          stack: 'SQL',
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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title: 'token 스프린트의 server export 부분이 궁금합니다',
          content:
            '<p>저 부분은 해당 스프린트의 server-token폴더의 메인 index.js 파일 부분입니다.</p><p>마지막 부분에 module.exports = server; 부분이 있는데요 ^^<img src="https://www.ciokorea.com/sites/default/files/images/GettyImages-522146634.jpg" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>왜 있는지, 왜 exports했으나 require로 가져다 쓰는 곳은 한 곳도 없는지 궁금합니다~</p><p>음... 어디서 자료를 찾아야 할지도 모르겠고, 어렵네요.</p><p><br class="ProseMirror-trailingBreak"></p><p>시간을 많이 낭비 하는 것 같아서</p><p><br class="ProseMirror-trailingBreak"></p><p>궁금한 부분에 대해 질문을 남기게 되었네요.</p>',
          thumbnail:
            'https://www.ciokorea.com/sites/default/files/images/GettyImages-522146634.jpg',
          description:
            '저 부분은 해당 스프린트의 server-token폴더의 메인 index.js 파일 부분입니다.마지막 부분에 module.exports = server; 부분이 있는데요 ^^왜 있는지, 왜 exports했으나 require로 가져다 쓰는 곳은 한 곳도 없는지 궁금합니다...',
          stack: 'JSON',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title:
            'cloudfront, elb route53 사용후에도 배포된 웹사이트 보안연결(https)안됨',
          content:
            '<p>firstproject에서 https 인증서를 사용해서 배포했음에도 불구하고 보안연결(https)가 사용되지 않았음이라고 뜬다.</p><p>처음부터 다시 해보기도 하고, 코드스테이츠에서 제공한 레퍼런스를 통해 다시 해보기도 했지만 https인증서가 브라우저에서는 유효하다고 뜨고 주소도 https로 시작하는데 왜 그러는지 모르겠다.</p><p>도메인도 https://buble.cf 으로 접속도 되고 브라우저에서 인증서도 유효하다고 뜨는데 주의요함으로 계속 뜨는 부분에서 이해가 가지 않는다.<img src="https://velog.velcdn.com/images%2Fgenie__rorok%2Fpost%2F3a933a5b-72de-4dfc-8568-14fcf97fe4ba%2Fimage.png" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://velog.velcdn.com/images%2Fgenie__rorok%2Fpost%2F3a933a5b-72de-4dfc-8568-14fcf97fe4ba%2Fimage.png',
          description:
            'firstproject에서 https 인증서를 사용해서 배포했음에도 불구하고 보안연결(https)가 사용되지 않았음이라고 뜬다.처음부터 다시 해보기도 하고, 코드스테이츠에서 제공한 레퍼런스를 통해 다시 해보기도 했지만 https인증서가 브라우저에서는 유효하다고 뜨고 ...',
          stack: 'React',
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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 9,
          title:
            'EC2 server npm start 시 listen EADDRINUSE: address already in use ::: 포트번호 에러가 납니다',
          content:
            '<p>서버 배포중 npm start를 하면 이미 사용중인 포트번호라고 합니다.</p><p>listen EADDRINUSE: address already in use ::: 포트번호</p><p>이렇게 에러가 나오는데 문제는 포트번호를 바꿔서 배포해봐도 똑같이 바꾼 포트번호로 사용중이라고 합니다. 여러번 바꿔도 똑같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>그래서</p><p>sudo lsof -i:포트번호</p><p>로 포트번호가 사용중인 PID 를 확인하고 kill -9 피드번호 죽여도</p><p>똑같이 listen EADDRINUSE: address already in use ::: 포트번호 에러가 납니다</p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>sudo kill -9 포트번호</p><p>로 서버를 죽여도 여전히 listen EADDRINUSE: address already in use ::: 포트번호 라는 에러가 나고</p><p>sudo lsof -i:포트번호 로 확인해보면 PID 번호가 달라져있습니다. 몇번이고 죽여도 다시 PID 번호만 달라질 뿐 똑같습니다</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><p>Error: listen EADDRINUSE: address already in use :::8080</p><p>at Server.setupListenHandle [as _listen2] (node:net:1330:16)</p><p>at listenInCluster (node:net:1378:12)</p><p>at Server.listen (node:net:1465:7)</p><p>at Function.listen (/home/ubuntu/Pinch-Hitter-1/server/node_modules/express/lib/application.js:618:24)</p><p>at Object. (/home/ubuntu/Pinch-Hitter-1/server/app.js:48:5)</p><p>at Module._compile (node:internal/modules/cjs/loader:1103:14)</p><p>at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)</p><p>at Module.load (node:internal/modules/cjs/loader:981:32)</p><p>at Function.Module._load (node:internal/modules/cjs/loader:822:12)</p><p>at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)</p><p>Emitted "error" event on Server instance at:</p><p>at emitErrorNT (node:net:1357:8)</p><p>at processTicksAndRejections (node:internal/process/task_queues:83:21) {</p><p><br class="ProseMirror-trailingBreak"></p><p>code: "EADDRINUSE" ,</p><p>errno: -98,</p><p>syscall: "listen",</p><p>address: "::",</p><p>port: 8080<img src="https://velog.velcdn.com/images%2Fgenie__rorok%2Fpost%2Fb1007ec7-3dab-493c-a227-a97d1b86d388%2Fimage.png" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://velog.velcdn.com/images%2Fgenie__rorok%2Fpost%2Fb1007ec7-3dab-493c-a227-a97d1b86d388%2Fimage.png',
          description:
            '서버 배포중 npm start를 하면 이미 사용중인 포트번호라고 합니다.listen EADDRINUSE: address already in use ::: 포트번호이렇게 에러가 나오는데 문제는 포트번호를 바꿔서 배포해봐도 똑같이 바꾼 포트번호로 사용중이라고 합니다. 여...',
          stack: 'Vue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 1,
          title: 'EC2 파이프라인 Deploy단계 실패 - S3 이미지 업로드 관련',
          content:
            '<blockquote><p>파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니다. Redux도 최신스타일로 type-safe-action을 쓰고 react-router-dom도 새로운 버전으로 바뀌어서 굉장히 헷갈렸는데 계속 막혀서 드디어 아고라스테이츠를 이용해봅니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p><br class="ProseMirror-trailingBreak"></p><p>그냥 제 생각과 논리대로 짜면 뭔가 맞는것 같은데 React hook 에서는 용납하지 않더라구요. 하지만 TypeScript와 병행해서 그런지 다르게 쓰면 오류가 너무 나서 가장 마지막까지 그나마 오류가 안나게 저를 몰고간 코드는 아래와 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">// 액션 타입을 선언합니다 <p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const auth = useSelector( (state: RootState) =&gt; state.functions.isauthenticated ); // 다른곳에서 먼저 이렇게 useSelector로 auth를 만듭니다. // 이때 auth는 function A 를 잘 실행하고 있습니다. const handleLogin = () =&gt; { console.log(login); if (!login.email || !login.password) { handleErrorMessage("아이디와 비밀번호를 다시 입력해주세요."); } else { handleErrorMessage(""); } return axios .post("https://localhost:8080/login", login) .then(data =&gt; auth()); };</code></pre></div><p>실제로 쓸땐 axios로 저렇게 auth() 를 쓰면 console.log("a")는 잘 찍힙니다. 하지만 const dispatch를 하는 순간 hook error가 나고 있습니다. 에러메시지는 다음과 같습니다. <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaMvZ7%2FbtqCWccTeqs%2FLKN9JfQifyWVrOJabZgYTK%2Fimg.png" alt="Screenshot from 2022-04-28 18-26-26" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>검색했던 링크가 있다면 첨부해 주세요. https://ko.reactjs.org/warnings/invalid-hook-call-warning.html 위 링크를 보고 어떤 후크규칙을 어겼는지 보고 잘 모르겠어서 eslint 플러그인을 설치해서 후크규칙을 검사해도 딱히 에러는 없었습니다. 하지만 auth함수를 실행하고 console.log("a")까지는 실행이되지만 console.log("b")는 실행이 되지 않습니다. 어떻게 하면 dispatch를 이용해서 실행시킬 수 있을까요?</p></blockquote>',

          thumbnail:
            'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaMvZ7%2FbtqCWccTeqs%2FLKN9JfQifyWVrOJabZgYTK%2Fimg.png',
          description:
            '파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니...',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 1,
          title: '콘솔로그에 그래프가 모두 같은 내용으로 출력됩니다',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>im-sprint-practice-deploy</p><p><br class="ProseMirror-trailingBreak"></p><p>EC2 인스턴스를 통한 서버 실행 후 포스트맨 테스트 시 에러</p><p>MySQL 클라이언트를 통한 RDS DB 인스턴스 및 EC2 인스턴스 서버 연결 에러</p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>인터넷 검색</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>UrClass 지시 사항 중 놓친 것이 없는 것 같은데도 에러가 발생합니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>ubuntu@ip-172-31-44-27:~/im-sprint-practice-deploy/server$ sudo npm start\n\n&gt; server@1.0.0 start /home/ubuntu/im-sprint-practice-deploy/server\n&gt; node app.js\n\n서버가 80번에서 작동중입니다.\nIgnoring invalid configuration option passed to Connection: acquireTimeout. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\nError: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)</code></pre></div>',

          thumbnail: null,
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?Sprint - Cmarket Redux 진행 중 입니다. redux thunk에 대해서 몇 가지 테스트를 하고 있던 중에 이상한 점을 발견해서 질문드립니다.!안 되는 부분을 해결하기 위해서 구체적으로 어떤 ...',
          stack: 'SQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 2,
          title: 'Token 유효성 검사(Nest js)',
          content:
            '<p>현재 쿠키 설정은 domain: "*"와 httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 이 세 옵션만 설정한 상태입니다.</p><p>조사를 한 결과 클라이언트와 서버의 도메인이 다르고, 크롬의 samesite 기본값이 lax로 설정되어 있기 때문에,</p><p>이를 해결하기 위해 SameSite 속성을 None으로 변경하고 secure = true 로 설정해 주어야 한다는 글을 보았습니다.</p><p>여기서 secure 옵션을 true로 설정하려면 클라이언트와 서버 모두 https로 통신해야 한다는 것도 확인했습니다.</p><p>서로 다른 도메인 간의 쿠키 전송을 위해 , 어떤 쿠키 설정 옵션들을 더 바꿔보고 시도해 보는 게 더 좋을까요?</p><p>만약에 더 이상 설정할 수 있는 다른 쿠키 옵션이 없다면, https 배포 후 SameSite=None, secure = true 옵션 설정까지 이루어져야 이 문제를 해결할 수 있겠다고 이해하는게 맞을까요?</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const options = {\n          httpOnly: true,\n          //https 배포 후, 추가할 설정입니다.\n          // sameSite: "none",\n          // secure: true\n          domain: "*",\n          maxAge: 1000 * 60 * 60 * 24 * 7,\n        };</code></pre></div><p><img src="https://image.dongascience.com/Photo/2022/02/519ade0097d28e28a786d2870bb794b9.jpg" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',

          thumbnail:
            'https://image.dongascience.com/Photo/2022/02/519ade0097d28e28a786d2870bb794b9.jpg',
          description:
            '운영 체제: Ubuntu노드 버전(node -v): 16.14.1현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?파이널 프로제트 중 -&gt; AWS 서버 파이프라인 구성 중 에러 발 생안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?밤샘AW...',
          stack: 'Shell',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 2,
          title: 'fs모듈과 프로미스 이용한 파일 내용 출력',
          content:
            '<p>하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..</p><p><br class="ProseMirror-trailingBreak"></p><p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면</p><p>코드에 queryString 변수가 2개 있습니다.</p><p>첫 번째 queryString의 마지막부분에 values (?,?) 이렇게 되어있고</p><p>두 번째 queryString 변수에는 values ? 이렇게 되어있는데요,</p><p>두번째 부분은 왜 (?,?,?) 이런식으로 되어있지 않은 건지 이해가 안되어서요.</p><p><br class="ProseMirror-trailingBreak"></p><p>그리고</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;\n      const params = [[userId, totalPrice]];\n\n      db.query(queryString, [params], (error, result) =&gt; {\n        if (result) {\n          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;</code></pre></div><p>이렇게 해도 작동이 잘 되어서요. 저기에서 params 변수 안의 값에 배열을 하나라도 제거하면 안되더라구요..</p><p>정확히 어떤 패턴으로 넣어야 하는지 감이 잡히지 않네요,</p>',

          thumbnail:
            'https://user-images.githubusercontent.com/85835359/132784130-945cd915-7c96-4e29-9a55-08ad96cfce93.png',
          description:
            '운영 체제: macOS,노드 버전(node -v): v14.16.0### 현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?JS/비동기 복습중입니다. Part 2 - fs 모듈을 살펴보고 있습니다. 03_basicChaining.js의 소스입니다.const ...',
          stack: 'JSON',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 2,
          title: 'fetch는 다운로드없이 사용 가능한가요',
          content:
            '<blockquote><p>파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니다. Redux도 최신스타일로 type-safe-action을 쓰고 react-router-dom도 새로운 버전으로 바뀌어서 굉장히 헷갈렸는데 계속 막혀서 드디어 아고라스테이츠를 이용해봅니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p><br class="ProseMirror-trailingBreak"></p><p>그냥 제 생각과 논리대로 짜면 뭔가 맞는것 같은데 React hook 에서는 용납하지 않더라구요. 하지만 TypeScript와 병행해서 그런지 다르게 쓰면 오류가 너무 나서 가장 마지막까지 그나마 오류가 안나게 저를 몰고간 코드는 아래와 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">// 액션 타입을 선언합니다 <p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const auth = useSelector( (state: RootState) =&gt; state.functions.isauthenticated ); // 다른곳에서 먼저 이렇게 useSelector로 auth를 만듭니다. // 이때 auth는 function A 를 잘 실행하고 있습니다. const handleLogin = () =&gt; { console.log(login); if (!login.email || !login.password) { handleErrorMessage("아이디와 비밀번호를 다시 입력해주세요."); } else { handleErrorMessage(""); } return axios .post("https://localhost:8080/login", login) .then(data =&gt; auth()); };</code></pre></div><p>실제로 쓸땐 axios로 저렇게 auth() 를 쓰면 console.log("a")는 잘 찍힙니다. 하지만 const dispatch를 하는 순간 hook error가 나고 있습니다. 에러메시지는 다음과 같습니다. <img src="https://user-images.githubusercontent.com/95297566/165722169-034f33a2-fe4f-40e3-9c46-2672af5897b1.png" alt="Screenshot from 2022-04-28 18-26-26" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>검색했던 링크가 있다면 첨부해 주세요. https://ko.reactjs.org/warnings/invalid-hook-call-warning.html 위 링크를 보고 어떤 후크규칙을 어겼는지 보고 잘 모르겠어서 eslint 플러그인을 설치해서 후크규칙을 검사해도 딱히 에러는 없었습니다. 하지만 auth함수를 실행하고 console.log("a")까지는 실행이되지만 console.log("b")는 실행이 되지 않습니다. 어떻게 하면 dispatch를 이용해서 실행시킬 수 있을까요?</p></blockquote>',

          thumbnail: null,
          description:
            '파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니...',
          stack: 'Vue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: '포스트맨에 포트 연결이 안됩니다.',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>im-sprint-practice-deploy</p><p><br class="ProseMirror-trailingBreak"></p><p>EC2 인스턴스를 통한 서버 실행 후 포스트맨 테스트 시 에러</p><p>MySQL 클라이언트를 통한 RDS DB 인스턴스 및 EC2 인스턴스 서버 연결 에러</p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>인터넷 검색</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>UrClass 지시 사항 중 놓친 것이 없는 것 같은데도 에러가 발생합니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>ubuntu@ip-172-31-44-27:~/im-sprint-practice-deploy/server$ sudo npm start\n\n&gt; server@1.0.0 start /home/ubuntu/im-sprint-practice-deploy/server\n&gt; node app.js\n\n서버가 80번에서 작동중입니다.\nIgnoring invalid configuration option passed to Connection: acquireTimeout. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\nError: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)</code></pre></div>',

          thumbnail: null,
          description:
            '#### 현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?파이널 프로젝트 진행중이며, 로그인 요청 후 EC2에서 쿠키를 전송하였을 때 클라이언트(브라우저)에서 쿠키가 저장되지 않습니다.#### 배포 환경클라이언트: 배포하지 않았습니다(개발서버 주소는 htt...',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: 'Typescript, 자동배포 적용시 CORS 적용',
          content:
            '<p>현재 쿠키 설정은 domain: "*"와 httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 이 세 옵션만 설정한 상태입니다.</p><p>조사를 한 결과 클라이언트와 서버의 도메인이 다르고, 크롬의 samesite 기본값이 lax로 설정되어 있기 때문에,</p><p>이를 해결하기 위해 SameSite 속성을 None으로 변경하고 secure = true 로 설정해 주어야 한다는 글을 보았습니다.</p><p>여기서 secure 옵션을 true로 설정하려면 클라이언트와 서버 모두 https로 통신해야 한다는 것도 확인했습니다.</p><p>서로 다른 도메인 간의 쿠키 전송을 위해 , 어떤 쿠키 설정 옵션들을 더 바꿔보고 시도해 보는 게 더 좋을까요?</p><p>만약에 더 이상 설정할 수 있는 다른 쿠키 옵션이 없다면, https 배포 후 SameSite=None, secure = true 옵션 설정까지 이루어져야 이 문제를 해결할 수 있겠다고 이해하는게 맞을까요?</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const options = {\n          httpOnly: true,\n          //https 배포 후, 추가할 설정입니다.\n          // sameSite: "none",\n          // secure: true\n          domain: "*",\n          maxAge: 1000 * 60 * 60 * 24 * 7,\n        };</code></pre></div><p><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9960713B5E05845C19" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',

          thumbnail:
            'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9960713B5E05845C19',
          description:
            '• 운영 체제: macOS• 노드 버전(node -v): 예)v14.16.0• 현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요? daysinmonth 문제• 안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 구글에서 조건문을 활용한 달력 등을...',
          stack: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 3,
          title: 'AWS Server Deployment Pipeline Error',
          content:
            '<p>하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..</p><p><br class="ProseMirror-trailingBreak"></p><p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면</p><p>코드에 queryString 변수가 2개 있습니다.</p><p>첫 번째 queryString의 마지막부분에 values (?,?) 이렇게 되어있고</p><p>두 번째 queryString 변수에는 values ? 이렇게 되어있는데요,</p><p>두번째 부분은 왜 (?,?,?) 이런식으로 되어있지 않은 건지 이해가 안되어서요.</p><p><br class="ProseMirror-trailingBreak"></p><p>그리고</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;\n      const params = [[userId, totalPrice]];\n\n      db.query(queryString, [params], (error, result) =&gt; {\n        if (result) {\n          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;</code></pre></div><p>이렇게 해도 작동이 잘 되어서요. 저기에서 params 변수 안의 값에 배열을 하나라도 제거하면 안되더라구요..</p><p>정확히 어떤 패턴으로 넣어야 하는지 감이 잡히지 않네요,</p>',

          thumbnail:
            'https://user-images.githubusercontent.com/85835389/161160912-3e09fae3-e99d-404a-8bd9-9bd1b4b424ef.png',
          description:
            '노드 버전(node -v): 예)v14.16.0현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?homebrew 설치하고sudo apt update sudo apt install wget이 코드 입력하니까 java runtime이 없다고 해서 설치하고 다시s...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 4,
          title: 'EC2 퍼블릭 IPv4 DNS 연결 불가 ERR_CONNECTION_REFUSED',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>파이널 프로젝트 진행중 create-react-app대신 babel과 webpack을 사용하여 리엑트 환경을 구축하였습니다.</p><p>npm start명령어 실행 시, 웹페이지가 뜨긴 하지만 새로고침(F5)를 누르거나 에러코드가 생겼을 때 수정후 코드를 저장하고 실행하면</p><p>cannot GET/ 이라는 에러가 뜨기때문에</p><p>다시 home(기본 host 주소)로 돌아간 후 다시 라우트된 링크를 클릭해야만 페이지 확인이 가능합니다.</p><p>다시말해 live-server의 기능이 전혀 실행되지 않는 것 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>구글링을 통해 webpack을 수정하였으나 해결되지 않았습니다.',

          thumbnail:
            'https://user-images.githubusercontent.com/80194405/160986963-e857f6c1-c7fa-48f8-af0b-6b967e4d0a12.jpg',
          description:
            '운영 체제: macOS노드 버전(node -v): v14.16.0현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요? flexbox 복습 중 세로로 레이아웃을 나누려고 하는데, 잘 나누어 지지 않았습니다.안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 ...',
          stack: 'BASIC',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 4,
          title:
            'mysql db로 data를 입력하려는데 max_connections 관련 에러 질문있습니다! ',
          content:
            '<p>현재 쿠키 설정은 domain: "*"와 httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 이 세 옵션만 설정한 상태입니다.</p><p>조사를 한 결과 클라이언트와 서버의 도메인이 다르고, 크롬의 samesite 기본값이 lax로 설정되어 있기 때문에,</p><p>이를 해결하기 위해 SameSite 속성을 None으로 변경하고 secure = true 로 설정해 주어야 한다는 글을 보았습니다.</p><p>여기서 secure 옵션을 true로 설정하려면 클라이언트와 서버 모두 https로 통신해야 한다는 것도 확인했습니다.</p><p>서로 다른 도메인 간의 쿠키 전송을 위해 , 어떤 쿠키 설정 옵션들을 더 바꿔보고 시도해 보는 게 더 좋을까요?</p><p>만약에 더 이상 설정할 수 있는 다른 쿠키 옵션이 없다면, https 배포 후 SameSite=None, secure = true 옵션 설정까지 이루어져야 이 문제를 해결할 수 있겠다고 이해하는게 맞을까요?</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const options = {\n          httpOnly: true,\n          //https 배포 후, 추가할 설정입니다.\n          // sameSite: "none",\n          // secure: true\n          domain: "*",\n          maxAge: 1000 * 60 * 60 * 24 * 7,\n        };</code></pre></div><p><img src="https://www.insilicogen.com/blog/attach/1/1009730002.jpeg" alt="imageURL" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',

          thumbnail: null,
          description:
            '운영 체제: 예) macOS, window, Ubuntu macOS노드 버전(node -v): 예)v14.16.0 v16.11.1현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요? 유어클래스 학습 중 html파일을 브라우저에서 열었을 때 js파일이 같이 뜨지...',
          stack: 'CSS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 4,
          title:
            'Sequelize에서 다대다 테이블을 자동 생성한 후 이 테이블에 레코드를 삽입하려면 어떻게 해야할까요?',
          content:
            '<blockquote><p>파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니다. Redux도 최신스타일로 type-safe-action을 쓰고 react-router-dom도 새로운 버전으로 바뀌어서 굉장히 헷갈렸는데 계속 막혀서 드디어 아고라스테이츠를 이용해봅니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p><br class="ProseMirror-trailingBreak"></p><p>그냥 제 생각과 논리대로 짜면 뭔가 맞는것 같은데 React hook 에서는 용납하지 않더라구요. 하지만 TypeScript와 병행해서 그런지 다르게 쓰면 오류가 너무 나서 가장 마지막까지 그나마 오류가 안나게 저를 몰고간 코드는 아래와 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">// 액션 타입을 선언합니다 <p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const auth = useSelector( (state: RootState) =&gt; state.functions.isauthenticated ); // 다른곳에서 먼저 이렇게 useSelector로 auth를 만듭니다. // 이때 auth는 function A 를 잘 실행하고 있습니다. const handleLogin = () =&gt; { console.log(login); if (!login.email || !login.password) { handleErrorMessage("아이디와 비밀번호를 다시 입력해주세요."); } else { handleErrorMessage(""); } return axios .post("https://localhost:8080/login", login) .then(data =&gt; auth()); };</code></pre></div><p>실제로 쓸땐 axios로 저렇게 auth() 를 쓰면 console.log("a")는 잘 찍힙니다. 하지만 const dispatch를 하는 순간 hook error가 나고 있습니다. 에러메시지는 다음과 같습니다. <img src="https://user-images.githubusercontent.com/95297566/165722169-034f33a2-fe4f-40e3-9c46-2672af5897b1.png" alt="Screenshot from 2022-04-28 18-26-26" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>검색했던 링크가 있다면 첨부해 주세요. https://ko.reactjs.org/warnings/invalid-hook-call-warning.html 위 링크를 보고 어떤 후크규칙을 어겼는지 보고 잘 모르겠어서 eslint 플러그인을 설치해서 후크규칙을 검사해도 딱히 에러는 없었습니다. 하지만 auth함수를 실행하고 console.log("a")까지는 실행이되지만 console.log("b")는 실행이 되지 않습니다. 어떻게 하면 dispatch를 이용해서 실행시킬 수 있을까요?</p></blockquote>',

          thumbnail: null,
          description:
            '--------------- 여기서부터 복사하세요 ---------------`운영 체제: macOS m1노드 버전(node -v) v12.18.3현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?  npm install을 하면 모두 설치 되기 까지 2시...',
          stack: 'HTML',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 5,
          title: '리프레쉬 토큰 사용 이유',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>파이널 프로젝트 진행중 create-react-app대신 babel과 webpack을 사용하여 리엑트 환경을 구축하였습니다.</p><p>npm start명령어 실행 시, 웹페이지가 뜨긴 하지만 새로고침(F5)를 누르거나 에러코드가 생겼을 때 수정후 코드를 저장하고 실행하면</p><p>cannot GET/ 이라는 에러가 뜨기때문에</p><p>다시 home(기본 host 주소)로 돌아간 후 다시 라우트된 링크를 클릭해야만 페이지 확인이 가능합니다.</p><p>다시말해 live-server의 기능이 전혀 실행되지 않는 것 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>구글링을 통해 webpack을 수정하였으나 해결되지 않았습니다.',

          thumbnail:
            'https://user-images.githubusercontent.com/58920833/126930769-be9b73e8-0f31-4279-9e83-ce32a8a320ee.png',
          description:
            '-운영 체제: 예) macOS, window, UbuntumacOS-현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?파이널 프로젝트 중 서버 구현을 하고 포스트 맨을 돌려보는데 MongooseError: Operation users.findOne() buf...',
          stack: 'Markdown',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 5,
          title: 'Redux thunk에 대한 질문',
          content:
            '<p>하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..</p><p><br class="ProseMirror-trailingBreak"></p><p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면</p><p>코드에 queryString 변수가 2개 있습니다.</p><p>첫 번째 queryString의 마지막부분에 values (?,?) 이렇게 되어있고</p><p>두 번째 queryString 변수에는 values ? 이렇게 되어있는데요,</p><p>두번째 부분은 왜 (?,?,?) 이런식으로 되어있지 않은 건지 이해가 안되어서요.</p><p><br class="ProseMirror-trailingBreak"></p><p>그리고</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;\n      const params = [[userId, totalPrice]];\n\n      db.query(queryString, [params], (error, result) =&gt; {\n        if (result) {\n          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;</code></pre></div><p>이렇게 해도 작동이 잘 되어서요. 저기에서 params 변수 안의 값에 배열을 하나라도 제거하면 안되더라구요..</p><p>정확히 어떤 패턴으로 넣어야 하는지 감이 잡히지 않네요,</p>',

          thumbnail: null,
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?Sprint - Cmarket Redux 진행 중 입니다. redux thunk에 대해서 몇 가지 테스트를 하고 있던 중에 이상한 점을 발견해서 질문드립니다.!안 되는 부분을 해결하기 위해서 구체적으로 어떤 ...',
          stack: 'MongoDB',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          done: 1,
          userId: 6,
          title: 'MongooseError 발생',
          content:
            '<p>하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..</p><p><br class="ProseMirror-trailingBreak"></p><p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면</p><p>코드에 queryString 변수가 2개 있습니다.</p><p>첫 번째 queryString의 마지막부분에 values (?,?) 이렇게 되어있고</p><p>두 번째 queryString 변수에는 values ? 이렇게 되어있는데요,</p><p>두번째 부분은 왜 (?,?,?) 이런식으로 되어있지 않은 건지 이해가 안되어서요.</p><p><br class="ProseMirror-trailingBreak"></p><p>그리고</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;\n      const params = [[userId, totalPrice]];\n\n      db.query(queryString, [params], (error, result) =&gt; {\n        if (result) {\n          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;</code></pre></div><p>이렇게 해도 작동이 잘 되어서요. 저기에서 params 변수 안의 값에 배열을 하나라도 제거하면 안되더라구요..</p><p>정확히 어떤 패턴으로 넣어야 하는지 감이 잡히지 않네요,</p>',

          thumbnail:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Hopetoun_falls.jpg/300px-Hopetoun_falls.jpg',
          description:
            '운영 체제: Ubuntu노드 버전(node -v): v16.13.0현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요? project1 에서 인증을 구현하며 refresh 토큰을 쓸까 말까 고민 중입니다. 그런데 accessToken과 refreshToken으...',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title: 'npm install 속도가 저하되었고 npm run test시 오류가 납니다.',
          content:
            '<blockquote><p>파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니다. Redux도 최신스타일로 type-safe-action을 쓰고 react-router-dom도 새로운 버전으로 바뀌어서 굉장히 헷갈렸는데 계속 막혀서 드디어 아고라스테이츠를 이용해봅니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p><br class="ProseMirror-trailingBreak"></p><p>그냥 제 생각과 논리대로 짜면 뭔가 맞는것 같은데 React hook 에서는 용납하지 않더라구요. 하지만 TypeScript와 병행해서 그런지 다르게 쓰면 오류가 너무 나서 가장 마지막까지 그나마 오류가 안나게 저를 몰고간 코드는 아래와 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">// 액션 타입을 선언합니다 <p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const auth = useSelector( (state: RootState) =&gt; state.functions.isauthenticated ); // 다른곳에서 먼저 이렇게 useSelector로 auth를 만듭니다. // 이때 auth는 function A 를 잘 실행하고 있습니다. const handleLogin = () =&gt; { console.log(login); if (!login.email || !login.password) { handleErrorMessage("아이디와 비밀번호를 다시 입력해주세요."); } else { handleErrorMessage(""); } return axios .post("https://localhost:8080/login", login) .then(data =&gt; auth()); };</code></pre></div><p>실제로 쓸땐 axios로 저렇게 auth() 를 쓰면 console.log("a")는 잘 찍힙니다. 하지만 const dispatch를 하는 순간 hook error가 나고 있습니다. 에러메시지는 다음과 같습니다. <img src="https://user-images.githubusercontent.com/95297566/165722169-034f33a2-fe4f-40e3-9c46-2672af5897b1.png" alt="Screenshot from 2022-04-28 18-26-26" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>검색했던 링크가 있다면 첨부해 주세요. https://ko.reactjs.org/warnings/invalid-hook-call-warning.html 위 링크를 보고 어떤 후크규칙을 어겼는지 보고 잘 모르겠어서 eslint 플러그인을 설치해서 후크규칙을 검사해도 딱히 에러는 없었습니다. 하지만 auth함수를 실행하고 console.log("a")까지는 실행이되지만 console.log("b")는 실행이 되지 않습니다. 어떻게 하면 dispatch를 이용해서 실행시킬 수 있을까요?</p></blockquote>',

          thumbnail:
            'https://user-images.githubusercontent.com/83768576/129499496-98cfa011-5e08-4125-bbbb-ad78549fd4a2.png',
          description:
            '노드 버전(node -v): 예)v16.13.0현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요? first project 진행중입니다안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 블로그 서칭, 공식 문서 확인어떠한 부분에서 이해가 안 되었...',
          stack: 'Verilog',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title:
            'html파일을 크롬 브라우저에서 열면 크롬 개발자 도구에 js파일이 뜨지 않습니다. ',
          content:
            '<blockquote><p>파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니다. Redux도 최신스타일로 type-safe-action을 쓰고 react-router-dom도 새로운 버전으로 바뀌어서 굉장히 헷갈렸는데 계속 막혀서 드디어 아고라스테이츠를 이용해봅니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p><br class="ProseMirror-trailingBreak"></p><p>그냥 제 생각과 논리대로 짜면 뭔가 맞는것 같은데 React hook 에서는 용납하지 않더라구요. 하지만 TypeScript와 병행해서 그런지 다르게 쓰면 오류가 너무 나서 가장 마지막까지 그나마 오류가 안나게 저를 몰고간 코드는 아래와 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">// 액션 타입을 선언합니다 <p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const auth = useSelector( (state: RootState) =&gt; state.functions.isauthenticated ); // 다른곳에서 먼저 이렇게 useSelector로 auth를 만듭니다. // 이때 auth는 function A 를 잘 실행하고 있습니다. const handleLogin = () =&gt; { console.log(login); if (!login.email || !login.password) { handleErrorMessage("아이디와 비밀번호를 다시 입력해주세요."); } else { handleErrorMessage(""); } return axios .post("https://localhost:8080/login", login) .then(data =&gt; auth()); };</code></pre></div><p>실제로 쓸땐 axios로 저렇게 auth() 를 쓰면 console.log("a")는 잘 찍힙니다. 하지만 const dispatch를 하는 순간 hook error가 나고 있습니다. 에러메시지는 다음과 같습니다. <img src="https://user-images.githubusercontent.com/95297566/165722169-034f33a2-fe4f-40e3-9c46-2672af5897b1.png" alt="Screenshot from 2022-04-28 18-26-26" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>검색했던 링크가 있다면 첨부해 주세요. https://ko.reactjs.org/warnings/invalid-hook-call-warning.html 위 링크를 보고 어떤 후크규칙을 어겼는지 보고 잘 모르겠어서 eslint 플러그인을 설치해서 후크규칙을 검사해도 딱히 에러는 없었습니다. 하지만 auth함수를 실행하고 console.log("a")까지는 실행이되지만 console.log("b")는 실행이 되지 않습니다. 어떻게 하면 dispatch를 이용해서 실행시킬 수 있을까요?</p></blockquote>',

          thumbnail: null,
          description:
            '------------------------------------------------~운영 체제: macOS(M1칩)노드 버전(node -v): v15.14.0MySQL은 AWS에서 RDS로 생성한 DB를 사용중입니다.현재 어떤 스프린트를 진행 중이고, 어떤 문제에...',
          stack: 'SQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 6,
          title: 'flexbox 사용법 질문',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>im-sprint-practice-deploy</p><p><br class="ProseMirror-trailingBreak"></p><p>EC2 인스턴스를 통한 서버 실행 후 포스트맨 테스트 시 에러</p><p>MySQL 클라이언트를 통한 RDS DB 인스턴스 및 EC2 인스턴스 서버 연결 에러</p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>인터넷 검색</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>UrClass 지시 사항 중 놓친 것이 없는 것 같은데도 에러가 발생합니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>ubuntu@ip-172-31-44-27:~/im-sprint-practice-deploy/server$ sudo npm start\n\n&gt; server@1.0.0 start /home/ubuntu/im-sprint-practice-deploy/server\n&gt; node app.js\n\n서버가 80번에서 작동중입니다.\nIgnoring invalid configuration option passed to Connection: acquireTimeout. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\nError: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)</code></pre></div>',

          thumbnail:
            'https://user-images.githubusercontent.com/83768576/129499496-98cfa011-5e08-4125-bbbb-ad78549fd4a2.png',
          description:
            '운영 체제: 예) Ubuntu노드 버전(node -v): v17.8.0현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요? 프로젝트 단계이고 자동 배포를 진행하는 중입니다. EC2 를 만들어 준 후 http로 서버에 접속이 되는지 확인하고 싶었는데 EC2 퍼블...',
          stack: 'GraphQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title: 'nvm 설치시 Unable to locate an executable',
          content:
            '<blockquote><p>파이널 프로젝트중에 Redux로 권한부여를 제어하고 싶은데 isauthenticated 함수를 전역에서 사용하고 싶었는데 막혔습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요? 역시 가장먼저 구글링을 해봤고 음.. 솔직히 그렇게 도움되는건 없었습니다. Redux도 최신스타일로 type-safe-action을 쓰고 react-router-dom도 새로운 버전으로 바뀌어서 굉장히 헷갈렸는데 계속 막혀서 드디어 아고라스테이츠를 이용해봅니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p><br class="ProseMirror-trailingBreak"></p><p>그냥 제 생각과 논리대로 짜면 뭔가 맞는것 같은데 React hook 에서는 용납하지 않더라구요. 하지만 TypeScript와 병행해서 그런지 다르게 쓰면 오류가 너무 나서 가장 마지막까지 그나마 오류가 안나게 저를 몰고간 코드는 아래와 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">// 액션 타입을 선언합니다 <p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">const auth = useSelector( (state: RootState) =&gt; state.functions.isauthenticated ); // 다른곳에서 먼저 이렇게 useSelector로 auth를 만듭니다. // 이때 auth는 function A 를 잘 실행하고 있습니다. const handleLogin = () =&gt; { console.log(login); if (!login.email || !login.password) { handleErrorMessage("아이디와 비밀번호를 다시 입력해주세요."); } else { handleErrorMessage(""); } return axios .post("https://localhost:8080/login", login) .then(data =&gt; auth()); };</code></pre></div><p>실제로 쓸땐 axios로 저렇게 auth() 를 쓰면 console.log("a")는 잘 찍힙니다. 하지만 const dispatch를 하는 순간 hook error가 나고 있습니다. 에러메시지는 다음과 같습니다. <img src="https://user-images.githubusercontent.com/95297566/165722169-034f33a2-fe4f-40e3-9c46-2672af5897b1.png" alt="Screenshot from 2022-04-28 18-26-26" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>검색했던 링크가 있다면 첨부해 주세요. https://ko.reactjs.org/warnings/invalid-hook-call-warning.html 위 링크를 보고 어떤 후크규칙을 어겼는지 보고 잘 모르겠어서 eslint 플러그인을 설치해서 후크규칙을 검사해도 딱히 에러는 없었습니다. 하지만 auth함수를 실행하고 console.log("a")까지는 실행이되지만 console.log("b")는 실행이 되지 않습니다. 어떻게 하면 dispatch를 이용해서 실행시킬 수 있을까요?</p></blockquote>',

          thumbnail:
            'https://user-images.githubusercontent.com/79052940/114828568-06bce580-9e05-11eb-8b0b-97925787d1c7.png',
          description:
            '운영 체제: Ubuntu노드 버전(node -v): 16.14.1현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?파이널 프로제트 중 -&gt; AWS 서버 파이프라인 구성 중 에러 발 생안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?밤샘AW...',
          stack: 'Docker',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title: '조건문 === 관련 질문 입니다',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>im-sprint-practice-deploy</p><p><br class="ProseMirror-trailingBreak"></p><p>EC2 인스턴스를 통한 서버 실행 후 포스트맨 테스트 시 에러</p><p>MySQL 클라이언트를 통한 RDS DB 인스턴스 및 EC2 인스턴스 서버 연결 에러</p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>인터넷 검색</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>UrClass 지시 사항 중 놓친 것이 없는 것 같은데도 에러가 발생합니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>ubuntu@ip-172-31-44-27:~/im-sprint-practice-deploy/server$ sudo npm start\n\n&gt; server@1.0.0 start /home/ubuntu/im-sprint-practice-deploy/server\n&gt; node app.js\n\n서버가 80번에서 작동중입니다.\nIgnoring invalid configuration option passed to Connection: acquireTimeout. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\n{ Error: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)\n  message: "connect ETIMEDOUT",\n  code: "ETIMEDOUT",\n  errno: undefined,\n  sql: undefined,\n  sqlState: undefined,\n  sqlMessage: undefined }\nError: connect ETIMEDOUT\n    at PromisePool.query (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/mysql2/promise.js:341:22)\n    at ensureSchema (/home/ubuntu/im-sprint-practice-deploy/server/app.js:63:14)\n    at createPool.then (/home/ubuntu/im-sprint-practice-deploy/server/app.js:70:13)\n    at &lt;anonymous&gt;\n    at process._tickCallback (internal/process/next_tick.js:188:7)</code></pre></div>',

          thumbnail: null,
          description:
            '운영 체제: macOS노드 버전(node -v): v16.14.2STACKtypescript, express, react, redux, etc ...현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?final project를 진행하며 CORS적용에 대해 문제...',
          stack: 'PHP',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 7,
          title: '배포 환경에서 도메인의 차이로 쿠키 저장이 되지 않는 문제',
          content:
            ' <p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>파이널 프로젝트 진행중 create-react-app대신 babel과 webpack을 사용하여 리엑트 환경을 구축하였습니다.</p><p>npm start명령어 실행 시, 웹페이지가 뜨긴 하지만 새로고침(F5)를 누르거나 에러코드가 생겼을 때 수정후 코드를 저장하고 실행하면</p><p>cannot GET/ 이라는 에러가 뜨기때문에</p><p>다시 home(기본 host 주소)로 돌아간 후 다시 라우트된 링크를 클릭해야만 페이지 확인이 가능합니다.</p><p>다시말해 live-server의 기능이 전혀 실행되지 않는 것 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>구글링을 통해 webpack을 수정하였으나 해결되지 않았습니다.',

          thumbnail: null,
          description:
            '운영 체제: 예) macOS, window, UbuntuUbuntu노드 버전(node -v): 예)v14.16.0v14.17.1현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?[Web Server] 기초 - StatesAirline Server 스프린트 진...',
          stack: 'TypeScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title: 'Redux에서 전역함수를 사용하는 방법에 대해서',
          content:
            '<p>하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..</p><p><br class="ProseMirror-trailingBreak"></p><p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면</p><p>코드에 queryString 변수가 2개 있습니다.</p><p>첫 번째 queryString의 마지막부분에 values (?,?) 이렇게 되어있고</p><p>두 번째 queryString 변수에는 values ? 이렇게 되어있는데요,</p><p>두번째 부분은 왜 (?,?,?) 이런식으로 되어있지 않은 건지 이해가 안되어서요.</p><p><br class="ProseMirror-trailingBreak"></p><p>그리고</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;\n      const params = [[userId, totalPrice]];\n\n      db.query(queryString, [params], (error, result) =&gt; {\n        if (result) {\n          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;</code></pre></div><p>이렇게 해도 작동이 잘 되어서요. 저기에서 params 변수 안의 값에 배열을 하나라도 제거하면 안되더라구요..</p><p>정확히 어떤 패턴으로 넣어야 하는지 감이 잡히지 않네요,</p>',

          thumbnail:
            'https://user-images.githubusercontent.com/92836893/165312165-16e8c0ec-849c-4734-84ca-c05737fd6da7.png',
          description:
            '운영 체제: 예) macOS,노드 버전(node -v): v14.16.0현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?Node.js 환경에는 fetch API가 내장 모듈로 제공되지 않고 브라우저에서 제공하는 API이다. 즉 node.js에서는 바로 사용...',
          stack: 'PowerShell',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title:
            '로컬 컴퓨터의 docker-compose 버전이 낮아서 업데이트를 하려고 하는데, 문제 해결이 잘 안됩니다',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>파이널 프로젝트 진행중 create-react-app대신 babel과 webpack을 사용하여 리엑트 환경을 구축하였습니다.</p><p>npm start명령어 실행 시, 웹페이지가 뜨긴 하지만 새로고침(F5)를 누르거나 에러코드가 생겼을 때 수정후 코드를 저장하고 실행하면</p><p>cannot GET/ 이라는 에러가 뜨기때문에</p><p>다시 home(기본 host 주소)로 돌아간 후 다시 라우트된 링크를 클릭해야만 페이지 확인이 가능합니다.</p><p>다시말해 live-server의 기능이 전혀 실행되지 않는 것 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>구글링을 통해 webpack을 수정하였으나 해결되지 않았습니다.',

          thumbnail:
            'https://user-images.githubusercontent.com/95297566/165722169-034f33a2-fe4f-40e3-9c46-2672af5897b1.png',
          description:
            '운영 체제: macOS,노드 버전(node -v): v14.16.0### 현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?JS/비동기 복습중입니다. Part 2 - fs 모듈을 살펴보고 있습니다. 03_basicChaining.js의 소스입니다.const ...',
          stack: 'Dart',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 1,
          userId: 8,
          title: 'webpack live server 실행 불가능 문제',
          content:
            '<p>현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?</p><p>파이널 프로젝트 진행중 create-react-app대신 babel과 webpack을 사용하여 리엑트 환경을 구축하였습니다.</p><p>npm start명령어 실행 시, 웹페이지가 뜨긴 하지만 새로고침(F5)를 누르거나 에러코드가 생겼을 때 수정후 코드를 저장하고 실행하면</p><p>cannot GET/ 이라는 에러가 뜨기때문에</p><p>다시 home(기본 host 주소)로 돌아간 후 다시 라우트된 링크를 클릭해야만 페이지 확인이 가능합니다.</p><p>다시말해 live-server의 기능이 전혀 실행되지 않는 것 같습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p>구글링을 통해 webpack을 수정하였으나 해결되지 않았습니다.',

          thumbnail: ' ',
          description:
            '에러는 아니고 궁금한게 있어서 질문 올립니다.Nestjs로 프로젝트를 진행중인데 일반 회원가입하면 저희가 토큰을 발급해서그 토큰을 가지고 유효성검사(authguard)를 해서 기능들을 사용할수 있게금 작성했는데카카오로그인을 구현하고 카카오에서 발급해준 토큰이 저희가 ...',
          stack: 'Ruby',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 9,
          title: 'Pull Request가 되지 않습니다',
          content:
            '<p>하나의 값을 넣어야 할 때는 1차원 배열로 넣어야하고, bulk insert할 때에는 2차원으로 한다는 것 같기는 한데..</p><p><br class="ProseMirror-trailingBreak"></p><p>에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. 라고 되어있는 부분에 기입한 코드를 보시면</p><p>코드에 queryString 변수가 2개 있습니다.</p><p>첫 번째 queryString의 마지막부분에 values (?,?) 이렇게 되어있고</p><p>두 번째 queryString 변수에는 values ? 이렇게 되어있는데요,</p><p>두번째 부분은 왜 (?,?,?) 이런식으로 되어있지 않은 건지 이해가 안되어서요.</p><p><br class="ProseMirror-trailingBreak"></p><p>그리고</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const queryString = `INSERT INTO orders (user_id, total_price) VALUES ?`;\n      const params = [[userId, totalPrice]];\n\n      db.query(queryString, [params], (error, result) =&gt; {\n        if (result) {\n          const queryString = `INSERT INTO order_items (order_id, item_id, order_quantity) VALUES ?;`;</code></pre></div><p>이렇게 해도 작동이 잘 되어서요. 저기에서 params 변수 안의 값에 배열을 하나라도 제거하면 안되더라구요..</p><p>정확히 어떤 패턴으로 넣어야 하는지 감이 잡히지 않네요,</p>',

          thumbnail:
            'https://user-images.githubusercontent.com/86667412/146469864-dddcde01-4802-40d4-b6f4-ccff728b64a8.png',
          description:
            '운영 체제: macOS노드 버전(node -v): v14.17.3현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?토이 27번 문제 풀이 중 매 단계마다 그래프가 변하는 모습을 보고싶은데 console.log로 보려고 하면 모든 그래프가 동일하게 보입니다 (...',
          stack: 'PHP',
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
