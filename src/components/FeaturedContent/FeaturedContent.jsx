import React from 'react'

const FeaturedContent = () => {
    return (
        <div className="featured-content">
            <div className="featured-content__wrapper">
                <div className="featured-item featured--image"></div>
                <div className="featured-item featured--content">
                    <div className="featured--content__wrapper">
                        <h1>How design thinking helps in business development ?</h1>
                        <p className="description">
                            Design thinking is a proven and repeatable problem solving protocol that any business or profession can employ to achieve big results.
                            {/* Design thinking combines creative and critical thinking that allows information and ideas to be organized, */}
                    </p>
                        <div className="tags">
                            <span>Business Development</span>
                            <span>Entrepreneurship</span>
                            <span>Design</span>
                            <div className="date">02.11.2020</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedContent;
