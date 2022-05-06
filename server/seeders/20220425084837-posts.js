'use strict';
/* eslint-disable */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          done: 0,
          userId: 1,
          title:
            '로컬node.js서버에서 RDS 연결 문제로 서버가 실행 되지 않습니다',
          content:
            '<p>server 폴더에서 npm run start로 서버를 실행하면<img src="https://user-images.githubusercontent.com/93461412/166882197-d98ac85f-2700-46ae-9f25-12d8700bb78c.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>ConnectionError [SequelizeConnectionError]: connect ETIMEDOUT</p><p><br class="ProseMirror-trailingBreak"></p><p>와 같은 오류가 뜹니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>저기 오류 중간에 mysql2가 보이므로 DB관련해 접속이 안되는것으로 판단하였습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>시퀄라이즈 환경설정 ./config/config.js는</p><p><img src="https://user-images.githubusercontent.com/93461412/166882589-5964d253-8a70-40c2-aef6-22f54dabe3ca.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>이며 그에 따른 로컬 서버내 .env 환경변수파일은</p><p><img src="https://user-images.githubusercontent.com/93461412/166882847-ced7d86a-e627-439e-ace0-017a42f273b0.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>로 설정하였습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>밑의 사진은 rds 보안그룹 인바운드 규칙입니다.</p><p><img src="https://user-images.githubusercontent.com/93461412/166882986-ff1871c4-b4b4-4fc8-b2c6-423d5339f2ea.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://user-images.githubusercontent.com/93461412/166882197-d98ac85f-2700-46ae-9f25-12d8700bb78c.png',
          description:
            'server 폴더에서 npm run start로 서버를 실행하면ConnectionError [SequelizeConnectionError]: connect ETIMEDOUT와 같은 오류가 뜹니다.저기 오류 중간에 mysql2가 보이므로 DB관련해 접속이 안되는것으로 ...',
          stack: 'MySQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 2,
          title:
            'https 배포 환경에서 쿠키 옵션을 samesite = none, secure=true 로 설정한 이후에도 쿠키 전송이 이루어지지 않는 문제',
          content: `<p>클라이언트와 서버 모두 https로 배포를 완료한 상황인데,</p><p>서버에서 옵션 설정을 하여 쿠키를 보내주었음에도 불구하고 브라우저상에서 쿠키가 확인되지 않고 있습니다.</p><p>(set-cookie 헤더 확인이 안 되며 application 탭에서도 쿠키 확인이 되지 않습니다.)</p><p><br class="ProseMirror-trailingBreak"></p><p>쿠키 옵션 설정 방법에 대해 다시 찾아보았습니다.</p><p>현재 클라이언트와 서버의 도메인이 모두 다르며,</p><p>https로 통신이 가능하기 때문에 samesite = none, secure=true로 설정하는 것이 맞다는 것을 확인했습니다.</p><p>또한 domain 옵션의 경우, 쿠키가 유효하게 사용될 수 있는 도메인을 기재해야 한다고 확인했습니다.</p><p>path 옵션은 쿠키가 전달될 수 있는 유효한 경로, 즉 서버 측의 경로를 기재해야 한다고 알고 있습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>크롬 브라우저 설정 -&gt; 개인정보 및 보안 -&gt; 모든 쿠키 및 사이트 데이터에 저장된 쿠키가 있는지 확인했으나 저장되어 있는 쿠키가 없었습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>pm2 log 명령어를 통해 확인한 에러 코드에서 option sameSite is invalid 라는 문구를 보고 samesite 옵션만 주석 처리한 뒤, 다시 로그인 요청을 보내보았지만,쿠키가 저장되지 않았습니다. 이떄 응답의 set cookie 헤더에 있는 노란색 경고 아이콘 위에 마우스를 올리면, samesite 옵션이 기본값 lax로 설정되어 있으니 다른 도메인으로 쿠키를 전송하기 어렵다는 문구가 떴습니다. (로그인 성공했다는 응답 코드는 확인 가능했습니다.)</p><p><br class="ProseMirror-trailingBreak"></p><p>=&gt; 즉, samesite 옵션을 none으로 설정해 주면, option sameSite is invalid 라는 메세지와 함께 서버 에러가 발생하며,</p><p>이를 해결하고자 samesite 옵션을 제거하면 samesite none으로 설정해 달라고 확인이 됩니다. (모순되는 상황)</p><p><br class="ProseMirror-trailingBreak"></p><p>현재 클라이언트는 pida.ga 도메인(freenom에서 구매)을, 서버는 server.pida.link(route53에서 구매) 로 도메인을 사용중이고</p><p>둘 다 모두 https 배포가 이루어졌기 때문에 samesite: none, secure: true로 쿠키 옵션을 설정하였는데,</p><p>option sameSite is invalid 에러 메세지가 뜨며 쿠키 저장이 안 되는 점이 잘 이해되지 않습니다. 어떤 부분을 더 확인해야 할지 답변주시면 감사하겠습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>현재 사용중인 도메인</p><p>클라이언트: pida.ga (freenom에서 구입)</p><p>서버: server.pida.link (route53에서 구입)</p><p><br class="ProseMirror-trailingBreak"></p><p>현재 설정된 쿠키 옵션입니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const options = {
            httpOnly: true,
            sameSite: "none",
            secure: true,
            domain: "server.pida.link",
            path: "/",
            maxAge: 1000 * 60 * 60 * 24 * 7,
  };
  return res
            .status(201)
            .cookie("accessToken", accessToken, options)
            .json({ message: "로그인에 성공했습니다" });</code></pre></div><p>위 상태에서 로그인 요청을 보냈을 땐, EC2 터미널에서는 아래와 같은 코드가 출력되었습니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>0|App  | OPTIONS /users/login 204 0.186 ms - 0
  0|App  | Executing (default): SELECT "id", "email", "password", "nickname", "createdAt", "updatedAt" FROM "Users" AS "User" WHERE "User"."email" = "ssss@ssss.com" LIMIT 1;
  0|App  | TypeError: option sameSite is invalid
  0|App  |     at Object.serialize (/home/ubuntu/Pida/server/node_modules/express/node_modules/cookie/index.js:174:15)
  0|App  |     at ServerResponse.res.cookie (/home/ubuntu/Pida/server/node_modules/express/lib/response.js:853:36)
  0|App  |     at login (/home/ubuntu/Pida/server/controllers/AuthController.js:67:12)
  0|App  | POST /users/login 500 101.815 ms - 62</code></pre></div><p>네트워크 요청은 다음과 같이 확인됩니다:</p><p><br class="ProseMirror-trailingBreak"></p><p>[samesite none으로 설정한 경우]</p><p>set cookie 헤더가 확인되지 않으며, application 탭에서도 저장된 쿠키가 없습니다</p><p><img src="https://camo.githubusercontent.com/dd72f70dfde4eac2dd8b9bdf57503a8adcc0c83a453889268ddfae5d04a48a25/68747470733a2f2f76656c6f672e76656c63646e2e636f6d2f696d616765732f737578787a7a792f706f73742f32653664383433662d343635322d346166662d386661642d6463393464373135643331392f696d6167652e706e67" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><img src="https://camo.githubusercontent.com/e98fbd0c0b3fbdabd73d6b7feb4479dd1d7250ed6eee39c823d542b0c7dc78e3/68747470733a2f2f76656c6f672e76656c63646e2e636f6d2f696d616765732f737578787a7a792f706f73742f36343334633765342d303137312d343834322d616164342d6531663232363039626636352f696d6167652e706e67" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>[samesite 옵션을 해제한 경우]</p><p>이 역시도 application 탭에서도 저장된 쿠키가 없습니다</p><p><img src="https://camo.githubusercontent.com/9e3996008f359e216cfbb3234e15fc01fa5934336f0b4451f1d2c09b9c709c10/68747470733a2f2f76656c6f672e76656c63646e2e636f6d2f696d616765732f737578787a7a792f706f73742f38313339386435302d356437392d343733632d616238372d6561363233393636366336302f696d6167652e706e67" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>`,
          thumbnail:
            'https://camo.githubusercontent.com/dd72f70dfde4eac2dd8b9bdf57503a8adcc0c83a453889268ddfae5d04a48a25/68747470733a2f2f76656c6f672e76656c63646e2e636f6d2f696d616765732f737578787a7a792f706f73742f32653664383433662d343635322d346166662d386661642d6463393464373135643331392f696d6167652e706e67',
          description:
            '클라이언트와 서버 모두 https로 배포를 완료한 상황인데,서버에서 옵션 설정을 하여 쿠키를 보내주었음에도 불구하고 브라우저상에서 쿠키가 확인되지 않고 있습니다.(set-cookie 헤더 확인이 안 되며 application 탭에서도 쿠키 확인이 되지 않습니다.)쿠키...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: 'EC2 파이프라인 Deploy단계 실패 - S3 이미지 업로드 관련',
          content: `<p>S3업로드 코드로 인한 EC2 파이프라인 Deploy단계 실패입니다.</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>LifecycleEvent - AfterInstall
          Script - scripts/initialize.sh
          [stdout]
          [stdout]up to date, audited 314 packages in 7s
          [stdout]
          [stdout]27 packages are looking for funding
          [stdout] run "npm fund" for details
          [stdout]
          [stdout]found 0 vulnerabilities
          [stdout]
          [stdout]up to date, audited 314 packages in 40s
          [stdout]
          [stdout]27 packages are looking for funding
          [stdout] run "npm fund" for details
          [stdout]
          [stdout]found 0 vulnerabilities
          [stderr]npm WARN deprecated uuid@3.4.0: Please upgrade to version 7 or higher. Older versions may use Math.random() in certain circumstances, which is known to be problematic. See https://v8.dev/blog/math-random for details.
          [stdout]
          [stdout]changed 182 packages, and audited 183 packages in 4m
          [stdout]
          [stdout]12 packages are looking for funding
          [stdout] run "npm fund" for details
          [stdout]
          [stdout]found 0 vulnerabilities
          [stdout]Hit:1 http://ap-northeast-2.ec2.archive.ubuntu.com/ubuntu bionic InRelease
          [stdout]Get:2 http://ap-northeast-2.ec2.archive.ubuntu.com/ubuntu bionic-updates InRelease [88.7 kB]
          [stdout]Get:3 http://ap-northeast-2.ec2.archive.ubuntu.com/ubuntu bionic-backports InRelease [74.6 kB]
          [stdout]Get:4 http://security.ubuntu.com/ubuntu bionic-security InRelease [88.7 kB]
          [stderr]</code></pre></div><p>initialize.sh</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>#!/bin/bash
          cd /home/ubuntu/pictureStory/server
          npm install
          npm install pm2@latest -g
          sudo apt-get update
          sudo apt-get install authbind
          sudo touch /etc/authbind/byport/80
          sudo chown ubuntu /etc/authbind/byport/80
          sudo chmod 755 /etc/authbind/byport/80</code></pre></div><p>참고</p><p>아래코드를 주석처리하면 Deploy단계가 성공합니다(실패원인이라 볼 수 있습니다).</p><p>server/config/s3.js</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const multer = require("multer");
          const multerS3 = require("multer-s3");
          const aws = require("aws-sdk");
          require("dotenv").config();
          
          const s3 = new aws.S3({
            accessKeyId: process.env.S3_KEYID,
            secretAccessKey: process.env.S3_PRIVATE_KEY,
            region: process.env.REGION,
          });
          
          let upload = multer({
            storage: multerS3({
              s3: s3,
              bucket: process.env.BUCKET_NAME,
              contentType: multerS3.AUTO_CONTENT_TYPE,
              acl: "public-read",
              key: (req, file, cb) =&gt; {
                const { email } = req.body;
              },
            }),
          });
          
          exports.upload = multer(upload);</code></pre></div><p>server/controllers/uploadS3.js</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const { image } = require("../../models");
          
          module.exports = (req, res) =&gt; {
            const { email } = req.body;
            const Img = req.file;
          
            image.create({
              email: email,
              image: Img.location,
            });
          
            return res.status(201).send({
              data: Img.location,
            });
          };</code></pre></div><p>server/controllers/index.js</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>uploadS3: require("./s3/uploadS3"),</code></pre></div><p>server/index.js</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>const { upload } = require("./config/s3");
          
          app.post("/upload", upload.single("userImg"), controllers.uploadS3);</code></pre></div>`,
          thumbnail: null,
          description:
            'S3업로드 코드로 인한 EC2 파이프라인 Deploy단계 실패입니다.LifecycleEvent - AfterInstall\nScript - scripts/initialize.sh\n[stdout]\n[stdout]up to date, audited 314 packag...',
          stack: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 4,
          title: 'Typescript, 자동배포 적용시 CORS 적용',
          content:
            '<p>EC2 엔드포인트와 DNS 엔드포인트에 잘 접속되는 상황.</p><p>route53을 사용하여 S3와 EC2, Domain 연결</p><p>(AWS 자동 배포를 위한 작업을 진행중, 도메인을 따로 구매하여 s3에 연결한 상태)</p><p><br class="ProseMirror-trailingBreak"></p><p>EC2 재생성, codePipeline 재설정, https 설정, 등등...</p><p>Chrome 에서는 CORS에 대한 규제가 강력하여 safari에서 진행을 해봄 =&gt; safari에서는 200 code를받았지만 쿠키가 저장이 안됨.</p><p><br class="ProseMirror-trailingBreak"></p><p>typescript, https 사용시 CORS option</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>Access to XMLHttpRequest at \'https://test.v-ting.net/session\' from origin \'https://v-ting.net\' has been blocked by CORS policy: Request header field cache is not allowed by Access-Control-Allow-Headers in preflight response.</code></pre></div><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>//SERVER(index.ts)\nimport express, {\n  ErrorRequestHandler,\n  Request,\n  Response,\n  NextFunction,\n} from "express";\nimport dotenv from "dotenv";\nimport userRoutes from "./routes/user";\nimport sessionRoutes from "./routes/session";\nimport authRoutes from "./routes/auth";\nimport cors from "cors";\n// import voteRoutes from "./routes/vote";\n// import voterRoutes from "./routes/voter";\ndotenv.config();\n\nconst PORT = 8070;\nconst app: express.Application = express();\n\napp.get("/", (req: Request, res: Response, next: NextFunction) =&gt; {\n  res.send("Hello Vting!");\n});\n\nconst allowedOrigins = [\n  "http://localhost:3000",\n  "http://v-ting.net",\n  "https://v-ting.net",\n  "https://*.v-ting.net",\n];\n\nconst options: cors.CorsOptions = {\n  allowedHeaders: [\n    "Origin",\n    "X-Requested-With",\n    "Content-Type",\n    "Accept",\n    "X-Access-Token",\n  ],\n  credentials: true,\n  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",\n  origin: allowedOrigins,\n  preflightContinue: false,\n};\napp.use(cors(options));</code></pre></div><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>// SERVER(constroller, test 용)\n\n  const logOut = async () =&gt; {\n    try {\n      const response = await axios({\n        method: "get", // 통신 방식\n        url: "https://test.v-ting.net/session", // 서버\n        headers: { withCredentials: true }, // 요청 헤더 설정\n      });\n\n      if (response.status === 200) {\n        dispatch(setIsLogin(false));\n        console.log("로그아웃에 성공하셨습니다.");\n      }\n    } catch (e) {\n      console.log(e);\n    }\n  };</code></pre></div><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>// CLIENT\nsignOut: {\n  get: async (req: Request, res: Response) =&gt; {\n\n    function getCookie(name: any) {\n      let matches = req.headers.cookie.match(\n        new RegExp(\n          "(?:^|; )" +\n            name.replace(/([\\.$?*|{}\\(\\)\\[\\]\\\\\\/\\+^])/g, "\\\\$1") +\n            "=([^;]*)"\n        )\n      );\n      return matches ? decodeURIComponent(matches[1]) : undefined;\n    }\n\n    const accessToken = getCookie("accessToken");\n\n    const user_id = jwt.verify(\n      accessToken as string,\n      process.env.ACCESS_SECRET as jwt.Secret\n    );\n\n    try {\n      if (user_id) {\n        res.clearCookie("accessToken", { sameSite: "none", secure: true });\n        return res.status(200).json({ message: "Successfully logged out" });\n      }\n    } catch (err) {\n      console.log(err);\n      return res.status(400).json({ message: "Failed logged out" });\n    }\n  },\n},</code></pre></div><p><img src="https://user-images.githubusercontent.com/87470206/160419225-56ee7c30-cda5-4981-95a3-5ff60f147e4e.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://user-images.githubusercontent.com/87470206/160419225-56ee7c30-cda5-4981-95a3-5ff60f147e4e.png',
          description:
            'EC2 엔드포인트와 DNS 엔드포인트에 잘 접속되는 상황.route53을 사용하여 S3와 EC2, Domain 연결(AWS 자동 배포를 위한 작업을 진행중, 도메인을 따로 구매하여 s3에 연결한 상태)EC2 재생성, codePipeline 재설정, https 설정, ...',
          stack: 'TypeScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 5,
          title: 'React에서 getElementsByClassName과 같은 기능이 필요합니다',
          content:
            '<p><img src="https://user-images.githubusercontent.com/33453360/160253750-e6d5c8a5-1853-4404-a608-0caaeff0328c.PNG" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><img src="https://user-images.githubusercontent.com/33453360/160253732-10165911-b033-4ba0-a311-9e0e1a9ee89a.PNG" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>자식 엘리먼트중 className가 today인 요소만 찾아서 className을 변경하려고 합니다</p><p>getElementsByClassName을 쓰면 찾을수 잇겟지만</p><p>react에서 가상돔이 어쩌구하면서(무슨말인지 모르겠어서 표현이 마땅치않네요) 직접적인 돔조작은 지양하라고 들었습니다</p><p>때문에 useRef를 사용중인데 자식요소중 className이 today인 자식만 골라내는 방법을 모르겠습니다.</p><p>가능하면</p><p>map을 돌려서 순차적인 검색을 하는 방법보다 배열에서 인덱스로 접근하듯히 한 번에 찾는 방법을 찾고있습니다</p><p>도움 부탁드리겠씁니다</p><div data-language="text" class="toastui-editor-ww-code-block"><pre><code>import React, {useEffect, useState, useRef} from "react";\n\nfunction Temp() {\n  const [cells, setCells] = useState([]);\n  const daysRef = useRef(null);\n\n  useEffect(() =&gt; {\n    let cells = [];\n    for (let i = 1; i &lt; 31; i++) {\n      if (1 === 17) {\n        cells.push({className: "today", day: i});\n      } else {\n        cells.push({className: "", day: i});\n      }\n    }\n    setCells(cells);\n  }, []);\n\n  function pickDay(e) {\n    console.log("픽미픽미", e.target, daysRef.current.children);\n    console.dir(daysRef.current.children);\n  }\n\n  return (\n    &lt;div&gt;\n      &lt;div className="days" ref={daysRef}&gt;\n        {cells.map((v, i) =&gt; {\n          //   console.log(v);\n          return (\n            &lt;div key={i} className={v.className} onClick={pickDay}&gt;\n              {v.day}\n            &lt;/div&gt;\n          );\n        })}\n      &lt;/div&gt;\n    &lt;/div&gt;\n  );\n}\nexport default Temp;</code></pre></div><p>위 글이 길어서 요약입니다</p><p>실행할수있는 예제코드를 만들어 보았습니다</p><p>ref가 달려있는 부모인 days에서 자식중 className가 today인 녀석만 효율적으로 찾는 방법을 알고싶습니다</p>',
          thumbnail:
            'https://user-images.githubusercontent.com/33453360/160253750-e6d5c8a5-1853-4404-a608-0caaeff0328c.PNG',
          description:
            '자식 엘리먼트중 className가 today인 요소만 찾아서 className을 변경하려고 합니다getElementsByClassName을 쓰면 찾을수 잇겟지만react에서 가상돔이 어쩌구하면서(무슨말인지 모르겠어서 표현이 마땅치않네요) 직접적인 돔조작은 지양하라고...',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title: 'EC2 https 연결 시 502 bad gateway',
          content:
            '<p>파이널 배포 중 로드밸런서를 사용해 https로 서버를 배포하는 중 링크를 통한 확인 과정에서 계속 502를 띄웁니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?</p><p><br class="ProseMirror-trailingBreak"></p><p>route 52를 통한 도메인 구입과 인증서 발급</p><p>로드 밸런서 생성</p><p>대상그룹 http, https 로 나눠 양쪽 다 만들어 놓은 인스턴스 타깃지정</p><p>라우터 별칭 설정으로 구매한 도매인 접속</p><p>사실상 코드스테이츠의 과정과 그 외 유사한 과정들을 많이 반복해봤습니다. 하지만 계속 502 오류를 띄우고,</p><p>대상 그룹(Target groups)은 모두 Unhealthy상태를 띄웁니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>어떠한 부분에서 이해가 안 되었나요?</p><p>인증서를 가져와서 https를 띄우는 것 까지는 되는데 그 외 서버의 모든 동작이 안되는 게 이해되지 않습니다.</p><p>유어클래스에 나온 과정이나 다른 부분에서 빼먹은 게 없다고 생각하는데 502를 띄웁니다.</p><p>포트는 http는 80, https는 443을 쓰고 있고, 80으로 요청이 들어올경우 https로 리다이렉트 시켜주고 있습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>요청은 sever.newb-d.com 으로 보내고 있지만 요청 자체가 가질 않습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>https만 잘 작동하고 계속 502 bad gateway만 나옵니다.</p><p>어떤 문제인지 감이 잘 잡히지 않습니다. 해결방법 제시해주시면 감사하겠습니다</p>',
          thumbnail: null,
          description:
            '파이널 배포 중 로드밸런서를 사용해 https로 서버를 배포하는 중 링크를 통한 확인 과정에서 계속 502를 띄웁니다.안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?route 52를 통한 도메인 구입과 인증서 발급로드 밸런서 생성대상그룹 http, h...',
          stack: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title: 'styled-component로 만든 요소의 id로 위치 찾는 방법',
          content:
            '<p>styled-component로 만든 요소의 id로 위치 찾는 방법</p><p><br class="ProseMirror-trailingBreak"></p><p>에러 코드를 붙여넣기 해 주세요.<img src="https://user-images.githubusercontent.com/86667412/154794972-99560c3c-5d7a-4360-af36-5bd8ffc55660.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>컴포넌트 내에서 스타일드 컴포넌트 요소를 선언/할당</p><p>해당 에러 메세지 자체는 아래 블로그를 보고 해결 하였습니다</p><p>https://letsgojieun.tistory.com/m/120</p><p><br class="ProseMirror-trailingBreak"></p><p>처음에 원인은 알았지만 에러가 발생한 요소의 위치를 몰라 잠깐 해맸는데</p><p>클릭해보니 관련된 컴포넌트를 확인할 수 있었습니다<img src="https://user-images.githubusercontent.com/86667412/154795074-1d67481b-b1a2-4981-a0d4-9b7da86d1bdb.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p><br class="ProseMirror-trailingBreak"></p><p>그런데 만약에 "sc-jKTccl"로 이름 붙여진 요소를 제가 검색하려고 하면 따로 방법이 있는지 궁금합니다</p><p>"sc-jKTccl" &lt;= 이 부분의 명칭도 모르다보니 검색을 해도 잘 안나와서요</p>',
          thumbnail:
            'https://user-images.githubusercontent.com/86667412/154794972-99560c3c-5d7a-4360-af36-5bd8ffc55660.png',
          description:
            'styled-component로 만든 요소의 id로 위치 찾는 방법에러 코드를 붙여넣기 해 주세요.컴포넌트 내에서 스타일드 컴포넌트 요소를 선언/할당해당 에러 메세지 자체는 아래 블로그를 보고 해결 하였습니다https://letsgojieun.tistory.com/m...',
          stack: 'CSS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 8,
          title: 'useCallback 디펜던시 없을 경우 사용법 질문',
          content:
            '<p>https://ko.reactjs.org/docs/hooks-reference.html#usecallback</p><p>공식문서 봐도 적절한 내용이 보이지 않습니다</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">  const temp = useCallback(() =&gt; {})</code></pre></div',
          thumbnail: null,
          description:
            'https://ko.reactjs.org/docs/hooks-reference.html#usecallback공식문서 봐도 적절한 내용이 보이지 않습니다  const temp = useCallback(() =&gt; {})',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 9,
          title: 'sequelize에 foreign key 추가시 에러가 발생합니다',
          content:
            '<p>sequelize에서 foreign key를 추가하는 중이었고,</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">ERROR: references.fields.map is not a function</code></pre></div><p>라는 에러를 만났습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>깃헙에서 추가 항목으로 Array 값을 업데이트하려고 할 때 동일한 오류가 발생합니다.라는 말을 보았으나 이 문제와 같은 문제인건지 어떻게 해결해야하는건지 전혀 감이 안잡힙니다.</p><p>유어클래스 shortly-mvc advanced의 reference 코드를 참고했지만 해결되지 않았습니다.</p><div data-language="js" class="toastui-editor-ww-code-block"><pre><code data-language="js">"use strict";\nmodule.exports = {\n  async up(queryInterface, Sequelize) {\n    await queryInterface.createTable("userInfos", {\n      id: {\n        allowNull: false,\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n      },\n      username: {\n        type: Sequelize.STRING\n      },\n      password: {\n        type: Sequelize.STRING\n      },\n      email: {\n        type: Sequelize.STRING\n      },\n      mobile: {\n        type: Sequelize.STRING\n      },\n      createdAt: {\n        allowNull: false,\n        type: Sequelize.DATE\n      },\n      updatedAt: {\n        allowNull: false,\n        type: Sequelize.DATE\n      }\n    });\n  },\n  async down(queryInterface, Sequelize) {\n    await queryInterface.dropTable("userInfos");\n  }\n};\n\n"use strict";\nmodule.exports = {\n  async up(queryInterface, Sequelize) {\n    await queryInterface.createTable("contents", {\n      id: {\n        allowNull: false,\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n      },\n      content: {\n        type: Sequelize.STRING\n      },\n      createdAt: {\n        allowNull: false,\n        type: Sequelize.DATE\n      },\n      updatedAt: {\n        allowNull: false,\n        type: Sequelize.DATE\n      }\n    });\n  },\n  async down(queryInterface, Sequelize) {\n    await queryInterface.dropTable("contents");\n  }\n};\n\n"use strict";\nmodule.exports = {\n  async up(queryInterface, Sequelize) {\n    await queryInterface.createTable("colors", {\n      id: {\n        allowNull: false,\n        autoIncrement: true,\n        primaryKey: true,\n        type: Sequelize.INTEGER\n      },\n      colorname: {\n        type: Sequelize.STRING\n      },\n      createdAt: {\n        allowNull: false,\n        type: Sequelize.DATE\n      },\n      updatedAt: {\n        allowNull: false,\n        type: Sequelize.DATE\n      }\n    });\n  },\n  async down(queryInterface, Sequelize) {\n    await queryInterface.dropTable("colors");\n  }\n};\n\n"use strict";\n\nmodule.exports = {\n  async up (queryInterface, Sequelize) {\n\n    await queryInterface.addColumn("contents", "color_id", Sequelize.INTEGER);\n\n    await queryInterface.addConstraint("contents", {\n      fields: ["color_id"],\n      type: "foreign key",\n      name: "color_id_in_contents",\n      references: { \n        table: "colors",\n        fields: "id"\n      },\n      onDelete: "cascade",\n      onUpdate: "cascade"\n    });\n\n    await queryInterface.addColumn("contents", "userInfo_id", Sequelize.INTEGER);\n    \n    await queryInterface.addConstraint("contents", {\n      fields: ["userInfo_id"],\n      type: "foreign key",\n      name: "userInfo_id_in_contents",\n      references: { \n        table: "userInfos",\n        fields: "id"\n      },\n      onDelete: "cascade",\n      onUpdate: "cascade"\n    });\n\n  },\n\n  async down (queryInterface, Sequelize) {\n\n    await queryInterface.removeConstraint("contents", "color_id_in_contents");\n    await queryInterface.removeColumn("contents", "color_id");\n\n    await queryInterface.removeConstraint("contents", "userInfo_id_in_contents");\n    await queryInterface.removeColumn("contents", "userInfo_id");\n  }\n};\n\n<br class="ProseMirror-trailingBreak"></code></pre></div>',
          thumbnail: null,
          description:
            'equelize에서 foreign key를 추가하는 중이었고,ERROR: references.fields.map is not a function라는 에러를 만났습니다.깃헙에서 추가 항목으로 Array 값을 업데이트하려고 할 때 동일한 오류가 발생합니다.라는 말을 보...',
          stack: 'MySQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 1,
          title:
            'Sequelize의 Create 명령으로 foreign key 를 갖는 칼럼에 데이터가 추가되지 않습니다.',
          content:
            '퍼스트 프로젝트진행중 문제가 발생하였습니다.\n\n![image](https://user-images.githubusercontent.com/48780896/150674492-64b746ad-eea0-400c-9b20-cf36969927a7.png)\n해당 스크린샷에서 알 수 있듯 저희가 만든 데이터베이스의 Review 테이블은 User 테이블의 id와 Item 테이블의 id를 Foreign key로 가지고 있습니다.\n![image](https://user-images.githubusercontent.com/48780896/150674648-256eec0c-23ee-4f61-a1da-2396303349b2.png)\n문제는 이 테이블에 임의로 데이터를 추가하려고 할 때 발생합니다.\n저희가 만들려고 하는 리뷰 작성 요청을 위해 req.body에 userid, itemid, score, content 값을 보내주고 이 값들을 CREATE 명령을 이용 Review 테이블에 추가하는것을 의도하였습니다만\n![image](https://user-images.githubusercontent.com/48780896/150674853-c15e1f67-ef24-4ccd-99e2-9242c936dc12.png)\n어째서인지 이 테이블에 새로운 데이터를 추가하려고 할 때 user_id와 item_id의 값이 Null값으로 채워집니다. 포린키가 아닌 나머지 필드값은 정상적인 값이 채워지구요.\n혹시나 포린키로 설정되있기 때문에 안되는 것인가 해서 저희가 직접 데이터베이스에 INSERT INTO를 활용해\n(INSERT INTO Hello_Convi.reviews (id,user_id,item_id,score,content,createdAt,updatedAt) VALUES (3,4,3,5,"별루","2012:12:1","2012:12:22")) 임의로 값을 넣었더니 이때는 정상적으로 테이블에 데이터값이 들어가는것을 확인할 수 있었습니다.\n![image](https://user-images.githubusercontent.com/48780896/150675187-026819df-3465-4987-86c3-deabfbacc773.png)\n*물론 INSERT INTO Hello_Convi.reviews (id,user_id,item_id,score,content,createdAt,updatedAt) VALUES (6,55,34,5,"별루","2012:12:1","2012:12:22") 처럼 참조범위를 벗어나게 값을 지정해주면 오류가 발생하는것은 확인하였지만 저희가 sequelize를 사용할때 userid와 itemid 모두 user 테이블과 item 테이블에 존재하는 값으로 사용한것을 확인하였습니다.\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\nforeign key 관련 검색을 진행하였으나 단순 포린키 설정법 혹은 참조관계등 저희가 처한 문제와 관련이 없는 문제에 대한 글들이 대다수를 차지하였습니다.\n포린키의 참조 영역을 벗어났기 때문인가 싶어서 데이터베이스 초기화후 각각의 아이디가 범위밖으로 벗어나지 않도록 다시 진행하여도 동일한 오류가 발생합니다.\n\n어떠한 부분에서 이해가 안 되었나요?\n상술하였듯 포린키 부분이 제대로 데이터가 들어가지 않는 이유를 모르겠습니다.\n\n',
          thumbnail:
            'https://user-images.githubusercontent.com/48780896/150674492-64b746ad-eea0-400c-9b20-cf36969927a7.png',
          description:
            '퍼스트 프로젝트진행중 문제가 발생하였습니다.해당 스크린샷에서 알 수 있듯 저희가 만든 데이터베이스의 Review 테이블은 User 테이블의 id와 Item 테이블의 id를 Foreign key로 가지고 있습니다.문제는 이 테이블에 임의로 데이터를 추가하려고 할 때 발...',
          stack: 'MySQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 2,
          title:
            'useState를 이용한 상태관리중 상태변경이 의도대로 되지 않는 문제가 있습니다',
          content:
            'Final 프로젝트 진행중 막힌 부분이 있어서 질문 남깁니다. useState로 상태관리를 하던 중 특정 버튼을 클릭했을 때, 상태변경과 함께 history.push로 path로 이동하면서 변경된 state를 전달하는 로직을 구현중인데, 정상적으로 state가 변경되지 않는 현상입니다.\n\n콘솔로그로 데이터 값이 어떻게 변하는지 확인했고, getFollowInfo 함수 내부에서는 setFollowInfo함수가 종료되어도 followInfo 상태가 변경되지 않지만, getFollowInfo가 종료된 직후 상태가 변경되었음을 확인했습니다.\n온클릭 이벤트로 2개의 이벤트핸들러를 전달할 수 없는데, 각각 두 가지 로직을 한 컴포넌트에서 처리해야 하는 문제를 해결하지 못했습니다.\n혹시 리덕스를 사용하면 가능할까 싶었지만, 함수 내부에서 상태가 변경되지 않고는 리덕스를 사용하더라도 해당 컴포넌트 내부에서만 상태변경이 확인되고, history.push로 이동할 페이지로의 상태 전송은 일어나지 않았습니다.\n\n다음은 해당 컴포넌트에 작성한 코드입니다.\n\n```js\nexport const Followfeed = ({ followFeedList }) => {\n  const dispatch = useDispatch();\n  const history = useHistory();\n  // 팔로우 취소 버튼 클릭시 알람 모달 오픈\n  const [isOpen, setInOpen] = useState(false)\n  const [followInfo, setFollowInfo] = useState({\n    id: "",\n    userId: "",\n    userNickName: "",\n    userImage: "",\n  })\n\n  const getFollowInfo = (el) => {  // 이 함수가 온클릭 이벤트로 작동할 때 내부에 있는 setFollowInfo 함수가 의도대로 작동하지 않습니다.\n    setFollowInfo({ \n      id: el.id,\n      userId: el.userId,\n      userNickName: el.userNickName,\n      userImage: el.userImage\n    })\n    dispatch(FollowInfoAction(followInfo))\n    history.push({              \n      pathname: `/userPage/${followInfo.userNickName}`,\n      state: { followInfo: followInfo }})\n  }\n{/* ----- 생략 ----- */}\n  const feedList = followFeedList.map((el, index) => {\n    return (\n      <UserInfoContainer key={index} >\n        <UserInfo>\n          <UserNameAndImage>\n            <UserImageContainer onClick={() => getFollowInfo(el)} >  // 함수가 사용되는 위치입니다.\n              {el.userImage.length === 0\n                ? <UserImage src={el.userImage} />\n                : <DefaultUserImage src={userImage} />}\n            </UserImageContainer>\n            <UserNickName onClick={() => getFollowInfo(el)} >\n              {el.userNickName}\n            </UserNickName>\n            <UserFollowIcon value={el.id} onClick={() => followHandler(el)}>\n              {el["Articles.user_Id"] === el["Follows.follow_Id"] ? <FaUserCheck onClick={NoticeModalOpenHandler}/> : "팔로우"}\n            </UserFollowIcon>\n          </UserNameAndImage>\n          <PostCreatedAt>\n            {el["Articles.createdAt"]}\n          </PostCreatedAt>\n        </UserInfo>\n        <ContentsContainer>\n          <Sentence>{el["Articles.sentense"]}</Sentence>\n          <Comment>{el["Articles.comment"]}</Comment>\n          <BookInfo>{el["Articles.book_Title"]} | {el["Articles.book_Author"]} </BookInfo>\n        </ContentsContainer>\n      </UserInfoContainer>\n    );\n  });\n  \n  return (\n    <>\n      <FeedContentContainer>\n        {isOpen ? <NoticeModal NoticeModalOpenHandler={NoticeModalOpenHandler} followInfo={followInfo}/> : null}\n        {followFeedList.length === 0\n          ? <div>검색한 결과가 없습니다.</div>\n          : <>\n            {feedList}\n          </>}\n      </FeedContentContainer>\n    </>\n  );\n};\n```\n\nsetFollowInfo 상태변경 함수가 정상적으로 종료되었음에도 상태변경이 getFollowInfo 함수 내부에서 확인되지 않는 점.\n한 컴포넌트에서 상태변경과 history.push가 동시에 필요한 상황이 저희만 있는 문제는 아닐텐데, 참고할만한 레퍼런스를 찾기 힘들었습니다. 저희가 로직상 설계를 잘못했을까요?',
          thumbnail: null,
          description:
            'Final 프로젝트 진행중 막힌 부분이 있어서 질문 남깁니다. useState로 상태관리를 하던 중 특정 버튼을 클릭했을 때, 상태변경과 함께 history.push로 path로 이동하면서 변경된 state를 전달하는 로직을 구현중인데, 정상적으로 state가 변경되...',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: 'axios으로 전송한 요청이 withCredentials 문제로 차단됩니다',
          content:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?\n\nReact로 구현한 웹 서비스에서 axios로 외부 API의 정보를 받아오는 시도 중 CORS문제가 발생했습니다.\n기능이 복잡해 따로 프로젝트를 만들어 연습할 때는 문제가 없었는데, 메인 프로젝트로 옮겨와 적용하니 CORS문제로 응답 수신이 거부됩니다.\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\n\nwithCredentials 문제라고 생각해 헤더에서 withCredentials: false로 전송해 보았는데 같은 오류가 발생했습니다.\n구글링을 통해 서버/클라이언트 모두 credentials 설정을 해 줘야 한다는 점은 알 수 있었지만,\n제 경우에는 외부 API로 요청을 보내는 상황이라 적용하기 힘들 것 같습니다.\n\n어떠한 부분에서 이해가 안 되었나요?\n\naxios는 기본값으로 withCredentials 값이 false로 적용된다고 하는데, 로그인하지 않은 상태에서도 요청을 전송하면 오류가 발생하는지 모르겠습니다. 쿠키를 삭제한 후에 다시 요청을 전송해도 같은 오류가 발생합니다.\n\n에러 코드를 붙여넣기 해 주세요.\n\n오류 발생한 함수와 구글 콘솔 창에서 받은 에러 내용을 첨부했습니다.\n\n```js\nconst weather = await axios({\n      method: "GET",lat=${endLat}&lon=${endLng}&appid=46ef901de3b2efd51f01cc77ce74f69b`\n      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${endLat}&lon=${endLng}&exclude=daily,alerts&units=metric&appid=46ef901de3b2efd51f01cc77ce74f69b&lang=kr`\n    })\n```\n\n```js\n    const now = await axios({\n      method: "GET",\n      url: `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${loc[1]}&y=${loc[0]}&output_coord=WCONGNAMUL`,\n      headers: {\n        Authorization: "KakaoAK c62c1cd6ebb77ae75a755cdc15bb59e1"\n      }\n    })\n```\n```js\nAccess to XMLHttpRequest at [요청 URL] from origin [클라이언트 주소] has been blocked by CORS policy: \nThe value of the "Access-Control-Allow-Origin" header in the response must not be the wildcard "*" when the request"s credentials mode is "include". \nThe credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.\n```\n\n```js\nGET https://dapi.kakao.com/v2/local/geo/transcoord.json?x=129.0251198&y=35.3425871&output_coord=WCONGNAMUL net::ERR_FAILED 401\n```',
          thumbnail: null,
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?React로 구현한 웹 서비스에서 axios로 외부 API의 정보를 받아오는 시도 중 CORS문제가 발생했습니다.기능이 복잡해 따로 프로젝트를 만들어 연습할 때는 문제가 없었는데, 메인 프로젝트로 옮겨와 적용...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 4,
          title:
            'useState에 여러 값을 저장한 상태에서 업데이트 시 초기값이 반환됩니다.',
          content:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?\n\nFinal프로젝트 진행 중 위치 기반으로 사진과 게시글을 첨부해 업로드할 수 있는 페이지를 구현하고 있습니다.\n데이터를 useState에 저장해 관리 중인데\n여러 state를 만드는 것은 비효율적이라 생각해 한 state에 객체 형식으로 사진과 게시글 내용 위치 등을 저장했습니다.\n\n문제는 위치 정보를 업데이트하는 함수를 실행하면 나머지 값들이 초기값으로 바뀌는 것입니다.\n구현 중에 위/경도, 주소를 한 번에 업데이트시키게 되었는데, 나머지 값들이 전부 초기값으로 바뀌는데 그 이유를 잘 모르겠습니다.\n다른 사진/내용/카테고리는 값을 넣어도 다른 값에 영향을 주지 않았습니다.\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\n\n처음에는 렌더링이 안 된 것이라고 생각해 여러 위치에서 console.log를 찍어 보았는데 위치 정보를 업데이트하는 함수를 실행할 때 다른 값들이 초기화되는 것임을 확인할 수 있었습니다.\n\n어떠한 부분에서 이해가 안 되었나요?\n\n현재 한 개의 state를 통해 모든 상태값을 관리하고 있는데 다른 정보는 수정해도 다른 값에 영향을 주지 않았지만 위치정보는 업데이트하면 나머지 모든 값을 초기값으로 초기화되는 것이 무엇 때문인지 잘 모르겠습니다.\n\n```js\n  // 정보 저장하는 state\n  const [value, setValue] = useState({\n    image: [],\n    title: "",\n    content: "",\n    public: false,\n    categoryId: 1,\n    lat: 0,\n    lng: 0,\n    address: "",\n  });\n\n  // const handleValue = (target) => {\n    // value state를 조정하는 함수. 좌표/주소는 한번에 처리해야 해서 복잡해짐\n    // id가 loc이면 한번에 업데이트\n    // console.log(target)\n\n    if (target.id === "loc") {\n      setValue({\n        ...value,\n        lat: target.lat,\n        lng: target.lng,\n        address: target.add\n      });\n      console.log("loc update", value)\n    } else {\n      setValue({\n        ...value,\n        [`${target.id}`]: target.value,\n      });\n      console.log("rest update", value)\n    }\n  };\n\n\n  // 주소 받아오는 함수\n  const setAddress = (locData) => {\n    geocoder.coord2Address(\n      locData.getLng(),\n      locData.getLat(),\n      function (result, status) {\n        if (status === kakao.maps.services.Status.OK) {\n          handleValue({id: "loc", lat: locData.Ma, lng: locData.La, address: result[0].address.address_name});\n          console.log("up", value)\n        }\n      }\n    );\n  };\n\n  // useEffect로 카카오지도 생성과 온클릭 이벤트로 좌표정보 변경(최초 렌더링시 1번만 실행)\n  const kakaoInit = async ([lat, lng]) => {\n    // 지도 생성\n    const map = new kakao.maps.Map(document.getElementById("map"), {\n      center: new kakao.maps.LatLng(lat, lng),\n      level: 5,\n    });\n    map.addControl(\n      new kakao.maps.ZoomControl(),\n      kakao.maps.ControlPosition.RIGHT\n    );\n\n    // 마커 생성\n    let marker = new kakao.maps.Marker({\n      position: new kakao.maps.LatLng(lat, lng),\n    });\n    // 마커를 지도에 표시\n    marker.setMap(map);\n\n    // 수정: 온클릭 이벤트로 위치 정보를 수정\n    kakao.maps.event.addListener(map, "click", function (mouseEvent) {\n      // 클릭한 위도, 경도 정보를 가져옵니다\n      let latlng = mouseEvent.latLng;\n      // 마커 위치를 클릭한 위치로 이동 + 주소 출력\n      marker.setPosition(latlng);\n      setAddress(new kakao.maps.LatLng(latlng.Ma, latlng.La))\n    });\n    setAddress(new kakao.maps.LatLng(lat, lng))\n  }\n```',
          thumbnail: null,
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?Final프로젝트 진행 중 위치 기반으로 사진과 게시글을 첨부해 업로드할 수 있는 페이지를 구현하고 있습니다.데이터를 useState에 저장해 관리 중인데여러 state를 만드는 것은 비효율적이라 생각해 한 ...',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 5,
          title:
            'Controlled Components 부분에서 event.target.checked의 사용법에 대해',
          content:
            'React state를 다루는 부분에서\n체크여부에 따라 상태가 변하는 코드가 유어클래스에 있습니다(밑에 코드)\n\n```js\nimport React, { useState } from "react";\nimport "./styles.css";\n\nfunction CheckboxExample() {\n  const [isChecked, setIsChecked] = useState(false);\n\n  const handleChecked = (event) => {\n    setIsChecked(event.target.checked);  // 1번 checked\n  };\n  return (\n    <div className="App">\n      <input type="checkbox" checked={isChecked} onChange={handleChecked} />  // 2번 checked\n      <span>{isChecked ? "Checked!!" : "Unchecked"}</span>\n    </div>\n  );\n}\n\nexport default CheckboxExample;\n```\n\n여기서 중간에 setIsChecked함수의 인자?( event.target.checked ) 에서\nchecked 부분(이하 1번 checked) 과\n\n태그 안에있는 속성 checked={isChecked} 부분에서 checked(이하 2번 checked)가 연관이 있다고 생각해서\n\n1번 checked부분을 checkzzz와같이 다른 걸로 수정하니 체크박스가 제대로 작동하지 않으나\n\n2번 checked부분을 checkzzz와같이 다른 걸로 수정해도 체크박스가 제대로 작동합니다.\n\n그래서 질문은 왜 1번checked부분은 바꾸면 작동이 안되나 2번checked부분은 다른걸로 바꿔도 작동이 되는지에 대해...\n\n그리고 2번 checked부분을 다른걸로 바꾸면 작동은 되는데 오류가 나는데 저 오류가 왜 나는건지 궁금합니다\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\n\n인터넷 검색하여 event.target.checked의 의미에 대해 확인하였으며\n\nchecked부분을 다른 여러 단어를 바꿔보며 실험을 해봤습니다.\n\n2번 checked를 다른 문자로 바꾸고 실행한 에러를 분석하여\n\n에러가 하라는 대로 checkzz속성값을 false로 바꾸니 에러가 나지는 않았습니다..\n\n어떠한 부분에서 이해가 안 되었나요?\n\n왜 2번 checked 는 바꿔도 체크박스기능은 정상적으로 동작하는지\n\n2번 checked를 바꿔서 난 오류는 무엇인지..\n\n에러 코드를 붙여넣기 해 주세요.\n2번checked를 다른 문자로 바꾸면 생기는 오류 ( 기능은 정상적으로 작동됨)\n\nWarning: Received false for a non-boolean attribute checkzz.\n\nIf you want to write it to the DOM, pass a string instead: checkzz="false" or checkzz={value.toString()}.\n\nIf you used to conditionally omit it with checkzz={condition && value}, pass checkzz={condition ? value : undefined} instead.\nat input\nat div\nat CheckboxExample',
          thumbnail: null,
          description:
            'React state를 다루는 부분에서체크여부에 따라 상태가 변하는 코드가 유어클래스에 있습니다(밑에 코드)import React, { useState } from \\"react\\";\\nimport \\"./styles.css\\";\\n\\nfunction Checkbox...',
          stack: 'React',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title: 'AWS을 통한 클라이언트 배포, 빌드 중 module 관련 에러',
          content:
            'AWS 프론트엔드 배포(S3 호스팅) 진행중입니다.\n빌드를 위해 npm run build 명령어 입력시 오류 발생 문제입니다.\n\n(추가) 빌드 업로드를 위해 제 컴퓨터에서 직접 build를 진행하면 된다는 것을 알았고, 잘 해결은 되었습니다만 원인은 알고싶네요 :)\n\n패키지 경로 문제인 것같아 1차적으로 npm audit fix --force 이후 재실행해보았습니다.\n\n```js\nubuntu@ip-xxx-xxx-xxx-xxx:~/im-sprint-practice-deploy/client$ npm audit fix --force\nnpm WARN using --force Recommended protections disabled.\nnpm WARN audit Updating react-scripts to 5.0.0,which is a SemVer major change.\n\nadded 373 packages, removed 759 packages, changed 522 packages, and audited 1621 packages in 40s\n\n174 packages are looking for funding\n  run `npm fund` for details\n\n# npm audit report\n\nnth-check  <2.0.1\nSeverity: moderate\nInefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr\nfix available via `npm audit fix --force`\nWill install react-scripts@2.1.3, which is a breaking change\nnode_modules/nth-check\n  css-select  <=3.1.0\n  Depends on vulnerable versions of nth-check\n  node_modules/css-select\n    svgo  1.0.0 - 1.3.2\n    Depends on vulnerable versions of css-select\n    node_modules/svgo\n      @svgr/plugin-svgo  <=5.5.0\n      Depends on vulnerable versions of svgo\n      node_modules/@svgr/plugin-svgo\n        @svgr/webpack  4.0.0 - 5.5.0\n        Depends on vulnerable versions of @svgr/plugin-svgo\n        node_modules/@svgr/webpack\n          react-scripts  >=2.1.4\n          Depends on vulnerable versions of @svgr/webpack\n          node_modules/react-scripts\n\n6 moderate severity vulnerabilities\n\nTo address all issues (including breaking changes), run:\n  npm audit fix --force\n\n## build 실행\nubuntu@ip-xxx-xxx-xxx-xxx:~/im-sprint-practice-deploy/client$ npm run build\n\n> client@0.1.0 build\n> react-scripts build\n\nCreating an optimized production build...\nFailed to compile.\n\nModule not found: Error: Can"t resolve "fs" in "/home/ubuntu/im-sprint-practice-deploy/client/node_modules/dotenv/lib"\n```\n\n',
          thumbnail: null,
          description:
            'AWS 프론트엔드 배포(S3 호스팅) 진행중입니다.빌드를 위해 npm run build 명령어 입력시 오류 발생 문제입니다.(추가) 빌드 업로드를 위해 제 컴퓨터에서 직접 build를 진행하면 된다는 것을 알았고, 잘 해결은 되었습니다만 원인은 알고싶네요 :)패키지 ...',
          stack: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title:
            '스프린트 취지에 맞지 않는 request.method가 출력됩니다. 서버, 클라이언트는 전부 정상 작동됩니다.',
          content:
            'section2 mini-node-server 스프린트를 진행하고 있습니다.\n작성한 코드에 포함된 아래 코드를 통해, 터미널에서 요청의 메소드와 url을 확인할 수 있는데,\n\n```js\nconsole.log(\n      `http request method is ${request.method}, url is ${request.url}`\n      );\n```\n\n해당 스프린트의 toUpperCase 버튼, toLowerCase 버튼을 누르면\nhttp request method is OPTIONS, url is /upper 와 같이 나옵니다.\n(원래 스프린트의 취지에 따르면 http request method is POST, url is /upper로 출력되어야 하며,\n코드 작성 초기에는 POST로 출력되었습니다.)\n해당 버튼을 눌렀을 때 request.method가 POST로 나오게 하려면 어떻게 해야 하는지 알고 싶습니다.\n\n처음 문제의 발견은 서버, 혹은 클라이언트 중 하나가 제대로 작동하지 않는 상황이었습니다.\ncode: "ERR_STREAM_WRITE_AFTER_END" 라는 에러 메시지가 떠서 이를 해결하려 했고,\nif분기를 잘 나눠줌으로써 하나의 reponse로만 응답할 수 있도록 해야 함을 알게되었습니다.\n\n분기를 잘 나눠준 결과, 서버와 클라이언트 모두 잘 작동하게 되었으나,\n작동 여부와는 별개로 http request method is OPTIONS, url is /upper 라는,\n본 취지와 맞지 않는 request.method가 찍히는 것을 발견했습니다.\n\n```js\nconst http = require("http");\n\nconst PORT = 4999;\n\nconst ip = "localhost";\n\nconst server = http.createServer((request, response) => {\n  //! 요청에 따른 응답 처리\n  if (request.method === "POST") {\n    let body = "";\n    request.on("data", (chunk) => {\n      body = body + chunk;\n    })\n    .on("end", () => {\n      if(request.url === "/upper"){\n        body = body.toUpperCase();\n        response.writeHead(201, defaultCorsHeader);\n        response.end(body);\n      } else if(request.url === "/lower"){\n        body = body.toLowerCase();\n        response.writeHead(201, defaultCorsHeader);\n        response.end(body);\n      }\n    })\n  } else {\n    console.log(\n      `http request method is ${request.method}, url is ${request.url}`\n      );\n    response.writeHead(200, defaultCorsHeader);\n    response.end("hello mini-server sprints");\n  }\n  \n  //! CORS 처리\n  if(request.method === "OPTIONS"){\n    response.writeHead(200, defaultCorsHeader);\n    response.end();\n  }\n  \n  //! Error 처리\n  request.on("error", (err) => {\n    console.error(err);\n    response.statusCode = 400;\n    response.end();\n  });\n  response.on("error", (err) => {\n    console.error(err);\n  });\n})\n\n  server.listen(PORT, ip, () => {\n    console.log(`http server listen on ${ip}:${PORT}`);\n  });\n  \nconst defaultCorsHeader = {\n  "Access-Control-Allow-Origin": "*",\n  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",\n  "Access-Control-Allow-Headers": "Content-Type, Accept",\n  "Access-Control-Max-Age": 10\n};\n```\n이 스프린트의 버튼을 누르는 행위 자체가 request.method 중 POST라고 알고 있습니다.\n그런데 버튼과 관련하여 수정한 적이 없기에, 제가 어느 부분을 더 고쳐야 할 지 감이 오지 않습니다.\n\n```js\n if(request.method === "OPTIONS"){\n    response.writeHead(200, defaultCorsHeader);\n    response.end();\n  }\n```\n',
          thumbnail: null,
          description:
            'section2 mini-node-server 스프린트를 진행하고 있습니다.작성한 코드에 포함된 아래 코드를 통해, 터미널에서 요청의 메소드와 url을 확인할 수 있는데,console.log(\\n      `http request method is ${request....',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 8,
          title: 'cmarket database 라우팅질문',
          content:
            '![image](https://user-images.githubusercontent.com/87626549/147024453-03274e43-69f1-4623-8344-ad22401812cf.png)\n\n![image](https://user-images.githubusercontent.com/87626549/147024505-ef4066cd-dc4c-496c-99a1-ee33fc0e2283.png)\n\nroutes/index.js에서 /users가 usersRouter 라우터 모듈로드하게하고 users.js에서 get요청과 post요청시 controller를 호출하게적었는데 두번쨰스크린샷 아래 테스트결과를보시면 테스트 통과가 안되는 모습입니다',
          thumbnail:
            'https://user-images.githubusercontent.com/87626549/147024453-03274e43-69f1-4623-8344-ad22401812cf.png',
          description:
            'routes/index.js에서 /users가 usersRouter 라우터 모듈로드하게하고 users.js에서 get요청과 post요청시 controller를 호출하게적었는데 두번쨰스크린샷 아래 테스트결과를보시면 테스트 통과가 안되는 모습입니다',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 9,
          title: '로그인 Post 요청시 501 에러 / mysql findOrCreate 오류',
          content:
            '현재 파이널 프로젝트 중에 카카오 API를 사용하여 로그인을 구현했습니다.\n다른 팀원들은 모두 로그인이 성공되는데 한명만 501 Not Implemented 에러 메세지가 계속 나오면서 DB에 정보 저장도\n되지 않고 로그인이 안되는 상태입니다.\n\n구글링을 통해서 501 에러에 관한 해결방법들을 모두 시도했고 코드를 블럭처리하면서 단계별로 콘솔을 찍어보며 확인해보았습니다.\n그 결과, findOrCreate 부분에서 에러가 나는 것 같은데 명확한 이유가 확인되지 않습니다.\n페이지 새로고침, 캐쉬지움 등등 구글에 나오는 해결책들은 모두 시도했습니다.\n\n모두 같은 코드를 가지고 있는데 딱 한명만 되지 않는 것이 이해가 안됩니다.\n\n```js\n    // 카카오 로그인\n    const result = await axios.post(\n      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${code}`\n    );\n    //console.log(result, "이거 맞음?");\n\n    const userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {\n      headers: {\n        Authorization: `Bearer ${result.data.access_token}`,\n      },\n    });\n//userInfo 까지는 정상적으로 데이터가 잘 받아지는 중 입니다.\n\n    const [findUser, exist] = await user.findOrCreate({\n      where: {\n        email: userInfo.data.kakao_account.email,\n      },\n      defaults: {\n        nickname: userInfo.data.kakao_account.profile.nickname,\n        email: userInfo.data.kakao_account.account_email,\n        image: userInfo.data.kakao_account.profile.profile_image_url,\n        manager: 0,\n        // password: userInfo.data.id,\n        // salt: userInfo.data.id,\n      },\n    });\n\n    const payload = {\n      email: findUser.email,\n      nickname: findUser.nickname,\n      image: findUser.image,\n    };\n```\n\n![image](https://user-images.githubusercontent.com/83910467/145376157-49eaa296-b0d0-4bd1-87ca-7d9c8cc64d7c.png)\n\n![image](https://user-images.githubusercontent.com/83910467/145376176-302d2ef9-55d8-48c2-b7cf-72e852a9d660.png)\n\n![image](https://user-images.githubusercontent.com/83910467/145376196-468994ce-3468-4e3a-9e50-d7e2724429ea.png)',
          thumbnail:
            'https://user-images.githubusercontent.com/83910467/145376157-49eaa296-b0d0-4bd1-87ca-7d9c8cc64d7c.png',
          description:
            '현재 파이널 프로젝트 중에 카카오 API를 사용하여 로그인을 구현했습니다.다른 팀원들은 모두 로그인이 성공되는데 한명만 501 Not Implemented 에러 메세지가 계속 나오면서 DB에 정보 저장도되지 않고 로그인이 안되는 상태입니다.구글링을 통해서 501 에러...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 1,
          title:
            'clearCookie 명령이 로컬에서만 작동되고 배포 환경에서는 작동되지 않습니다.',
          content:
            '파이널 프로젝트 진행 중입니다.\n로컬 환경에서는 쿠키 생성과 삭제가 잘 이루어지나, 배포 환경(ec2)에서는 생성만 되고 삭제는 되지 않습니다.\n서버 쪽에서 쿠키는 읽혀지나 삭제만 안 되는 상태입니다.\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\nec2에서 레포지토리를 새로 clone 및 설치\nnode 버전을 확인\n원래 쿠키 삭제를 위해 res.clearCookie("jwt");로 진행했으나 res.cookie("jwt","test",{expires:new Date(Date.now() - 1)})를 사용 시도\nreq.cookie가 읽혀지지 않는 건지 확인 >> 읽혀짐.\n도메인 설정이 잘못되었는지 확인. 하지만 이게 잘못됐다면 생성부터 문제가 됐어야 하나 생성은 잘됨.\n위에 적은 res.cookie("jwt","test",{expires:new Date(Date.now() - 1)})를 쓰면 "test"값의 "jwt"쿠키가 읽히는 것도 확인. 즉 생성은 정말 잘됨.\n클라이언트 측에서 쿠키를 읽어서 처리하는 과정을 시도. >> 쿠키가 읽혀지지 않아 실패.\n어떠한 부분에서 이해가 안 되었나요?\n로컬에서는 잘 작동되는 clearCookie가 배포 환경에서만 안 되는 이유를 모르겠습니다.\n\n에러 코드를 붙여넣기 해 주세요.\n에러 코드는 딱히 존재하지 않습니다.\n상황을 담은 스크린샷을 보여드립니다.\n\n로그인 전 상황 ( 쿠키 없음 )\n\n![image](https://user-images.githubusercontent.com/87490361/146167436-a50e426f-7b38-47f1-97b3-9ea55a27ec27.png)\n\n로그인 후 상황 ( 쿠키 생성 )\n\n![image](https://user-images.githubusercontent.com/87490361/146167667-49aab021-0870-498e-a6e2-a5c3ab310eeb.png)\n\n로그아웃한 상황 ( 쿠키 존재함 )\n\n![image](https://user-images.githubusercontent.com/87490361/146167767-bb4309ed-e66f-40f2-b826-6fdeab543955.png)\n\n```js\n// server index.js 일부\napp.use(cors({\n    origin:["http://localhost:3000","https://udondam.com"],\n    credentials: true,\n    methods: ["GET", "POST", "PATCH", "DELETE" ,"OPTIONS"]\n}));\napp.use(cookieParser());\napp.use(express.json());\napp.use(express.urlencoded({extended:true}));\n\n\n// client 로그인 버튼 쪽 핸들러 함수 일부\nconst body = { email: loginInfo.email, password: loginInfo.password };\nconst loginInfoPost = await axios.post(`${process.env.REACT_APP_API_URL}/login`, body, { withCredentials: true });\n\n\n// server 로그인 처리 일부\nconst { id, nickname, area, area2, manager, socialType } = userInfo;\nconst userData = {\n    userId: id,\n    nickname: nickname,\n    area: area,\n    area2: area2,\n    manager: manager,\n    socialType: socialType\n}\nconst token = generateAccessToken(userData);\nsendAccessToken(res, token, userData);\n\n\n// server generateAccessToken, sendAccessToken 함수\ngenerateAccessToken: (data) => {\n    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "4h" });\n}\nsendAccessToken: (res, token, userData) => {\n    res.status(200).cookie("jwt", token,{\n      sameSite: "none",\n      domain: DOMAIN,\n      path: "/",\n      secure: true,\n      httpOnly: true,\n      expires: new Date(Date.now() + 1000 * 60 * 60 * 48),\n    }).json({ data: userData });\n    return ;\n}\n\n\n// client 로그아웃 버튼 핸들러 함수 일부\nconst logoutResult = await axios.get(`${process.env.REACT_APP_API_URL}/logout`, { withCredentials: true })\n\n\n// server 로그아웃 처리 함수 전문\nlogout: async (req, res) => {\n    // console.log(req.cookie) >> { jwt : ~~~~} 이런 느낌으로 읽혀짐\n    try {\n        res.clearCookie("jwt");\n        // res.cookie("jwt","test",{expires:new Date(Date.now() - 1)}) >> 시도했으나 로컬에선 잘 지워지고 배포에선 안됨\n        res.status(200).json({"message": "logout!"});\n        return;\n    }\n    catch (err) {\n        console.log(err);\n        return res.status(401).json({ "message": "Unauthorized"});\n    }\n}\n```',
          thumbnail:
            'https://user-images.githubusercontent.com/87490361/146167436-a50e426f-7b38-47f1-97b3-9ea55a27ec27.png',
          description:
            '파이널 프로젝트 진행 중입니다.로컬 환경에서는 쿠키 생성과 삭제가 잘 이루어지나, 배포 환경(ec2)에서는 생성만 되고 삭제는 되지 않습니다.서버 쪽에서 쿠키는 읽혀지나 삭제만 안 되는 상태입니다.안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?ec2에...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 2,
          title: 'stringifyJSON sprint 객체 부분에서 질문입니다.',
          content:
            'im-sprint-stringify-json진행중에 객체 부분에서 의문이 생겼습니다.\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\n페어분과 함께 콘솔창에 찍어보며 SpecRunner.html에 테스트 케이스가 통과하는지 확인해보았습니다.\n\n어떠한 부분에서 이해가 안 되었나요?\n해결은 되었으나 왜 해결이 되었는지 모르겠습니다.\n\n에러 코드를 붙여넣기 해 주세요.\n함수와 undefined는 stringify되지 않습니다. 라는 테스트케이스를 해결하기 위해서\n\n```js\nfunction stringifyJSON(obj) {\n  if(typeof obj === "object") {\n    let result = "";\n    for(let key in obj) {\n      if(typeof obj[key] === "function" || obj === undefined) {\n        return "{}";\n      }\n      let newKey = stringifyJSON(key);\n      let newValue = stringifyJSON(obj[key]);\n      result = result + newKey + ":" + newValue + ",";\n    }\n    result = result.slice(0, -1);\n    return `{${result}}`;\n  }\n};\n```\n\n라고 작성을 했고\n이 코드 중에\n\n```js\n    for(let key in obj) {\n      if(typeof obj[key] === "function" || obj === undefined) {\n        return "{}";\n      }\n```\n\n여기서 조건문을 쓸 때 처음에 typeof obj === "function" 라고 썼더니\nAssertionError: expected "{"functions":undefined,"undefined":undefined}" to equal "{}"\n라고 떴습니다.\n그래서 위에 쓴 대로 obj[key]로 바꾸었더니 해결이 되었습니다.\n\n객체 자체의 타입을 함수로 쓴 것과 객체의 키값의 타입을 썼을 때의 차이가 무엇인지 잘 모르겠습니다.\n그리고 테스트케이스에서 "함수와 undefined는 stringify되지 않습니다." 인데\n\n```js\n    for(let key in obj) {\n      if(typeof obj[key] === "function") {\n        return "{}";\n      }\n```\n\nundefined인 경우의 조건을 써주지 않아도 테스트 케이스가 통과하는 것을 확인할 수 있었는데, 왜 통과할 수 있는지에 대해서 알고 싶습니다.\n에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)\n-이해가 되지 않는 부분의 코드를 붙여넣었습니다.\n\n```js\n    for(let key in obj) {\n      if(typeof obj[key] === "function" || obj === undefined) {\n        return "{}";\n      }\n```',
          thumbnail: null,
          description:
            'im-sprint-stringify-json진행중에 객체 부분에서 의문이 생겼습니다.안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?페어분과 함께 콘솔창에 찍어보며 SpecRunner.html에 테스트 케이스가 통과하는지 확인해보았습니다.어떠한 부분에서...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: 'axios get 배열 파라미터 디코딩한 결과를 url에 넣고 싶습니다',
          content:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪 혔나요?\n파이널 프로젝트중에 있으며 axios를 이용한 서버 통신중 get 요청시 배열 파라미터를 추가하려는 와중에 문제가 발생했습니다.\n문제는 배열이 인코딩화되어서 들어갑니다. 해결방법을 못찾겠습니다.\n\n안되는 부분을 해결하기 위해서 신체적으로 어떤 노력을 했나요?\nJSON.stringify 부터 쿼리 스트링.qs로 디코딩을 시도했으나 디코딩화가 되지 않습니다.\nurl/post?tag%5B%5D=%EB%8C%80%EC%A0%84\n=> url/post?tag="대전" 이렇게 바꾸고 싶습니다\n\n어떠한 부분에서 이해가 안 되었나요?\n만약 get 요청에 url/post?tag=${JSON.stringify("대전")}를 사용해도\n/post?tag=%22%EC%9D%B4%EA%B1%B4?%22란 결과가 콘솔에 찍힙니다.\n\n에러 코드를 가져 오기 해주세요.\n![image](https://user-images.githubusercontent.com/64249456/145345182-d5be5b8d-f23b-4a75-9dc3-7a59c5dd427f.png)\n![image](https://user-images.githubusercontent.com/64249456/145345209-0c42e154-4967-4642-ace1-c5c21db3ae46.png)\n\n```js\nawait axios.get(`${process.env.REACT_APP_API_URL}/post`,{\n            params: {\n                tag: timeLineAllTagHandleData\n            },\n            paramsSerializer: params => {\n                // console.log(JSON.stringify(params))\n                return qs.stringify(params, {arrayFormat: "brackets"})\n            }\n        }\n        )\n```',
          thumbnail:
            'https://user-images.githubusercontent.com/64249456/145345182-d5be5b8d-f23b-4a75-9dc3-7a59c5dd427f.png',
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪 혔나요?파이널 프로젝트중에 있으며 axios를 이용한 서버 통신중 get 요청시 배열 파라미터를 추가하려는 와중에 문제가 발생했습니다.문제는 배열이 인코딩화되어서 들어갑니다. 해결방법을 못찾겠습니다.안되는 부분을 ...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 4,
          title: 'DOM cloneNode위치에 따라 결과가 다른 이유를 모르겠습니다.',
          content:
            'Section 1: Single Page Application\n\n[HTML, CSS, DOM] Review\n실습 문제입니다.\n배열에 맞춰 여러 li를 출력하려고 cloneNode 를 사용하여 출력하려 했습니다.\n하지만 첫번째 li에서는 setAttibute만 정상적으로 작동하고 textcontent는 다음 루프로 밀렸습니다.\n\n![image](https://user-images.githubusercontent.com/52750005/144953156-3f12771e-95ac-4ab3-b115-fac42e27df19.png)\n\ncloneNode와 setAttribute의 위치를 textcontent 보다 밑으로 바꾸니 해결되었습니다.\n하지만 원리를 모르겠습니다.\n\n![image](https://user-images.githubusercontent.com/52750005/144953181-5acd773a-0a12-4097-be15-1e9b631a150d.png)\n\n어떠한 부분에서 이해가 안 되었나요?\ncloneNode, setAttribute위치가 결과에 영향을 미치는 원리를 모르겠습니다.\n에러 코드를 붙여넣기 해 주세요.\n\n<title>DOM Review</title>\nTODO: DOM을 이용하여 places 배열의 모든 요소를 화면에 렌더링합니다.\n\n```js\n<script>\n    const places = [\n      {\n        id: 1,\n        city: "Biloxi",\n        country: "United States",\n        address: "Walton"\n      },\n      {\n        id: 2,\n        city: "Carmen de Viboral",\n        country: "Colombia",\n        address: "Drewry"\n      },\n      {\n        id: 3,\n        city: "New Mīrpur",\n        country: "Pakistan",\n        address: "Morningstar"\n      },\n      {\n        id: 4,\n        city: "Seropédica",\n        country: "Brazil",\n        address: "Parkside"\n      },\n      {\n        id: 5,\n        city: "Ponjen",\n        country: "Indonesia",\n        address: "Gina"\n      }\n    ];\n\n    const cityList = document.querySelector(".city-list")\n    const container = document.createElement("li")\n\n    let country = document.createElement("span")\n    country.classList.add("country")\n\n    let  city = document.createElement("span")\n    city.classList.add("city")\n\n    let address = document.createElement("span")\n    address.classList.add("address")\n    \n    const cityAndAddress = document.createElement("div")\n\n\n    cityAndAddress.append(city)\n    cityAndAddress.append(address)\n    container.append(country)\n    container.append(cityAndAddress)\n    \n\n    places.map(place => {\n        const cloneContainer = container.cloneNode(true);\n        cloneContainer.setAttribute("key", place.id);\n        \n        country.textContent = place.country\n        city.textContent = place.city\n        address.textContent = place.address\n\n        cityList.append(cloneContainer)\n    })\n    \n\n</script>\n```\n\n```js\n        places.map(place => {\n            const cloneContainer = container.cloneNode(true);\n            cloneContainer.setAttribute("key", place.id);\n            \n            country.textContent = place.country\n            city.textContent = place.city\n            address.textContent = place.address\n\n            cityList.append(cloneContainer)\n        })\n```\n\n이것을\n```js\n        places.map(place => {\n\n            country.textContent = place.country\n            city.textContent = place.city\n            address.textContent = place.address\n\n            const cloneContainer = container.cloneNode(true);\n            cloneContainer.setAttribute("key", place.id);\n            \n            cityList.append(cloneContainer)\n        })\n```\n\n이렇게 바꾸니 해결이 되었습니다.\n이유를 찾아보려했지만 잘 못찾겠습니다.',
          thumbnail:
            'https://user-images.githubusercontent.com/52750005/144953156-3f12771e-95ac-4ab3-b115-fac42e27df19.png',
          description:
            'Section 1: Single Page Application[HTML, CSS, DOM] Review실습 문제입니다.배열에 맞춰 여러 li를 출력하려고 cloneNode 를 사용하여 출력하려 했습니다.하지만 첫번째 li에서는 setAttibute만 정상적으로 작동하...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 5,
          title:
            '로컬node.js서버에서 RDS 연결 문제로 서버가 실행 되지 않습니다',
          content:
            '<p>server 폴더에서 npm run start로 서버를 실행하면<img src="https://user-images.githubusercontent.com/93461412/166882197-d98ac85f-2700-46ae-9f25-12d8700bb78c.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>ConnectionError [SequelizeConnectionError]: connect ETIMEDOUT</p><p><br class="ProseMirror-trailingBreak"></p><p>와 같은 오류가 뜹니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>저기 오류 중간에 mysql2가 보이므로 DB관련해 접속이 안되는것으로 판단하였습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>시퀄라이즈 환경설정 ./config/config.js는</p><p><img src="https://user-images.githubusercontent.com/93461412/166882589-5964d253-8a70-40c2-aef6-22f54dabe3ca.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>이며 그에 따른 로컬 서버내 .env 환경변수파일은</p><p><img src="https://user-images.githubusercontent.com/93461412/166882847-ced7d86a-e627-439e-ace0-017a42f273b0.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p><p>로 설정하였습니다.</p><p><br class="ProseMirror-trailingBreak"></p><p>밑의 사진은 rds 보안그룹 인바운드 규칙입니다.</p><p><img src="https://user-images.githubusercontent.com/93461412/166882986-ff1871c4-b4b4-4fc8-b2c6-423d5339f2ea.png" alt="image" contenteditable="false"><img class="ProseMirror-separator" alt=""><br class="ProseMirror-trailingBreak"></p>',
          thumbnail:
            'https://user-images.githubusercontent.com/93461412/166882197-d98ac85f-2700-46ae-9f25-12d8700bb78c.png',
          description:
            'server 폴더에서 npm run start로 서버를 실행하면ConnectionError [SequelizeConnectionError]: connect ETIMEDOUT와 같은 오류가 뜹니다.저기 오류 중간에 mysql2가 보이므로 DB관련해 접속이 안되는것으로 ...',
          stack: 'MySQL',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 6,
          title:
            'sort 메소드를 쓰기 전에 slice()로 원본 배열 복사를 하는 이유가 궁금합니다.',
          content:
            'Section2 -> Underbar 에서 Advanced 문제를 따로 풀고 있었습니다.\nAdvanced 문제 중 sortBy 함수를 작성하는 것이 있는데, 여기서 궁금증이 발생했습니다.\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\nwhy use slice when sort js, slice and sort in javascript 등 검색을 해보았으나 크게 도움이 되지 않았습니다.\n콘솔 로그로 sort에서 비교되는 대상을 입력해보았으나 이해에 어려움이 있었습니다.\n\n어떠한 부분에서 이해가 안 되었나요?\n```js\nconst arrCloned = _.slice(arr);\n  return arrCloned.sort( ~~~ );\n```\n\nsortBy 함수 reference code를 참고했는데,\n위 코드에서 sort를 사용하여 정렬하기 전에, slice를 이용하여 원본 배열을 복사해두더군요. slice하는 과정을 생략했더니 원하는 답이 나오지 않는 것으로 보아 이유가 있을 것이라 생각하는데 그 이유를 잘 모르겠습니다.\n\n에러 코드를 붙여넣기 해 주세요.\n에러가 난 것은 아니지만 reference code입니다.\n\n```js\n_.sortBy = function (arr, transform, order) {\n  order = order || 1;\n  transform = transform || _.identity;\n  const arrCloned = _.slice(arr);\n  return arrCloned.sort((a, b) => {\n    if (transform(a) < transform(b)) {\n      return -1 * order;\n    }\n    return order;\n  });\n};\n```\n에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)\n```js\nconst arrCloned = _.slice(arr);\n  return arrCloned.sort( ~~~ );\n```',
          thumbnail: null,
          description:
            'ection2 -&gt; Underbar 에서 Advanced 문제를 따로 풀고 있었습니다.Advanced 문제 중 sortBy 함수를 작성하는 것이 있는데, 여기서 궁금증이 발생했습니다.안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?why use ...',
          stack: 'JavaScript',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 7,
          title:
            'AWS cloudfront, ELB 활용 Https 배포 시 응답 Content-Type 이 text/html 인 문제',
          content:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?\n\n파이널 프로젝트 진행중이고 cloudfront 와 elb 활용한 https 배포 시 응답 헤더에 content-type 이 text/html 로 되어있어서 그런지, 응답 데이터를 클라이언트 단위에서 따로 어떤 처리를 할 수 가 없는 문제가 있습니다.\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\n\n구글링도 해보고, 아고라스테이츠에 비슷한 문제를 겪으신 분들이 계신지도 알아봤고, 벨로그나 기타 블로그 글들도 검색해보았으나..해결하지 못했습니다.\n어떠한 부분에서 이해가 안 되었나요?\n\n코드에 변경된점이 하나도 없었는데도 불구하고 ec2 와 s3 로 http 배포시에는 문제 없이 응답 content-type 을 application/json 으로 잘 받아와서 아무런 문제가 발생하지 않았는데, https 로 배포시 elb 나 cloudfront 설정에 뭔가 문제가 있었는지 똑같은 코드인데도 불고하고 content-type 을 text/html 로 받아오는게 이해가 되지 않습니다ㅠㅠ\n에러 코드를 붙여넣기 해 주세요.\n\n![image](https://user-images.githubusercontent.com/83817746/141651852-a42be809-f8b3-4874-ab3e-b6b578c6650c.png)\n\n서버쪽 코드는 위와 같습니다.\n응답 시 res.json(), 객체 안에 list: {위에서 할당해준 NewData} 를 넣어줬지만,\n\n![image](https://user-images.githubusercontent.com/83817746/141651905-c47b7f35-8fa2-4732-8862-a9296437380d.png)\n\n클라이언트에서 요청 후 응답(resp)의 data를 콘솔에 찍어보면 위 사진처럼 content-type을 다르게 받아오고 있습니다..ㅠㅠ\n\nhttps 배포 관련 아직 많이 부족하고 모르는것이 많아서 cloudfront 나 elb 설정 시 뭔가 놓친것이 있는지 아니면 코드적인 문제인지...\n어디가 문제인지를 정확히 파악하지 못했어서 문제 해결을 하는것도 많이 어렵습니다ㅠㅠ\n\n관련해서 해결방법 아시는 분이 있다면 너그러운 마음으로 답변 부탁드립니다ㅜㅜ 🙏🏻cry\n\n(클라이언트에서 요청시 헤더 설정 및 서버에서 응답시 헤더 설정을 했었는데도 해결되지 않았습니다ㅠㅠㅠㅠㅠㅠㅠㅠㅠ)',
          thumbnail:
            'https://user-images.githubusercontent.com/83817746/141651852-a42be809-f8b3-4874-ab3e-b6b578c6650c.png',
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?파이널 프로젝트 진행중이고 cloudfront 와 elb 활용한 https 배포 시 응답 헤더에 content-type 이 text/html 로 되어있어서 그런지, 응답 데이터를 클라이언트 단위에서 따로 어떤...',
          stack: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 8,
          title:
            '배포 url https 설정 시 Mixed Content: ... the content must be served over HTTPS. 에러가 발생합니다. nginx를 설치해야하나요?ㅠㅠ',
          content:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?\n현재 ELB 생성, cloudfront 배포 후, 서버 클라이언트 모두 별 https 배포를 완료한 상황입니다.\n(참고로 도메인 구입을 가비아에서 하였습니다.)\n그런데 https 배포 주소로 들어가니 mixed content 에러가 발생했습니다.\nexclamations3버킷 주소(http)로 들어가면 데이터가 다 받아와지는데 https 주소로 들어가면 데이터가 받아와지지 않습니다.exclamation\n\n다음은 https배포로 들어갔을 때 나오는 오류 내용 입니다.\n\n![image](https://user-images.githubusercontent.com/81205088/140273514-cba3f8d7-b3da-472a-80b8-942b841623d8.png)\n\n그 이유는 오류 내용으로보아 제가 생각했을때 서버(http) 와 클라이언트(https)가 서로 통신을 하여서 그런 것 같습니다.\n그래서 서버와 클라이언트 사이에 nginx를 설치해야한다는 해결법을 찾았습니다.\n\nexclamation그런데 단순히 코드스테이츠 유어클래스 https설정 챕터만으로도 서버와 클라이언트 중간에 프록시 서버를 만들어 주지 않아도 되는건지 궁금합니다. 제가 중간에 설정을 잘못해서 서버(http)와 클라이언트(https)가 서로 통신이 안되는 걸까요?ㅠㅠ\n3일째 nginx 설정 하다가 nginx를 굳이 설치해야 되는 건지 해서 질문올립니다.\n로드밸런서가 nginx와 비슷한 건가요? 제가 로드밸런서 설정을 잘못 한 것 일까요?\n\n운영 체제: Ubuntu\n\n안 되는 부분을 해결하기 위해서 구체적으로 어떤 노력을 했나요?\n서버와 클라이언트 사이에 nginx를 두어서 nginx가 http와https 호환을 도와줄 수 있도록 설치했고, nginx 구성파일 세팅 중에 있습니다.\n\n어떠한 부분에서 이해가 안 되었나요?\n제가 유어클래스 "sprint 도메인 주소를 이용한 인증 https 인증" 부분만으로도 서버(http)와 클라이언트(https)가 서로 데이터를 잘 주고 받을 수 있을 까요??\n\n에러 코드를 붙여넣기 해 주세요.\n<https 배포 url에 들어가면 생기는 에러>\n\n![image](https://user-images.githubusercontent.com/81205088/140274518-4acc2a2e-42e7-46ce-88f3-f34e44373943.png)\n\n<ec2 보안 그룹 설정>\n\n![image](https://user-images.githubusercontent.com/81205088/140274914-bce854cc-66c8-48e8-a0f3-ab4cdeef39ea.png)\n\n<서버 파일 index.js>\n\n![image](https://user-images.githubusercontent.com/81205088/140275762-f9cd8c17-2026-4fdb-85c2-5b29f012af5a.png)\n\n80번 포트가 아닌 보안그룹에서 설정했었던 https 포트인 443 으로도 서버 index.js 파일을 설정해 주었지만 역시 동일한 에러(mixed content:the content must be served over HTTPS )에러가 발생합니다.',
          thumbnail:
            'https://user-images.githubusercontent.com/81205088/140273514-cba3f8d7-b3da-472a-80b8-942b841623d8.png',
          description:
            '현재 어떤 스프린트를 진행 중이고, 어떤 문제에 부딪혔나요?현재 ELB 생성, cloudfront 배포 후, 서버 클라이언트 모두 별 https 배포를 완료한 상황입니다.(참고로 도메인 구입을 가비아에서 하였습니다.)그런데 https 배포 주소로 들어가니 mixed ...',
          stack: 'AWS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: '',
          content: '',
          thumbnail: '',
          description: '',
          stack: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: '',
          content: '',
          thumbnail: '',
          description: '',
          stack: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: '',
          content: '',
          thumbnail: '',
          description: '',
          stack: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: '',
          content: '',
          thumbnail: '',
          description: '',
          stack: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          done: 0,
          userId: 3,
          title: '',
          content: '',
          thumbnail: '',
          description: '',
          stack: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   done: 0,
        //   userId: 3,
        //   title: '',
        //   content: '',
        //   thumbnail: '',
        //   description: '',
        //   stack: '',
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  },
};
