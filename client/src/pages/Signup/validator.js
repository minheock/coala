// [유효성 검증 함수]: 영어 또는 숫자만 가능
export function onlyNumberAndEnglish(str) {
  return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

// [유효성 검증 함수]: 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&) 는 하나 이상 포함
export function strongPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    str,
  );
}
// const handleButtomValid = () => {
//     if (
//       !isValidInput ||
//       !isValidEmail ||
//       !isValidPassword ||
//       !isCheckBoxClicked()
//       ) {
//       alert('please fill in the blanks');
//     };

// 이메일 검사: '@', '.' 이 둘다 포함될것.
// const isValidEmail = email.includes('@') && email.includes('.');
// 비밀번호 특수문자 검사를 위한 정규식표현.
// const specialLetter = password.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
// 특수문자 1자 이상, 전체 8자 이상일것.
// const isValidPassword = password.length >= 8 && specialLetter >= 1;
