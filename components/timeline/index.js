import TimeLineItem from './item'
import React, { useState } from 'react';

export default function TimeLine(props) {
    const [isHide, setIsHide] = useState(false)

    return (
        <div className=" d-flex justify-content-center">
            <div className={"d-flex text-center tracking-status-intransit " + props.status}>
                <p className="tracking-status p-2"></p>
            </div>
            <div className="period-container">
                <div className="d-flex">
                    {!isHide ? (
                        <div className="tracking-list">
                            <h4 className="p-2">{props.title}</h4>
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
    )
}