import styled from 'styled-components';
import Header from '../components/Header';

function Mypage() {
  return (
    <>
      <Header />
      <MypageWrapper>
        <div className="userInfoContaner">
          <div className="profileBox" />
          <div className="userInfoBox">
            <div className="editInfo" />
          </div>
        </div>
      </MypageWrapper>
    </>
  );
}
const MypageWrapper = styled.div`
  width: 100%;
  height: 900px;
  border: 1px solid black;
  .userInfoContaner {
  }
  .profileBox {
  }
  .userInfoBox {
  }
  .editInfo {
  }
`;

export default Mypage;
