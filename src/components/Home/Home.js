import React from 'react'
import './styles/home.css'
import watch from '../../Assets/img/1.png'
import { Button } from './Button'

const Home = () => {
    return (
        <>
            <div className="container">
                <section className='section'>
                    <div className="main_content">
                        <div className="content_left">
                            <h1>Lorem ipsum <br/>dolor sit amet</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet eligendi saepe eos corrupti. 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eveniet eligendi saepe eos corrupti.
                            </p>
                            < Button />
                        </div>
                        <div className="content_right">
                            <article>
                                <img src={watch} alt="watch" />
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;