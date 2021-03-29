import React from 'react';
import CommonLink from '../CommonComponent/CommonLink';
import { api } from '../../Api/all.api'

const NewStories = () => {
    console.log("new stories")
    return (
        <>
            <CommonLink api={api.newLists()} />

        </>
    )
}

export default NewStories
