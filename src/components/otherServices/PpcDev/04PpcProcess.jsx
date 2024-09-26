const steps = [
  {
    title: "Preparation and Brainstorming",
    description:
      "We start with a detailed business analysis and then prepare a proposal and define deadlines and deliverables.",
    step: "Step 1",
  },
  {
    title: "Planning and Researching",
    description:
      "We are a digital marketing agency with a knack for research, both industry and competitor.",
    step: "Step 2",
  },
  {
    title: "Testing Everything",
    description:
      "Once we’re all finished with noting down your requirements, we start experimentation, which involves experimenting with ads and content.",
    step: "Step 3",
  },
  {
    title: "Implementing and Execution",
    description:
      "Finally, we create suitable social media and other campaigns to make it easy for your business to reach your relevant targeted audience.",
    step: "Step 4",
  },
];

const PpcProcess = () => {
  return (
    <>
      <section className="processppc py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2 className="color-wt">Our Process</h2>
              <span className="color-wt">
                Our professionals are adept in increasing your online presence,
                visibility, and brand awareness along with helping you boost
                your ROI. We make outsourcing digital marketing services a
                breeze. All of this happens in just four simple steps.
              </span>
            </div>
          </div>
          <div className="row process-card-main">
            {steps.map((step, index) => (
              <div key={index} className="col-sm-3 col-xs-12">
                <div className="card-process">
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                  <span className="step1">{step.step}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcProcess;
