

const isEmail = (asValue) => {

    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    return regExp.test(asValue);

}

const isCelluar = (asValue) => {

    const regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;

    return regExp.test(asValue);

}


const isJobPassword = (asValue) => {

    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;

    return regExp.test(asValue);

}
const isBlank = (search) => !!search.trim().length;

export { isJobPassword, isCelluar, isEmail, isBlank };

