import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const goToAbout=()=>{
        navigate('/About')
    };
    return (
        <>
            <h1>HOME</h1>
           <div>Welcome to the home page</div>
           <button onClick={goToAbout}>Go to About Page</button>
        </>
    );
};

export default Home;