import Image from "next/image";
import Link from "next/link";
import { fetchPosts } from "../../../lib/fetchData"; // Ensure this is optimized for your data fetching
import React from "react";
const BlogCard = React.memo(({ post }) => (
  <div className="blog-card">
    <div className="blogimage">
      <Image
        src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
        alt={`Image for ${post.title.rendered}`}
        width={700}
        height={340}
        loading="lazy" // Lazy load images for performance
        // priority={post.id === 1} // Adjust priority based on your needs
      />
    </div>
    <div className="blog-content">
      <span className="mb-2 d-inline-block">Blog </span>
      <h6>{post.title.rendered}</h6>
      <Link className="explore-btn" href={`/blog/${post.slug}`}>
        Read More
      </Link>
    </div>
  </div>
));

const FeaturedBlog = async () => {
  let posts;
  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <p>Error fetching posts. Please try again later.</p>;
  }

  if (!posts || posts.length === 0) {
    return <p>No posts available</p>;
  }

  return (
    <section className="featured-blog py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
            <h2 className="pb-2">
              <span>Latest</span> From Us
            </h2>
            <span>
              Know what's latest in Digital Marketing and Web Development
              Technologies.
            </span>
          </div>
        </div>
        <div className="row blog-card-content">
          <div className="col-sm-6 col-xs-12 blog-sub left">
            {posts.slice(0, 2).map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
          <div className="col-sm-6 col-xs-12 blog-sub right">
            <BlogCard post={posts[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;
