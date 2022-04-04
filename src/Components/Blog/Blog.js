import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
           <div id='contex' className='half-width'>
               <h1>What is contex API?</h1>
               <p>When many components at different nesting levels need access to the data, context is used. It should be used with carefully since it makes component reuse increasingly difficult. Item composition is frequently a typical procedure that contextual if you want want to stop providing some props over several layers.</p>
           </div>
            <div id='contex' className='half-width'>
                <h1>What is Semantic Tag?</h1>
                <p>Semantic HTML5 addresses this weakness by adding explicit tags that properly describe what role the content included in all variables plays. Such explicit information supports intelligent machines including such Google and Bing in recognizing which information is significant, which is a selection, which is for navigation, and so on.</p>
            </div>
        </div>
    );
};

export default Blog;