import '../styles/main.css';

function Main() {
    return (
        <>
            <div className = "Main-Div">
                <img className = "Main-Apple" src = "./Apple.svg"></img>

                <div className = "Title-Container">
                    <a href="#">스토어</a>
                    <a href="#">Mac</a>
                    <a href="#">iPad</a>
                    <a href="#">iPhone</a>
                    <a href="#">Watch</a>
                    <a href="#">AirPods</a>
                    <a href="#">TV 및 홈</a>
                    <a href="#">엔터테인먼트</a>
                    <a href="#">액세서리</a>
                    <a href="#">고객지원</a>
                    <img className = "Search-Img" src = "Search.svg" />
                    <img className = "Basket-Img" src = "Basket.svg" />
                </div>

            </div>
        </>
    )
}

export default Main