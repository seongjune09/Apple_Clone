import { useEffect } from 'react';
import '../styles/main.css';

function Main() {

  useEffect(() => {
    const savedY = sessionStorage.getItem('scrollY');
    if (savedY) {
      window.scrollTo(0, Number(savedY));
    }

    const saveScroll = () => {
      sessionStorage.setItem('scrollY', window.scrollY);
    };

    window.addEventListener('scroll', saveScroll);

    const handlePageShow = (e) => {
      if (e.persisted) {
        const y = sessionStorage.getItem('scrollY');
        if (y) window.scrollTo(0, Number(y));
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('scroll', saveScroll);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

      return (
        <>
            <div className = "Main-Div">
                <img
                    className="Main-Apple"
                    src="./Apple-Logo.svg"
                    onClick={() => window.location.reload()}
                />

                <div className = "Title-Container">
                    <a href="https://www.apple.com/kr-edu/store">스토어</a>
                    <a href="https://www.apple.com/kr/mac/">Mac</a>
                    <a href="https://www.apple.com/kr/ipad/">iPad</a>
                    <a href="https://www.apple.com/kr/iphone/">iPhone</a>
                    <a href="https://www.apple.com/kr/watch/">Watch</a>
                    <a href="https://www.apple.com/kr/apple-vision-pro/">Vision</a>
                    <a href="https://www.apple.com/kr/airpods/">AirPods</a>
                    <a href="https://www.apple.com/kr/tv-home/">TV 및 홈</a>
                    <a href="https://www.apple.com/kr/services/">엔터테인먼트</a>
                    <a href="https://www.apple.com/kr-edu/shop/accessories/all">액세서리</a>
                    <a href="https://support.apple.com/ko-kr">고객지원</a>
                    <img className = "Search-Img" src = "Search.svg" />
                    <img className = "Basket-Img" src = "Basket.svg" />
                </div>
            </div>
            <img className = "iPad-sale-Img" src = "/iPad-sale.png" />
            <section className = "iPad-sale-Poster">
                <div className="btn-container">
                    <button className = "second-btn" onClick={() => window.location.href = "https://www.apple.com/kr-edu/store"}>쇼핑하기</button>
                </div>
            </section>

            <br></br>

            <section className = "iPhone-Poster">
                    <h1 className = "iPhone">iPhone 17 Pro</h1>
                    <p className = "introduction-iphone">전방위 Pro.</p>
                <div className="btn-container">
                    <button className = "first-btn" onClick={() => window.location.href = "https://www.apple.com/kr/iphone/"}>더 알아보기</button>
                    <button className = "second-btn" onClick={() => window.location.href = "https://www.apple.com/kr/shop/buy-iphone/>"}>iPhone 쇼핑하기</button>
                </div>
            </section>
            <img className = "Poster-Img" src = "/iPhone.png" />

            <section className = "iPhone-Poster2">
                    <h1 className = "iPhone2">iPhone</h1>
                    <p className = "introduction-iphone2">최신 세대 iPhone을 만나보세요.</p>
                <div className="btn-container">
                    <button className = "first-btn" onClick={() => window.location.href = "https://www.apple.com/kr/iphone/"}>더 알아보기</button>
                    <button className = "second-btn" onClick={() => window.location.href = "https://www.apple.com/kr/shop/buy-iphone/>"}>iPhone 쇼핑하기</button>
                </div>
            </section>
            <img className = "Poster-Img" src = "/iPhone2.png" />

            <br></br>

            <section className = "AirPods-Poster">
                    <h1 className = "AirPods">AirPods Pro 3</h1>
                    <p className='introduction-airpods'>세계 최고의 인이어 엑티브 노이즈 캔슬링.</p>
                <div className="btn-container">
                    <button className = "first-btn" onClick={() => window.location.href = "https://www.apple.com/kr/airpods-pro/"}>더 알아보기</button>
                    <button className = "second-btn" onClick={() => window.location.href = "https://www.apple.com/kr/shop/buy-airpods/airpods-pro-3"}>구입하기</button>
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
                    <button className = "first-btn" onClick={() => window.location.href = "https://www.apple.com/kr/apple-watch-series-11/"}>더 알아보기</button>
                    <button className = "second-btn" onClick={() => window.location.href = "https://www.apple.com/kr/shop/buy-watch/apple-watch"}>구입하기</button>
                </div>
            </section>
            <img className = "Watch-Img" src = "/Watch.png" />


            <section className="product-grid">
                <div className="grid-item ipad-air">
                    <h2>iPad Air</h2>
                    <p>이제 막강한 성능의 M3 칩 탑재.</p>
                    <div className="btns">
                    <button className = "section1" onClick={() => window.location.href = "https://www.apple.com/kr/ipad-air/" }>더 알아보기</button>
                    <button className = "section2" onClick={() => window.location.href = "https://www.apple.com/kr-edu/shop/buy-ipad/ipad-air"}>구입하기</button>
                    </div>
                </div>

                <div className="grid-item macbook-air">
                    <h2>MacBook Air</h2>
                    <p>하늘빛 새 컬러.<br></br>M4 칩 탑재로 성능도 하늘 높이.</p>
                    <div className="btns">
                    <button className = "section1" onClick={() => window.location.href = "https://www.apple.com/kr/macbook-air/"}>더 알아보기</button>
                    <button className = "section2" onClick={() => window.location.href = "https://www.apple.com/kr-edu/shop/buy-mac/macbook-air"}>구입하기</button>
                    </div>
                </div>

                <div className="grid-item ipad">
                    <h2>iPad</h2>
                    <p>이제 A16 칩의 속도로.<br></br>2배 더 커진 기본 저장 용량까지.</p>
                    <div className="btns">
                    <button className = "section1" onClick={() => window.location.href = "https://www.apple.com/kr/ipad-11/"}>더 알아보기</button>
                    <button className = "section2" onClick={() => window.location.href = "https://www.apple.com/kr-edu/shop/buy-ipad/ipad"}>구입하기</button>
                    </div>
                </div>

                <div className="grid-item watch">
                    <h2>WATCH ULTRA 3</h2>
                    <p>손목 위의 야수.</p>
                    <div className="btns">
                    <button className = "section1" onClick={() => window.location.href = "https://www.apple.com/kr/apple-watch-ultra-3/"}>더 알아보기</button>
                    <button className = "section2" onClick={() => window.location.href = "https://www.apple.com/kr-edu/shop/buy-watch/apple-watch-ultra"}>구입하기</button>
                    </div>
                </div>
                <div className="grid-item AirPodsPro">
                    <h2>AirPods Pro 3</h2>
                    <p>세계 최고의 인이어<br></br>액티브 노이즈 캔슬링.</p>
                    <div className="btns">
                    <button className = "section1" onClick={() => window.location.href = "https://www.apple.com/kr/apple-watch-ultra-3/"}>더 알아보기</button>
                    <button className = "section2" onClick={() => window.location.href = "https://www.apple.com/kr-edu/shop/buy-watch/apple-watch-ultra"}>구입하기</button>
                    </div>
                </div>
                <div className="grid-item TradeIn">
                    <h2>Trade In</h2>
                    <p>iPhone 13 이상의 모델을 보상 판매하면<br></br>₩240,000-₩1,030,000<br></br>상당의 크레딧.</p>
                    <div className ="btns">
                    <button className = "section1" onClick={() => window.location.href = "https://www.apple.com/kr-edu/shop/trade-in"}>견적 확인하기</button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className ="footer-container">
                    <p className = "footer-text">
                        * 적격 구매자는 2026년 1월 6일부터 3월 11일까지 적격 구매 위치에서 적격 제품과 선택한 프로모션 제품을 함께 구매 시 프로모션 할인을 받을 수 있습니다. 
                        적격 구매자당 적격 제품별로 하나의 프로모션 제품만 선택 가능합니다. 이 혜택은 프로모션 기간 중 재고가 있는 동안에만 유효하며, Apple은 사전 공지 없이 프로모션 기간을 변경할 수 있습니다. 
                        추가 제한이 적용될 수 있습니다. 이 혜택에 적용되는 전체 이용 약관은 <a className="link" href="https://www.apple.com/kr/shop/back-to-school/terms-conditions">apple.com/kr/shop/back-to-school/terms-conditions</a>에서 확인하시기 바랍니다.
                        <br></br>
                        <br></br>
                        1. ₩1,020,000은 iPhone 16 Pro Max 1TB 모델의 보상 판매 금액으로, 보상 판매 서비스는 Apple의 보상 판매 파트너사를 통해 제공됩니다. Apple 및 Apple의 계열사는 고객과 파트너 간 계약의 당사자가 아닙니다. 보상 판매 견적액은 예상 금액일 뿐이며, 실제 보상 판매 금액이 예상 금액보다 낮을 수도 있습니다. 보상 판매 금액은 보상 판매 대상이 되는 제품의 상태, 연도, 모델, 그리고 보상 판매 대상이 되는 제품이 최초 판매된 국가/지역에 따라 달라집니다. 일부 기기는 보상 판매 대상이 아닙니다. 
                        기기를 보상 판매하기 위해서는 민법상 성년이어야 합니다. 보상 판매 금액은 적용 가능한 새 기기 구입 시 적용하거나 Apple Store Gift Card로 받을 수 있습니다. 새 Apple 기기 구매 시, 
                        현재 소유한 기기의 가치만큼 할인을 받을 수도 있습니다. 최종 확정 금액은 보상 판매 대상 기기를 수령한 후, 예상 금액 산정 시 제시한 기기의 설명과 일치하는지 비교 검수 후 정해집니다. 
                        부가세는 새로 구입한 기기의 총액을 바탕으로 부과됩니다. 일부 매장에서는 보상 판매를 제공하지 않으며, 매장 내 보상 판매와 온라인 보상 판매 프로그램 간 내용에 차이가 있을 수 있습니다. 
                        일부 매장은 추가 요구 사항이 있을 수 있습니다. Apple의 보상 판매 파트너는 보상 판매 거래를 거부, 취소하거나 보상 판매 수량을 제한할 권리를 보유합니다. 
                        적용 대상 기기의 보상 판매 및 재활용에 대한 자세한 내용은 Apple의 보상 판매 파트너사에서 확인할 수 있습니다. 규제 및 제한이 적용될 수 있습니다.
                        <br></br>
                        <br></br>
                        ‘활력 징후’ 앱은 오직 건강 지향을 위해 제공되는 것으로 의료 목적을 위한 것이 아닙니다.
                        <br></br>
                        <br></br>
                        Apple TV 이용을 위해서는 구독이 필요합니다.
                        <br></br>
                        <br></br>
                        기능은 변경될 수 있습니다. 일부 기능, 애플리케이션 및 서비스를 이용할 수 없는 국가나 언어도 있습니다.
                    </p>


                    <div className="nav">
                        <div className="nav-column">
                            <h4>쇼핑 및 알아보기</h4>
                            <a href="#">스토어</a>
                            <a href="#">Mac</a>
                            <a href="#">iPad</a>
                            <a href="#">iPhone</a>
                            <a href="#">Watch</a>
                            <a href="#">Vision</a>
                            <a href="#">AirPods</a>
                            <a href="#">TV 및 홈</a>
                            <a href="#">AirTag</a>
                            <a href="#">액세서리</a>
                        </div>

                        <div className="nav-column">
                            <h4>계정</h4>
                            <a href="#">Apple 계정 관리</a>
                            <a href="#">Apple Store 계정</a>
                            <a href="#">iCloud.com</a>

                            <h4>엔터테인먼트</h4>
                            <a href="#">Apple One</a>
                            <a href="#">Apple TV+</a>
                            <a href="#">Apple Music</a>
                            <a href="#">Apple Arcade</a>
                            <a href="#">Apple Podcasts</a>
                            <a href="#">Apple Books</a>
                        </div>

                        <div className="nav-column">
                            <h4>Apple Store</h4>
                            <a href="#">매장 찾기</a>
                            <a href="#">Genius Bar</a>
                            <a href="#">Today at Apple</a>
                            <a href="#">Apple 캠프</a>
                            <a href="#">Apple Store 앱</a>
                            <a href="#">리퍼비시</a>
                            <a href="#">Apple Trade In</a>
                            <a href="#">할부 방식</a>
                            <a href="#">주문 상태</a>
                            <a href="#">쇼핑 도움말</a>
                        </div>

                        <div className="nav-column">
                            <h4>비즈니스</h4>
                            <a href="#">Apple과 비즈니스</a>
                            <a href="#">비즈니스를 위한 쇼핑</a>

                            <h4>교육</h4>
                            <a href="#">Apple과 교육</a>
                            <a href="#">대학 생활을 위한 쇼핑</a>
                        </div>

                        <div className="nav-column">
                            <h4>Apple의 가치관</h4>
                            <a href="#">손쉬운 사용</a>
                            <a href="#">환경</a>
                            <a href="#">개인정보 보호</a>
                            <a href="#">공급망 혁신</a>

                            <h4>Apple 정보</h4>
                            <a href="#">Newsroom</a>
                            <a href="#">Apple 리더십</a>
                            <a href="#">채용 안내</a>
                            <a href="#">윤리 및 규정 준수</a>
                            <a href="#">이벤트</a>
                            <a href="#">Apple 연락처</a>
                        </div>
                    </div>

                    <p className = "footer-text">
                        다양한 쇼핑 방법:
                        <a className='a-tag'>Apple Store를 방문</a>하거나,
                        <a className='a-tag'>리셀러</a>를 찾아보시나, 
                        <a className='a-tag'>080-330-8877</a>번으로 전화하세요.
                    </p>

                    <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <div className="footer-bottom-top">
                            <p>Copyright © 2026 Apple Inc. 모든 권리 보유.</p>

                            <div className="footer-links">
                            <a href="https://www.apple.com/kr/legal/privacy/">개인정보 처리방침</a>
                            <span>|</span>
                            <a href="https://www.apple.com/kr/legal/internet-services/terms/site.html">웹 사이트 이용 약관</a>
                            <span>|</span>
                            <a href="https://www.apple.com/kr-edu/shop/browse/open/salespolicies">판매 및 환불</a>
                            <span>|</span>
                            <a href="https://www.apple.com/kr/legal/">법적 고지</a>
                            <span>|</span>
                            <a href="https://www.apple.com/kr/sitemap/">사이트 맵</a>
                            </div>
                        </div>

                        <div className="footer-bottom-under">
                            <p>
                            애플코리아 유한회사 | 대표이사: Mark Lee(마크리) | 주소: 서울특별시 강남구 영동대로 517 
                            | 전화: 080-333-4000 | <a href ="https://support.apple.com/ko-kr" className='footer-tag'>https://support.apple.com/ko-kr</a> | 사업자등록번호: 120-81-84429 | 
                            <br></br>
                            통신판매업신고번호: 제2011-서울강남-00810호 | 호스팅 서비스 제공: Apple Inc. | <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1208184429" className='footer-tag'>사업자정보</a></p>
                        </div>
                    </div>

                    <div className="footer-bottom-right">
                        <p>대한민국</p>
                    </div>
                    </div>
                        


                </div>
            </footer>

        </>

        
    )
}

export default Main