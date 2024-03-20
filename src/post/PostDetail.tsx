import React from "react";
import {useLocation, useParams} from "react-router-dom";


function PostDetail(postedData: any) {

    const {id} = useParams();
    const location = useLocation();
    // const { id, title, date, time, content, img } = location.state;

    return (
        <div>
            <h2>Post Detail</h2>
            <p>ID: {id}</p>
            {/*<p>Title: {title}</p>*/}
            {/*<p>Date: {date}</p>*/}
            {/*<p>Time: {time}</p>*/}
            {/*<p>Content: {content}</p>*/}
        </div>
    );
}

export default PostDetail;