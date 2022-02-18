import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

export const Landing = () => {
  return (
      <Wrapper>
          <nav>
              <Logo />
          </nav>
          <div className='container page'>
              <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                    I'm baby tattooed poutine cliche paleo chambray tacos fashion axe kinfolk pug palo santo migas. Tousled bitters humblebrag typewriter lomo deep v affogato poutine 3 wolf moon chillwave tacos.
                </p>
                <Link to="/register" className='btn btn-hero'>
                    Login/Register
                </Link>
              </div>
              <img src={main} alt='job hunt' className='img main-img' />
          </div>
      </Wrapper>
  );
};

