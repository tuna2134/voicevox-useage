import Link from "next/link";

const Header = () => {
    const navLinks = [
        {
            name: "Official",
            link: "https://voicevox.hiroshiba.jp",
        }
    ]
    return (
        <header className="flex justify-between">
            <div>
                <h1 className="text-4xl">VOICEAGE</h1>
            </div>
            <nav>
                {navLinks.map((navLink, index) => {
                    return (
                        <Link className="text-emerald-400" href={navLink.link} key={index}>navLink.name</Link>
                    );
                })}
            </nav>
        </header>
    )
}

export default Header;
