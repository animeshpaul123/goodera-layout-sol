import React from 'react'
import { memo } from 'react'
import Button from '../Button'
import Shimmer from './Shimmer'
import './style.scss'

const ListCard = (props) => {
    const { title, desc, style } = props

    console.log("rendering")
    return (
        <div className="list-card-wrapper" style={style}>
            <div className="list-card-body">
                <div className="list-card-left">
                    {/* <img src={picture} alt="people" /> */}
                </div>
                <div className="list-card-right">
                    <p className="title text-left">{title}</p>
                    <p className="desc text-left">{desc}</p>
                    <div className="button-wrapper d-flex jc-flex-end ai-center">
                        <Button outlined color="#F07987">
                            View Details
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const DummyListCard = ({ style }) => {

    console.log("rendering")
    return (
        <div className="list-card-wrapper" style={style}>
            <div className="list-card-body">
                <div className="list-card-avater">
                    <Shimmer style={{ height: "280px", backgroundSize: "789px 504px" }} />
                </div>
                <div className="list-card-description-wrapper" style={{ display: "block" }}>
                    <div className="list-card-description">
                        <Shimmer style={{ width: "50%" }} />
                        <Shimmer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ListCard)
