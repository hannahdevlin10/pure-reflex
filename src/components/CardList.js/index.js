import React from "react";
import Card from "./Card";
import './style.css'

const CardList = ({ options }) => {
    return (
        <div className="row">
            {options.map((item) => (
                <Card
                    icon={item.icon}
                    cardWidth={item.cardWidth}
                    title={item.title}
                    content={item.content}
                    link={item.link} />
            ))}
        </div>
    )
}

export default CardList;