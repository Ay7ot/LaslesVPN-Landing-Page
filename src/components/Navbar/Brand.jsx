import logo from '../../assets/laslesbrand.png'

function Brand() {
    return (  
        <div className="brand">
            <img src={logo} className="logo" />
            <h3 className='brandName'>Lasles<span>VPN</span></h3>
        </div>
    );
}

export default Brand;