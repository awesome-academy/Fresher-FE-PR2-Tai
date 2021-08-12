type HeadingProps = {
  title: string;
  desc: string;
};
const Heading = ({ title, desc }: HeadingProps) => {
  return (
    <div className='section-title-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-content-gap'>
              <div className='secton-content'>
                <h3 className='section-title'>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
