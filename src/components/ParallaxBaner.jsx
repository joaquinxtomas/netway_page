import React, { useState, useEffect } from 'react'

const useParallaxBanner =
    setScrollPosition => {
        const handleScroll = () =>
            setScrollPosition(window.pageYOffset);

        useEffect(() => {
            window
            .addEventListener(
                'scroll',
                handleScroll,
                {passive : true}
            )

            return () =>
                window.removeEventListener(
                    "scroll", handleScroll
                )
        },[])
    }

const ParallaxBaner = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useParallaxBanner(setScrollPosition)

    return (
        <>
        <section
        style={{
            backgroundSize: `${
                (window.outerHeight - scrollPosition) / 3
            }%`
        }}
        className='banner'
        >
            <h2>Parallax</h2>
            <button>Get Started</button>
        </section>
        <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quod earum itaque rerum minima illum eum tempora voluptates sapiente doloribus. Rem tenetur laborum, laboriosam quas assumenda deserunt sed recusandae. Id.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique id fugit omnis magni in earum quaerat cumque, ipsum, ex deleniti enim temporibus molestias ratione ducimus cum, quis reiciendis sed? Impedit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum libero laudantium natus eius minima provident iusto porro qui voluptates, officia dicta accusantium, quibusdam aspernatur repudiandae eum nobis. Temporibus, quis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus minima, dolorem consectetur quos blanditiis tempora commodi eum illum, fugiat veniam praesentium, sed vel illo eligendi. Corrupti at natus voluptatem repudiandae!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat modi sit beatae dolorem a eius quibusdam temporibus tempore, dolor repellendus voluptate voluptas obcaecati itaque quis corporis! Reiciendis, dolor. Iste, inventore?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque possimus facilis explicabo quasi, odit expedita ducimus iste quae voluptatum vitae deleniti alias nobis quod velit? Sapiente deserunt optio saepe!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquam quibusdam natus blanditiis quisquam quas dolores, harum pariatur nesciunt dicta ipsam esse totam explicabo nisi quaerat minima possimus officia porro!
        </h1>
        </>
    )
}

export default ParallaxBaner