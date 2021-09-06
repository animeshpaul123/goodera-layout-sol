import React from 'react'
import SearchIcon from '../../Assets/Images/search.png'
import SelectIcon from '../../Assets/Images/select.png'
import MapIcon from '../../Assets/Images/map.png'
import Button from '../Button'
import './style.scss'

export default function Search(props) {
    return (
        <div className="search-wrapper">
            <div className="search d-flex jc-space-between ai-center">
                <div className="r-input-select d-flex jc-center ai-center">
                    <div className="input-wrapper d-flex jc-center ai-center">
                        <img src={SearchIcon} alt="" />
                        <input type="text" placeholder="Job title or keyword" />
                    </div>
                    <div className="select-wrapper d-flex jc-center ai-center">
                        <div className="d-flex ai-center">
                            <img src={MapIcon} alt="" className="map-icon" />
                            <input type="text" placeholder="Job title or keyword" />
                        </div>
                        <div className="d-flex ai-center">
                            <img src={SelectIcon} alt="" className="select-icon" />

                        </div>
                    </div>
                </div>
                <div className="button-wrapper d-flex jc-center ai-center">
                    <Button filled color="#fff">
                        Search
                    </Button>
                </div>
            </div>
        </div>
    )
}
