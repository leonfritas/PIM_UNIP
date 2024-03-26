import React, { useEffect, useState, useRef } from 'react'
import './css/carouselProdutos.css'

export default function CarouselProdutos() {

    const [data, setData] = useState([])
    const carousel = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3000/static/itensCarousel.json')
            .then((response) => response.json())
            .then(setData)
    }, [])

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    if (!data || !data.length) return null;

    return (
        <div className='divTop' >
            <div className='carousel' ref={carousel}>
                {data.map((item) => {
                    const { id, name, price, oldPrice, image } = item;
                    return (
                        <div className='item' key={id}>
                            <div className='image'>
                                <img src={image} alt={name} />
                            </div>
                            <div className='info'>
                                <span className='name'>{name}</span>
                                <span className='oldPrice'>{oldPrice}</span>
                                <span className='price'>{price}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='buttons'>
                <button onClick={handleLeftClick} ><img src="/static/image/setaCarousel.png" alt="Scroll Left" /></button>
                <button onClick={handleRightClick}><img src="/static/image/setaCarousel.png" alt="Scroll Right" /></button>
            </div>
        </div>
    )
}