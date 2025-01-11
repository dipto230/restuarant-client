import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname||"/";
    console.log('state in the location ', location.state)

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6); // Initialize the captcha when the component mounts
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value; // Reference the input by its name attribute
        const password = form.password.value; // Reference the input by its name attribute
        const captcha = form.captcha.value; // Capture captcha value

        if (!validateCaptcha(captcha)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Captcha',
                text: 'Please validate the captcha again.',
            });
            return;
        }

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    title: 'Login Successful!',
                    icon: 'success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInUp animate__faster',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutDown animate__faster',
                    },
                });
                navigate(from,{replace:true})
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: error.message,
                });
            });
    };

    const handleValidateCaptcha = (event) => {
        event.preventDefault();
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            Swal.fire({
                icon: 'success',
                title: 'Captcha Validated',
                text: 'You can now log in.',
            });
            setDisabled(false);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Captcha',
                text: 'Please try again.',
            });
            setDisabled(true);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/reset-password" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input
                                name="captcha"
                                type="text"
                                ref={captchaRef}
                                placeholder="Enter captcha"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs w-full">
                                Validate Captcha
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={false} className="btn btn-primary w-full" type="submit" value="Login" />
                        </div>
                    </form>
                    <p>
                        <small>
                            New Here? <Link to="/signup">Create an account</Link>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
