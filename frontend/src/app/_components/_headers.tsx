import Link from "next/link";

const Header = () => {
    const navLinks = [
        {
            name: "Official site",
            link: "https://voicevox.hiroshiba.jp",
        }
    ]
    return (
        <header className="flex justify-between mx-16 my-2">
            <div>
                <h1 className="text-4xl text-emerald-300">VOICEAGE</h1>
            </div>
            <nav className="flex items-center">
                {navLinks.map((navLink, index) => {
                    return (
                        <Link className="hover:text-emerald-400 text-2xl" href={navLink.link} key={index}>{navLink.name}</Link>
                    );
                })}
            </nav>
        </header>
    )
}

export default Header;
