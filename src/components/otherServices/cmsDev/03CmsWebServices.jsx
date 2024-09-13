import Image from "next/image";
import drplleft from "../../../../public/images/drupalimg/drupal1.png";

// Array to store Drupal services data
const drupalServices = [
  {
    title: "Drupal CMS Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
  {
    title: "Drupal Commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
  {
    title: "Custom Modules Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
  {
    title: "Drupal Theme Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
  {
    title: "Drupal Responsive Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
  {
    title: "Website Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
  {
    title: "Website Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
  {
    title: "PSD to Drupal Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis eget urna eu vestibulum.",
  },
];

const CmsWebServices = () => {
  return (
    <>
      <section className="dvlpsrvc py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="lftbg"></div>
              <div className="heading-main">
                <h3 className="text-white">
                  Drupal Web <br />
                  Development Services
                </h3>
                <div className="drplimg">
                  <Image
                    src={drplleft}
                    className="img-fluid"
                    alt="Drupal Development Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="drplcmsct">
                {drupalServices.map((service, index) => (
                  <div className={`drplcmsctinnr dr${index + 1}`} key={index}>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CmsWebServices;
