import HeaderImg from "../../src/assets/lasles1.png"

const Header = () => {
    return (
        <>
            <div className='Header'>
                <div className='HeaderTalk'>
                    <h1>
                        Want anything to be easy with <span>LaslesVPN.</span>
                    </h1>
                    <p>
                        Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className="headerimg">
                    <img src={HeaderImg} />
                </div>
            </div>
        </>
        
    );
}

export default Header;
