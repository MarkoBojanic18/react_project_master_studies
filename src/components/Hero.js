import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import './HeroStyle.css'
import { Link } from 'react-router-dom'
import mainPicture from '../assest/main.png'
import bitcoin from '../assest/bitcoin.png'
import ethereum from '../assest/Ethereum.png'
import solana from '../assest/solana.png'
import cardano from '../assest/cardano.png'
import tether from '../assest/tether.png'
import binanceCoin from '../assest/binanceCoin.png'
import usdCoin from '../assest/usdCoin.png'
import polkadot from '../assest/polkadot.png'









const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <div className='content'>
                    <div className='col-1'>
                        <h1>Data to enrich your</h1>
                        <h1><span className='primary-color'>Online trading</span></h1>
                        <div className='main-picture'>
                            <Link to='/'><img src={mainPicture} alt='' /></Link>
                        </div>
                        <div className='used-by'>
                            <p>USED BY</p>
                            <div className='icons'>
                                <i><FaDatabase /> SportLine</i>
                                <i><FaAsterisk /> Star</i>
                                <i><FaAccusoft /> Accusoft</i>
                            </div>
                        </div>
                    </div>
                    <div className='col-2'>
                        <div className='form-layout'>
                            <div className='form-container'>
                                    <p className='sign-in-txt'>Sign in with</p>
                                    <div className='social-login'>
                                        <i><FaFacebook size={20}/></i>
                                        <i><FaTwitter size={20}/></i>
                                        <i><FaGithub size={20}/></i>
                                    </div>
                                    <div className='divider'>
                                        <p><span>Or</span></p>
                                    </div>
                                    <form action=''>
                                        <input type='text' placeholder='Name' />
                                        <input type='email' placeholder='Email' />
                                        <input type='password' placeholder='Password' />
                                        <button>Create your account</button>
                                    </form>
                            </div>
                            <div className='form-footer'>
                                    <p>By signing up, you agree to our
                                        <span className='primary-color'> Terms,Data Policy</span> and
                                        <span className='primary-color'> Cookies Policy</span>.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="brends">
            <Link to='/'><img src={bitcoin} alt='' /></Link>
            <Link to='/'><img src={ethereum} alt='' /></Link>
            <Link to='/'><img src={solana} alt='' /></Link>
            <Link to='/'><img src={cardano} alt='' /></Link>
            <Link to='/'><img src={tether} alt='' /></Link>
            <Link to='/'><img src={binanceCoin} alt='' /></Link>
            <Link to='/'><img src={usdCoin} alt='' /></Link>
            <Link to='/'><img src={polkadot} alt='' /></Link>
            </div>
        </div>
    )
}

export default Hero
