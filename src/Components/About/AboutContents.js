import useAbout from '../../hooks/useAbout';
import AboutContent from './AboutContent';

const AboutContents = () => {

    const [abouts] = useAbout();
    return (
        <section className="container-fluid">
            <div className="container">
                <div className="row">
                    
                        {
                            abouts.map ( about => <AboutContent
                            key = {about.id}
                            about = {about}
                            ></AboutContent>)
                        }
                    
                </div>
            </div>
        </section>
    );
};

export default AboutContents;