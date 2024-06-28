"use client";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export function Card({ data }: { data: { name: string } }) {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  md:w-[20rem] sm:w-[30rem] h-full rounded-xl p-6 border ">
                <CardItem
                    translateZ="50"
                    className="text-2xl font-bold mx-auto text-white"
                >
                    {data.name}
                </CardItem>
                {/* <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Hover over this card to unleash the power of CSS perspective
                </CardItem> */}
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src={
                            data?.image
                                ? data?.image
                                : `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
                        }
                        height="100"
                        width="100"
                        className="rounded-xl mx-auto group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                {/* <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem>
                </div> */}
            </CardBody>
        </CardContainer>
    );
}

export default Card;
