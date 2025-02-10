import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const goToHome=()=>{
        navigate('/')
    };
    return (
        <>
            <h1>Login</h1>
            <form>
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Login</button>
                <button onClick={goToHome}>Go to Home Page</button>
            </form>
        </>
    );
};

export default Login;
