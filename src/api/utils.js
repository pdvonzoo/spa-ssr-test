const jwt = () => __isBrowser__ && localStorage.getItem("jwt") && JSON.parse(localStorage.getItem("jwt")).token

export { jwt };