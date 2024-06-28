


const Header = () => {

    return(
        <div className=" mt-3 text-white z-[10] w-4/5 mx-auto flex relative justify-between">
            <p className="text-white text-3xl lobster cursor-pointer" onClick={() => console.log("HELLO WORLD")}>Anugrah Bhatt</p>
            <div className="icons flex gap-3">
                <p className="poppins-light cursor-pointer text-xl ">
                    About
                </p>
                <p className="poppins-light cursor-pointer text-xl">
                    Projects
                </p>
                <p className="poppins-light cursor-pointer text-xl ">
                    Skills
                </p>
                <p className="poppins-light cursor-pointer text-xl">
                    Contact
                </p>
            </div>
        </div>
    )
}

export default Header;