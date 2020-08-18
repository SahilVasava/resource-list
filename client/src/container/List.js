import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import resourceList from '../api/resourceList';
import PageNotFound from '../components/PageNotFound';

const List = () => {
    let { id } = useParams();

    useEffect(() => {
        resourceList.getSingleList(id)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                return <Redirect component={PageNotFound} />
            });

    }, [id]);

    return (
        <div>
            List: {id}
        </div>
    );
}

export default List;
