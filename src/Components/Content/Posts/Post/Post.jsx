import React from "react";
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.bodyPost}>
            <div className={s.user}>
                <div>
                    {props.id}
                </div>
                <div>
                    {props.name}
                </div>
            </div>
           
           <div className={s.postText}>
                <div className={s.title}>
                    {props.title}
                </div>
                <div className={s.text}>
                    {props.text}
                </div>
           </div>
            
        </div>
    )
}

export default  Post;