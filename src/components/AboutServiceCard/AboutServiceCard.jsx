import React from 'react'

const AboutServiceCard = ({ item }) => {
    const { service_title, service_image_url } = item;
    return (
        <section className=" mew_service">
            <div className="service-image" 
                 style={{
                     backgroundImage:`url(${service_image_url})`
                 }}
            ></div>
            <h1 className="service-title">{service_title}</h1>
        </section>
    )
}

export default AboutServiceCard
