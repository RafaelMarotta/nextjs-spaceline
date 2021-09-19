import TimeLineItem from './item'
import React, { useState } from 'react';

export default function TimeLine(props) {
    const [isHide, setIsHide] = useState(true)

    function toggleTrackingList() {
        setIsHide(!isHide)
    }

    return (
        <div className=" d-flex justify-content-center">
            <div className={"d-flex text-center tracking-status-intransit tracking-status-" + props.status}>
                <p className="tracking-status p-2"></p>
            </div>
            <div className={"period-container shadow-" + props.status}>
                <div className="d-flex">
                    <div className="tracking-list">
                        <div className="w-100 period-header" onClick={toggleTrackingList}>
                            <h4 className="p-2 pt-3 title-tracking text-uppercase">{props.title}</h4>
                        </div>
                        {!isHide ? (
                            <div>
                                {
                                    props.items.map((item) => (
                                        <TimeLineItem key="item.title" title={item.title} mp3={item.mp3}></TimeLineItem>
                                    ))
                                }
                            </div>
                        ) : <div></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}