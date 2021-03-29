import React, { useState, useEffect } from 'react';
import ListTable from '../Main/ListTable';

const CommonLink = ({ api }) => {
    const [mainContent, setMainContent] = useState();
    const [moreData, setMoreData] = useState(false);
    useEffect(() => {
        api.then(res => {
            console.log(res);
            setMainContent(res);
            setMoreData(true);
        }).catch(err => {
            console.log(err);
            setMoreData(true);
        });
    }, [])


    return (
        <>
            {moreData && <ListTable data={mainContent} />}
        </>
    );
};

export default CommonLink;