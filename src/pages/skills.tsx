import Card from "../components/Card/card";
import logo from "../assets/react.svg";
import javascript from "../assets/javascript_logo.webp";
import typescript from "../assets/typescript_logo.png";
import html from "../assets/html.webp";
import node from "../assets/node.webp";
import mysql from "../assets/mysql.png";
import redux from "../assets/redux.png";
import css from "../assets/css.png";
import mongo from "../assets/mongo.webp";

export const Skills = () => {
    const data = [
        {
            name: "React js",
            image: logo
        },
        {
            name: "Javascript",
            image: javascript
        },
        {
            name: "Typescript",
            image: typescript
        },
        {
            name: "HTML",
            image: html
        },
        {
            name: "Node js",
            image: node
        },
        {
            name: "MySQL",
            image: mysql
        },
        {
            name: "Redux",
            image: redux
        },
        {
            name: "CSS",
            image: css
        },
        {
            name: "Mongo DB",
            image: mongo
        }
    ];

    return (
        <div className="bg-black">
            <div className="md:w-4/5 mx-auto">
                <p className="danfo text-6xl text-center">SKILLS</p>
                <div className="grid grid-cols-4 gap-5 mt-20 bg-black">
                    {data.length > 0 &&
                        data.map((item) => {
                            return (
                                <div className="col-span-1">
                                    <Card data={item} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};
