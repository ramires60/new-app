import React from 'react';
import css from './Post.module.css'


const Post = (props) => {
    return (
        <div>
         <div ><img className={css.avatar} src='https://thumbs.dreamstime.com/b/%D0%BF%D1%80%D0%B8%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9-%D0%B2-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82-%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D0%BE%D0%B9-%D0%BA%D1%80%D1%83%D0%B3-%D0%BE%D0%BA%D0%B0%D0%B9%D0%BC%D0%BB%D1%8F%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%B0-instagram-%D0%B4%D0%BB%D1%8F-web-176487482.jpg'/>
         {props.message}
         </div>
         likes {props.likes}
         </div>
    )
}

export default Post