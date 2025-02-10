import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate('/')
    };
    return (
        <>
            <h1>About</h1>
           <div>Welcome to the About page</div>
           <button onClick={goToHome}>Go to Home Page</button>
        </>
    );
};

export default About;