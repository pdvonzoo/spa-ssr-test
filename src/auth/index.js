const baseURI = "http://10.102.61.102:8080/members";

export const signup = user => {
  console.log(user);
  return fetch(`${baseURI}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const signin = user => {
  return fetch(`${baseURI}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      console.log("실행")
      return response.json()
    })
    .catch(err => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const signout = next => {
  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/signout`, {
      method: "GET"
    })
      .then(response => {
        console.log("signout", response);
      })
      .catch(err => console.log(err));
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const isUser = () => {
  return isAuthenticated() && isAuthenticated().roles[0]
}

export const isAdmin = () => {
  return isAuthenticated() && isAuthenticated().roles[1]
}