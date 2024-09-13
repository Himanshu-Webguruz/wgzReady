import Image from "next/image";
import Link from "next/link";
// import { fetchPosts } from "../../../lib/mongodb";

const Featuredblog = async () => {
  const posts = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?limit=1000`
  );
  const {data} = await posts.json();
  if (!posts || posts.length === 0) {
    
    return <p>No posts available</p>;
  }
  return (
    <div>
      <section className="featured-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h3 className="pb-3">
                Featured <span>Blog</span>{" "}
              </h3>
              <p>
                Using the latest technology and industry expertise, we built
                top-end Android and iOS-based applications that add value to the
                business and user experience.
              </p>
            </div>
          </div>
          <div className="row blog-card-content">
            <div className="col-sm-6 col-xs-12 blog-sub left">
              {data.slice(0,2).map((post, index) => (
                <div className="blog-card" key={index}>
                  <div className="blogimage">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
                      alt="img"
                      width={700}
                      height={340}
                    />
                  </div>
                  <div className="blog-content">
                    <span className="mb-4">Blog </span>
                    <h6> {post.title.rendered}</h6>
                    <Link className="explore-btn" href={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-6 col-xs-12 blog-sub right">
              <div className="blog-card">
                <div className="blogimage">
                  <Image
                    src={
                      data[2].yoast_head_json.schema["@graph"][0].thumbnailUrl
                    }
                    alt="img"
                    width={700}
                    height={340}
                  />
                </div>
                <div className="blog-content">
                  <span>Blog </span>
                  <h6> {data[2].title.rendered}</h6>
                  <Link className="explore-btn" href={`/blog/${data[2].slug}`}>
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuredblog;