const jwt = __isBrowser__ && JSON.parse(localStorage.getItem("jwt")).token;

export { jwt };