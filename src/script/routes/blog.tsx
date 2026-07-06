import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, Rows3 } from 'lucide-react';
import { BlogData } from '../component/data/blog';
import type { BlogPost } from '../component/data/blog';
import Reveal from '../component/reveal';
import '../../styles/blog.css';

export const readMinutes = (post: BlogPost) =>
    post.readTime ?? Math.max(1, Math.round(post.content.split(/\s+/).length / 200));

const Blog = () => {
    const [view, setView] = useState<'rows' | 'grid'>('rows');
    const latestPosts = [...BlogData].reverse();

    return (
        <div className="blog-container">
            <Reveal>
                <div className="blog-titlebar">
                    <span className="intro-text"><b>My Blog.</b></span>
                    <div className="view-toggle">
                        <button
                            className={`view-toggle-btn${view === 'rows' ? ' active' : ''}`}
                            onClick={() => setView('rows')}
                            aria-label="Row view"
                        >
                            {view === 'rows' && (
                                <motion.div layoutId="view-indicator" className="view-toggle-indicator" />
                            )}
                            <Rows3 />
                        </button>
                        <button
                            className={`view-toggle-btn${view === 'grid' ? ' active' : ''}`}
                            onClick={() => setView('grid')}
                            aria-label="Grid view"
                        >
                            {view === 'grid' && (
                                <motion.div layoutId="view-indicator" className="view-toggle-indicator" />
                            )}
                            <LayoutGrid />
                        </button>
                    </div>
                </div>
            </Reveal>

            <div className={view === 'rows' ? 'blog-list' : 'blog-grid'}>
                {latestPosts.map((post, index) => (
                    <motion.div
                        layout="position"
                        key={post.id}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.15 + index * 0.1,
                            ease: 'easeOut',
                            layout: { duration: 0.35, delay: 0, ease: 'easeOut' },
                        }}
                    >
                        <Link to={`/blog/${post.id}`} className="blog-card">
                            <h2 className="blog-card-title">{post.title}</h2>
                            <span className="blog-card-date">{post.date}</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
