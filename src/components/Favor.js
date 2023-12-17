import React from 'react'
import './Favor.css'
import { Link } from 'react-router-dom'
import chart from '../assest/chart.png'
import cikica from '../assest/cikica.png'


const Favor = () => {
    return (
        <div className='pricing'>
            <div className='container'>
                <div className='top-content'>
                    <div>
                        <h2>Everything you need for <span>$99 a month</span></h2>
                        <p>Includes every feature we offer plus unlimited projects and unlimited users.</p>
                    </div>
                    
                    <div className='btn-div'>
                        <button>Get started today</button>
                        
                    </div>
                    <div className='chart'>
                            <Link to='/'><img src={chart} alt='' /></Link>
                        </div>
                </div>

               
                <div className='bottom-content'>
                    <div className='card'>
                        <p><span>Everything you need</span></p>
                        <h3>All-in-one platform</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                            soluta, temporibus ea est ipsum vero recusandae blanditiis ut
                            doloribus excepturi!</p>
                             
                            <Link to='/'><img className='cikica' src={cikica} alt='' /></Link>
                             
                    </div>
                    <div className='card'>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favor
