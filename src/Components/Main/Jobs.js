import React from 'react';
import CommonLink from '../CommonComponent/CommonLink';
import { api } from '../../Api/all.api'


const Jobs = () => {
    console.log("jobs")
    return (
        <>
            <CommonLink api={api.jobStories()} />

        </>
    )
}

export default Jobs
