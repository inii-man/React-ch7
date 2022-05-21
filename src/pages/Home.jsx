import { Carousel } from 'react-bootstrap';
function Home () {
    return (
        <div>
            <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/abstract-triangles-picture-id1061123944?b=1&k=20&m=1061123944&s=170667a&w=0&h=QcabcTzWEglSiGIXh_e-v_xLj3wFCyQh6pRGJn-p2UA="
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First Image</h3>
                <p>1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/game-background-picture-id1061119906?b=1&k=20&m=1061119906&s=170667a&w=0&h=Po8iO8V4gMpKS9OX6CmMCx1JJxeTMGeS_kjiJCgzOio="
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second Image</h3>
                <p>2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/abstract-composition-with-connecting-dots-and-lines-futuristic-for-picture-id1341437653?b=1&k=20&m=1341437653&s=170667a&w=0&h=TsUPRBpi8fTDj-HTPD9AqSujWadlti0tZaCu3ue70ic="
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third Image</h3>
                <p>3</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;