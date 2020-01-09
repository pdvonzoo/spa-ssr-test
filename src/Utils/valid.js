// 이메일 체크 정규식

const isEmail = (asValue) => {

    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	

}



// 핸드폰 번호 체크 정규식

const isCelluar = (asValue) => {

    const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴

}



//비밀번호 체크 정규식

const isJobPassword = (asValue) => {

    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합

    return regExp.test(asValue); // 형식에 맞는 경우 true 리턴

}
const isBlank = (search) => !!search.trim().length;

export { isJobPassword, isCelluar, isEmail, isBlank };

