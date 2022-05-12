'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: '쏘니',
          profile:
            'https://cdn.gukjenews.com/news/photo/202112/2376108_2369449_2455.jpg',
          email: 'test1@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: '신짱구',
          profile: 'https://pbs.twimg.com/media/CcOdO0DUkAAoqcP.jpg',
          email: 'test2@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: '우주하마',
          profile:
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2FMjAyMDA4MjNfMjE4%2FMDAxNTk4MTc4OTg5NDE3.H-CynMfUDsZVRULTuOIlmkHgdxDLOycOsUsVamSNhekg.EKzUx_ru2nriUfDCVvYcjFtH-_l8plCUwPtoqVOqRjEg.JPEG%2FexternalFile.jpg&type=sc960_832',
          email: 'test3@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: '싸다구',
          profile:
            'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5eb24b5185226d5b7c6aa91db5a&type=sc960_832',
          email: 'test4@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'naruto',
          profile:
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMDNfMTQ3%2FMDAxNjQ2Mjk2ODY1MjE2.5kST7uDxzyfQ3NEYKSEcKR1vSGkBTWCvVnXPd0bYoc0g.Kh92srJcKYXllASUtvOTVIjb15GYX_KniYs_bjCqBLog.PNG.kfisdsfhjdi%2F2.png&type=sc960_832',
          email: 'test5@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'bory',
          profile:
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5712%2F2019%2F11%2F14%2F0000038008_001_20191114091908510.jpg&type=sc960_832',
          email: 'test6@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'bobbob',
          profile:
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150819_70%2Fshine_2me_1439947547529iPgiE_JPEG%2F%25B9%25CC_7.jpg&type=sc960_832',
          email: 'test7@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: '도니',
          profile:
            'https://search.pstatic.net/sunny/?src=http%3A%2F%2Ft1.daumcdn.net%2Ftvpot%2Fthumb%2Fsc43cYmh68qqqoZb4ab8am6%2Fthumb.png&type=sc960_832',
          email: 'test8@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'mars',
          profile:
            'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MDJfMjU3%2FMDAxNjI3ODM1NTkwNTE2.t2I7IDpAix1dsh91Y9WP9boBbptawXPkW-bZQMsB-Tgg.8r5T4ERt_09S9JZC-7ytesk7hP8jbwdXizkduCykuFEg.JPEG.rin141206%2FScreenshot_2021-08-02_at_00.55.17.jpg&type=sc960_832',
          email: 'test9@coala.com',
          password:
            '488be416b4b3667a933d4be75ce97cf7bf2dbc6721d9aa2a20e311417be67e8747952f80b5d6e6e85a9a54e216b24369e2e5b0120d6302f91ade3b3fbd4a5cf4',
          salt: '1576213157112',
          admin: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
