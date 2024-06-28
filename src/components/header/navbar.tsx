import { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { Menu } from "../ui/navbar-menu";

function Navbar({ className }: { className?: string }) {
    // const [active, setActive] = useState<string | null>(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed text-white top-1/2 inset-x-0 max-w-2xl mx-auto z-50 navbar",
                className
            )}
        >
            {scrollY > 0 && (
                <Menu>
                    <div className="flex gap-3 justify-evenly">
                        <div>
                            <a href="#about_section">About</a>
                        </div>
                        <div>
                            <a href="projects">Projects</a>
                        </div>
                        <div>
                            <a href="skills">Skills</a>
                        </div>
                        <div>
                            <a href="contact">Contact</a>
                        </div>
                    </div>
                    {/* <MenuItem setActive={setActive} active={active} item="About">
                    <div className="flex flex-col space-y-4 text-sm text-white">
                        <HoveredLink href="/web-dev">Web Development</HoveredLink>
                        <HoveredLink href="/interface-design">Interface Design</HoveredLink>
                        <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                        <HoveredLink href="/branding">Branding</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Projects">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4 ">
                    <ProductItem
                        title="Algochurn"
                        href="https://algochurn.com"
                        src="https://assets.aceternity.com/demos/algochurn.webp"
                        description="Prepare for tech interviews like never before."
                    />
                    <ProductItem
                        title="Tailwind Master Kit"
                        href="https://tailwindmasterkit.com"
                        src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                        description="Production ready Tailwind css components for your next project"
                    />
                    <ProductItem
                        title="Moonbeam"
                        href="https://gomoonbeam.com"
                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                        description="Never write from scratch again. Go from idea to blog in minutes."
                    />
                    <ProductItem
                        title="Rogue"
                        href="https://userogue.com"
                        src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                        description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                    />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                    <HoveredLink href="/hobby">Hobby</HoveredLink>
                    <HoveredLink href="/individual">Individual</HoveredLink>
                    <HoveredLink href="/team">Team</HoveredLink>
                    <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem> */}
                </Menu>
            )}
        </div>
    );
}

export default Navbar;
