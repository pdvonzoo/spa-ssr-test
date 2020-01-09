import React from "react";
import Book from "../core/Book";
const user = {
  name: "샤크라",
  count: 10
};

const dummyData = [user, user, user, user, user];
const UsersInfo = () => {
  return (
    <div>
      {dummyData &&
        dummyData.map((val, ind) => (
          <div>
            <li>이름 : {val.name}</li> <li>빌린 횟수 : {val.count}</li>
          </div>
        ))}
    </div>
  );
};

export default UsersInfo;
