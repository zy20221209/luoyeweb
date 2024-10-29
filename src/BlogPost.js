import React from 'react';

function BlogPost({ title, date, content }) {
    return (
        <article className="blog-post">
            <h2>{title}</h2>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
    );
}

export default BlogPost;