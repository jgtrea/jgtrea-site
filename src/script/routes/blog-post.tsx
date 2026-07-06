import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BlogData, readMinutes } from '../component/data/blog';
import Reveal from '../component/reveal';
import '../../styles/blog.css';

const BlogPost = () => {
    const { id } = useParams();
    const post = BlogData.find(p => String(p.id) === id);

    if (!post) {
        return (
            <div className="blog-container">
                <p>Post not found.</p>
                <Link to="/blog" className="rect-btn blog-back-btn">
                    <ArrowLeft /><span className="button-text">back</span>
                </Link>
            </div>
        );
    }

    return (
        <div className="blog-container">
            <Reveal>
                <Link to="/blog" className="rect-btn blog-back-btn">
                    <ArrowLeft /><span className="button-text">back</span>
                </Link>
                <h1 className="blog-post-title">{post.title}</h1>
                <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{readMinutes(post)} min read</span>
                </div>
            </Reveal>
            <Reveal delay={0.15}>
                <div className="blog-post-content">
                    {post.content.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </Reveal>
        </div>
    );
};

export default BlogPost;
