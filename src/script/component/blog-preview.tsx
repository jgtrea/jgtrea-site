import { Link } from 'react-router-dom';
import { BlogData } from './data/blog';
import Reveal from './reveal';
import SectionHeader from './section-header';
import '../../styles/blog.css';

const BlogPreview = () => {
    const latestPosts = [...BlogData].reverse().slice(0, 2);

    return (
        <div className="blog-container">
            <Reveal delay={0.3}>
                <SectionHeader title="Recent blogs" action={{ label: 'All blogs', to: '/blog' }} />
            </Reveal>

            <div className="blog-list">
                {latestPosts.map((post, index) => (
                    <Reveal delay={0.45 + index * 0.1} key={post.id}>
                        <Link to={`/blog/${post.id}`} className="blog-card">
                            <h2 className="blog-card-title">{post.title}</h2>
                            <span className="blog-card-date">{post.date}</span>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default BlogPreview;
