import React from 'react';
import { api } from '../../Api/all.api'
import CommonLink from '../CommonComponent/CommonLink';

const TopStories = () => {
    console.log("topstories")

    return (
        <React.Fragment>
            <CommonLink api={api.topLists()} />

        </React.Fragment>
    )
}
export default TopStories