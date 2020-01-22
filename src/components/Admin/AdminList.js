import React from "react";
import AdminSearch from "./AdminSearch";
import InhouseBooks from "./AdminContainers/InHouseBooks";
import ExternalsBooks from "./AdminContainers/ExternalsBooks";
import UserInfo from "./AdminContainers/UserInfo";

export default ({ view }) => {
    const views = [<UserInfo />, <ExternalsBooks />, <InhouseBooks />]
    return (<>
        <AdminSearch view={view} />
        {views[view]}
    </>)
}