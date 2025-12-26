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

            <section className = "iPhone-Poster">
                    <h1 className = "iPhone">iPhone 17 Pro</h1>
                    <p className = "introduction-iphone">전방위 Pro.</p>
                <div className="btn-container">
                    <button className = "first-btn">더 알아보기</button>
                    <button className = "second-btn">구입하기</button>
                </div>
            </section>
            <img className = "Poster-Img" src = "/iPhone.png" />

            <br></br>

            <section className = "AirPods-Poster">
                    <h1 className = "AirPods">AirPods Pro 3</h1>
                    <p className='introduction-airpods'>세계 최고의 인이어 엑티브 노이즈 캔슬링.</p>
                <div className="btn-container">
                    <button className = "first-btn">더 알아보기</button>
                    <button className = "second-btn">구입하기</button>
                </div>
            </section>
            <img className = "Poster-Img" src = "/AirPods.png" />

            <br></br>

            <section className = "Watch-Poster">
                    <h1 className = "Watch">
                    WATCH 
                    <span> SERIES 11</span>
                    </h1>
                    <p className='introduction-watch'>새해의 결심을 꾸준한 습관으로. <br></br>운동 목표. 작심삼일은 이제 그만.</p>
                <div className="btn-container">
                    <button className = "first-btn">더 알아보기</button>
                    <button className = "second-btn">구입하기</button>
                </div>
            </section>
            <img className = "Watch-Img" src = "/Watch.png" />
        </>

        
    )
}

export default Main