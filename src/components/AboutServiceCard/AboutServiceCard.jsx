import React from 'react'

const AboutServiceCard = ({ item }) => {
    const { service_title, service_image_url } = item;
    return (
        <section className="about-service-card mew">
            <div className="service-image">hello</div>
            <h1 className="service-title">{service_title}</h1>
        </section>
    )
}

export default AboutServiceCard
