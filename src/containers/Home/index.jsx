import React from 'react'
import ListCard from '../../components/ListCard'
import Search from '../../components/Search'
import Header from '../Header'
import './style.scss'

export default function Home() {
    const data = {
        title: "Executive Producer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
    return (
        <>
            <div className="home-wrapper">
                {
                    // loading ?
                    //     Array.from(new Array(5)).map(each => {
                    //         return <DummyListCard style={{ animation: "none" }} />
                    //     })
                    //     : users.map(({ id, ...user }, i) => {
                    //         return <ListCard key={id} {...user} style={{ animationDelay: `${i * 0.25}s` }} />
                    //     })
                }



                <div className="hero">
                    <div className="hero-inner max-width-1200">
                        <Header />
                        <div className="heading">
                            <p className="h1 text-left">Find Your Dream Job </p>
                            <p className="h2 text-left">Browse through thousands of full-time or part-time jobs near you</p>
                        </div>

                    </div>
                </div>
                <div className="main">
                    <div className="main-inner max-width-1200">
                        <Search />
                        <div className="cards-wrapper">
                            {
                                Array.from(new Array(5)).map((each, i) => {
                                    return <ListCard {...data} key={i} style={{ animation: "none" }} />
                                })
                            }
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
