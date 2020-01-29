import React from "react";
import AdminSearch from "./AdminSearch";
import InHouseBooks from "./AdminContainers/InHouseBooks";
import ExternalsBooks from "./AdminContainers/ExternalsBooks";
import UserInfo from "./AdminContainers/UserInfo";

export default ({ view }) => {
    const views = [<UserInfo />, <ExternalsBooks />, <InHouseBooks />]
    return (<>
        <AdminSearch view={view} />
        {views[view]}
    </>)
}