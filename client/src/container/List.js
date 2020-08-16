import React, { useEffect } from 'react';
import { useParams } from "react-router";
import resourceList from '../api/resourceList';

const List = () => {
    let { urlTitle } = useParams();

    useEffect(() => {
        console.log(urlTitle)
        resourceList.getSingleList(urlTitle)
            .then((res) => {
                console.log(res);
            });

    }, [urlTitle]);

    return (
        <div>
            List: {urlTitle}
        </div>
    );
}

export default List;
