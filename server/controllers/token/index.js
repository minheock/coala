// 토큰 만들고 보내고 검증하고
require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  },
  sendAccessToken: (res, accessToken, { id, username, profile, email }) => {
    res
      .cookie('jwt', accessToken, {
        // sameSite: 'none', //https 일때만 하는거
        // secure: true,
        httpOnly: true,
      })
      .send({
        message: 'token return',
        data: { id, username, profile, email },
      });
  },
  isAuthorized: (req) => {
    const authorized = req.cookies.jwt;
    if (!authorized) return null; // 이부분 고민
    else {
      return verify(authorized, process.env.ACCESS_SECRET, (error, decoded) => {
        // console.log('decoded', decoded);
        if (decoded) {
          const { id, email, username, profile } = decoded;
          return { id, email, username, profile };
          // 검증된 유저 정보
        } else {
          //! 유효기간 지난 토큰은 서버터짐
          console.log('error', error);
          // TokenExpiredError: jwt expired
        }
      });
    }
  },
};
