import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import logowhite from "../../../../public/images/singleblogimages/logo-wht.svg";
import system from "../../../../public/images/singleblogimages/systm.svg";
import crossarow from "../../../../public/images/singleblogimages/crossarow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import ServiceFaq from "@/components/serviceComponent/12ServiceFaq";
import ContentBlogClient from "../../../components/blogComponents/ContentBlogClient";

const page = async ({ params }) => {
  const { slug } = params;
  // console.log('my slug is >>',slug)
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/getdata?&limit=1000`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const { data } = await response.json();
  const post = data.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const categoryLinks = {
    "artificial-intelligence": "/categories/artificial-intelligence",
    blogging: "/categories/blogging",
    "brand-marketing": "/categories/brand-marketing",
    "content-marketing": "/categories/content-marketing",
    "digital-marketing": "/categories/digital-marketing",
    ecommerce: "/categories/ecommerce",
    "email-marketing": "/categories/email-marketing",
    "facebook-marketing": "/categories/facebook-marketing",
    frameworks: "/categories/frameworks",
    "full-stack-javascript-development":
      "/categories/full-stack-javascript-development",
    "google-remarketing": "/categories/google-remarketing",
    hubspot: "/categories/hubspot",
    infographic: "/categories/infographic",
    infusionsoft: "/categories/infusionsoft",
    "internet-marketing": "/categories/internet-marketing",
    "ios-app": "/categories/ios-app",
    "iphone-app-development": "/categories/iphone-app-development",
    "java-development": "/categories/java-development",
    joomla: "/categories/joomla",
    "linkedin-marketing": "/categories/linkedin-marketing",
    "logo-design": "/categories/logo-design",
    magento: "/categories/magento",
    "main-post": "/categories/main-post",
    "mobile-application-development":
      "/categories/mobile-application-development",
    "office-culture": "/categories/office-culture",
    "online-reputation-management": "/categories/online-reputation-management",
    orm: "/categories/orm",
    "paid-marketing": "/categories/paid-marketing",
    php: "/categories/php",
    seo: "/categories/seo",
    shopify: "/categories/shopify",
    "social-media-marketing": "/categories/social-media-marketing",
    "titanium-development": "/categories/titanium-development",
    "web-application-development": "/categories/web-application-development",
    "web-design": "/categories/web-design",
    "web-developments": "/categories/web-developments",
    wordpress: "/categories/wordpress",
  };
  return (
    <>
      <section className="single-blog-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center ">
              <Image
                src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                width={825}
                height={431}
                alt="singleblog"
              />
              <div className="published-main pt-4 d-flex align-items-center justify-content-between">
                <ul className="d-flex align-items-center">
                  <li className="me-2 pe-2">
                    <span>Published on: </span>
                    {post.yoast_head_json.schema[
                      "@graph"
                    ][0].datePublished.slice(0, 10)}
                  </li>
                </ul>
                <ul className="social-icons">
                  Share this article :{" "}
                  <li className="px-2">
                    <a
                      href="https://www.facebook.com/webguruztechnologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Facebook page"
                    >
                      <FontAwesomeIcon
                        icon={faFacebook}
                        height={20}
                        role="image"
                        aria-label="Facebook"
                      />
                    </a>
                  </li>
                  <li className="px-2">
                    <a
                      href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our LinkedIn page"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        height={20}
                        role="image"
                        aria-label="LinkedIn"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ContentBlogClient post={post} categoryLinks={categoryLinks} />
        </div>
      </section>

      <section className="latest-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h3>
                Our Latest <span>Blog</span>
              </h3>
            </div>
            {data.slice(0, 3).map((post, index) => (
              <div className="col-sm-4 col-xs-12" key={index}>
                <div className="blog-card-main">
                  <div className="image">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
                      alt={`img${index + 1}`}
                      width={700}
                      height={340}
                    />
                  </div>
                  <div className="content">
                    <ul>
                      <li>
                        <p>
                          {
                            post.yoast_head_json.schema["@graph"][4].image
                              .caption
                          }
                        </p>
                      </li>
                      <li>
                        <p>
                          {post.yoast_head_json.schema[
                            "@graph"
                          ][0].datePublished.slice(0, 10)}
                        </p>
                      </li>
                      <li>
                        <p>7 min read</p>
                      </li>
                    </ul>
                    <h4>
                      <Link href={`/blog/${post.slug}`}>
                        {post.title.rendered}
                      </Link>
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered
                          .replace(/<p>/g, "")
                          .replace(/<\/p>/g, ""),
                      }}
                    />
                    <Link href={`/blog/${post.slug}`}>
                      Read More <span className="arrow"> {">"} </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="blog-single-banner mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="singleblog-img-content d-flex align-items-center">
                <Image src={logowhite} alt="Image" />
                <h3>
                  Bring Your Brand to Life With
                  <span>Innersive & Interactive Storytelling</span>
                </h3>
                <Image src={crossarow}  alt="Image1" />
                <Image src={system} alt="Imag2e" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceFaq />
    </>
  );
};

export default page;
