function GenInfo({ img, number, name }) {

    return ( 
        <div className="GenInfo">
            <img src={`../${img}`}/>
            <div className="gen--info">
                <h3>{number}</h3>
                <p>{name}</p>
            </div>
        </div>
     );
}

export default GenInfo;