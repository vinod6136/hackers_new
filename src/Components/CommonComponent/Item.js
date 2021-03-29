import React, { useState, useEffect } from 'react';
import { api } from '../../Api/all.api'
import '../CSS/styles.css'
import moment from 'moment';

const Item = ({ id, number }) => {
    console.log("ITEM");
    const [result, setResult] = useState([]);
    useEffect(() => {
        console.log("useEffect ");
        const getData = async () => {
            try {
                const res = await api.itemData(id);
                setResult(res)
            } catch (e) {
                console.log(e, "error")
            }
        };
        getData();
    }, [id]);

    console.log(result, "result")
    return (
        <React.Fragment>
            {result && <>
                <tr className="athing" id="26233736">
                    <td align="right" valign="top" className="title"><span className="rank">{number}.</span></td>
                    <td valign="top" className="votelinks">
                        <center>
                            <a id="up_26233736" href="vote?id=26233736&amp;how=up&amp;goto=from%3Fsite%3Dthedrive.com">
                                <img src='./images/grayarrow.png' className="votearrow" alt='upvote' />
                            </a>
                        </center>
                    </td>
                    <td className="title">
                        <a href={result.url} className="storylink">{result.title}</a>
                        {result.url && <span className="sitebit comhead"> (<span className="sitestr">{`${result.url}`.replace('http://', '').replace('https://', '').split(/[/?#]/)[0]}</span>)</span>}
                    </td>
                </tr>
                <tr>
                    <td colSpan="2"></td>
                    <td className="subtext">
                        <span className="score" id="score_26233736">{result.score} points</span> by {result.by} <span className="age">{moment.unix(result.time).fromNow()} | past</span>
                    </td>
                </tr>
                <tr className="spacer" ></tr></>}
        </React.Fragment>
    );
};


export default Item;