const jwt = (() => JSON.parse(localStorage.getItem("jwt")).token)();

export { jwt };