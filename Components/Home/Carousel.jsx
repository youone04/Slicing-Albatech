import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carrousel = () => {
    return (
        <div
            style={{
                paddingBottom: '10px',
                position: 'relative'
            }}
        >
            <Carousel
                additionalTransfrom={0}
                // customDot={<CustomDot />}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 4
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <img
                    src="images/carousel/Rectangle 1922.png"
                    style={{
                        display: 'block',
                        margin: 'auto',
                        width: '80%'
                    }}
                />
                <img
                    src="images/carousel/Rectangle 1920.png"
                    style={{
                        display: 'block',
                        margin: 'auto',
                        width: '80%'
                    }}
                />
                <img
                    src="images/carousel/Rectangle 1923.png"
                    style={{
                        display: 'block',
                        margin: 'auto',
                        width: '80%'
                    }}
                />
                <img
                    src="images/carousel/Rectangle 1919.png"
                    style={{
                        display: 'block',
                        margin: 'auto',
                        width: '80%'
                    }}
                />
                <img
                    src="images/carousel/Rectangle 1921.png"
                    style={{
                        display: 'block',
                        margin: 'auto',
                        width: '80%'
                    }}
                />
            </Carousel>
        </div>
    )
}
export default Carrousel;

