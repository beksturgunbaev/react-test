import './styles/home.css'
import watch from '../../Assets/img/1.png'
import { Button } from './Button'
import HomeProducts from './HomeProducts'

const Home = () => {
    return (
        <>
            <section className="main_section">
                <div className="container">
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
                </div>
            </section>
            < HomeProducts />
        </>
    )
}

export default Home;