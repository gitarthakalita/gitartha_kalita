import React from 'react'
import Link from 'next/link';


const AboutServiceCard = ({ item }) => {
    const { service_title, service_image_url, service_link } = item;
    return (
        <Link href={`/services/${service_link}`}>
            <section className=" mew_service">
                <div className="service-image"
                    style={{
                        backgroundImage: `url(${service_image_url})`
                    }}
                ></div>
                <h1 className="service-title">{service_title}</h1>
            </section>
        </Link>
    )
}

export default AboutServiceCard
