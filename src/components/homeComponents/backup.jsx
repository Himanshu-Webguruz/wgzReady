//backup of counterblogclients
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContentBlogClient = ({ post, categoryLinks }) => {
  const [activeSection, setActiveSection] = useState(null);

  // Function to handle scroll and update the active section
  useEffect(() => {
    const handleScroll = () => {
      if (!post.acf.post_inner_details || post.acf.post_inner_details.length === 0) {
        return;
      }
      post.acf.post_inner_details.forEach((detail, index) => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 30) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [post.acf.post_inner_details]);

  return (
    <div className="row">
      {/* Sidebar */}
      <div className="col-sm-3 col-xs-12">
        <span className="tag">{post.acf.list_all_category}</span>
        <div className="author-card">
          <h4>Author</h4>
          <div className="author-content-img d-flex align-items-center mb-4">
            <Image
              src={post.yoast_head_json.schema["@graph"][4].image.url}
              alt="Author"
              width={20}
              height={20}
            />
            <div className="content">
              <h5>{post.yoast_head_json.schema["@graph"][4].image.caption}</h5>
              <p className="mb-0">Webguruz Technology Pvt. Ltd.</p>
            </div>
          </div>
          <p>{post.yoast_head_json.schema["@graph"][4].description}</p>
        </div>

        {post.acf.post_inner_details && post.acf.post_inner_details.length > 0 ? (
          <div className="table-content">
            <h4>Table of Contents</h4>
            <ul>
              {post.acf.post_inner_details.map((detail, index) => (
                <li
                  key={index}
                  className={activeSection === index ? "content-active" : ""}
                >
                  {detail.heading && (
                    <a href={`#section-${index}`}>{detail.heading}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      {/* Main content */}
      <div className="col-sm-9" key={post._id}>
        {post.acf.post_inner_details && post.acf.post_inner_details.length > 0 ? (
          <div className="inner-description">
            {post.acf.post_inner_details.map((detail, index) => (
              <div key={index}>
                {detail.heading && (
                  <h4 id={`section-${index}`}>{detail.heading}</h4>
                )}
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />
              </div>
            ))}
          </div>
        ) : null}

        <div className="blog-single-categories">
          <h4>Tags</h4>
          <ul className="d-flex flex-wrap text-capitalize single-cat">
            {Object.keys(categoryLinks).map((category) => (
              <li key={category}>
                <Link href={categoryLinks[category]}>
                  {category.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Infographic Image outside of sidebar */}
      {!post.acf.post_inner_details || post.acf.post_inner_details.length === 0 ? (
        <div className="infographic-image">
          <Image
            src={post.acf.infographic_image}
            alt="Infographic"
            width={500}
            height={300}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ContentBlogClient;


/*
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContentBlogClient = ({ post, categoryLinks }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      post.acf.post_inner_details.forEach((detail, index) => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 30) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [post.acf.post_inner_details]);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust scroll position if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="row">
      <div className="col-sm-3 col-xs-12">
        <span className="tag">{post.acf.list_all_category}</span>
        <div className="author-card">
          <h4>Author</h4>
          <div className="author-content-img d-flex align-items-center mb-4">
            <Image
              src={post.yoast_head_json.schema["@graph"][4].image.url}
              alt="Author"
              width={20}
              height={20}
            />
            <div className="content">
              <h5> {post.yoast_head_json.schema["@graph"][4].image.caption}</h5>
              <p className="mb-0">Webguruz Technology Pvt. Ltd.</p>
            </div>
          </div>
          <p>{post.yoast_head_json.schema["@graph"][4].description}</p>
        </div>
        <div className="table-content">
          <h4>Table of Contents</h4>
          <ul>
            {post.acf.post_inner_details.map((detail, index) => (
              <li
                key={index}
                className={activeSection === index ? "content-active" : ""}
              >
                {detail.heading && (
                  <span
                    style={{ cursor: "pointer", color: "blue" }} // Make it look like a link
                    onClick={() => scrollToSection(index)}
                  >
                    {detail.heading}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-sm-9" key={post._id}>
        {post.acf.post_inner_details.length > 0 && (
          <div className="inner-description">
            {post.acf.post_inner_details.map((detail, index) => (
              <div key={index}>
                {detail.heading && (
                  <h4 id={`section-${index}`}>{detail.heading}</h4>
                )}
                <div dangerouslySetInnerHTML={{ __html: detail.description }} />
              </div>
            ))}
          </div>
        )}
        <div className="blog-single-categories">
          <h4>Tags</h4>
          <ul className="d-flex flex-wrap text-capitalize single-cat">
            {Object.keys(categoryLinks).map((category) => (
              <li key={category}>
                <Link href={categoryLinks[category]}>
                  {category.replace(/-/g, " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentBlogClient;

 */