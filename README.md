# 🍏 애플 클론 코딩
<img width="1453" height="831" alt="image" src="https://github.com/user-attachments/assets/120026de-1f0f-4887-a5e2-a6fd14dd0556" /> <br>

📅 2026.01.01 ~ 2026.01.30

Apple 공식 홈페이지를 클론 코딩한 개인 프로젝트입니다.

실제 웹사이트의 레이아웃과 인터랙션을 구현하며 React 기초와 웹 개발 전반에 대한 이해도를 높였습니다.

---

# ⚙️ 기술적 구현

**(1) 동적 페이지 이동**

- onClick 이벤트로 버튼 클릭 시 페이지 전환
- window.location.href로 외부 링크 이동 구현
- Apple 공식 사이트 각 제품 페이지로 직접 연결

```jsx
<button 
  className="first-btn" 
  onClick={() => window.location.href = "https://www.apple.com/kr/iphone/"}
>
  더 알아보기
</button>
```

---

**(2) 반응형 레이아웃**

- Grid 시스템을 활용한 제품 카드 배치
- CSS 미디어 쿼리로 화면 크기별 레이아웃 최적화
- 상대 단위(%, vw, rem)와 절대 단위(px)의 적절한 조합

```jsx
<section className="product-grid">
  <div className="grid-item watch2">
    <h2>Watch</h2>
    <p>새로운 Black Unity 밴드.</p>
  </div>
  <div className="grid-item ipad-air">
    <h2>iPad Air</h2>
    <p>이제 막강한 성능의 M3 칩 탑재.</p>
  </div>
  {/* ... */}
</section>
```


---

# ‼️ 트러블 슈팅
**문제 상황**

- 제품 상세 페이지로 이동하는 버튼 클릭 시 외부 링크로 정상 이동
- 브라우저 뒤로가기 버튼으로 돌아왔을 때 스크롤 위치가 초기화되어 페이지 최상단으로 이동
- 사용자가 보던 섹션을 다시 찾아 스크롤해야 하는 불편함 발생
- 특히 하단 섹션을 보다가 이동했을 경우 다시 최상단부터 스크롤해야 하는 문제

**해결 방법**

- sessionStorage를 활용하여 스크롤 위치 저장
- scroll 이벤트 리스너로 실시간 스크롤 위치(window.scrollY) 저장
- pageshow 이벤트를 통해 뒤로가기(브라우저 캐시 복원) 감지
- 저장된 스크롤 위치로 window.scrollTo() 실행하여 이전 화면 복원

```jsx
jsxuseEffect(() => {
  // 저장된 스크롤 위치 복원
  const savedY = sessionStorage.getItem('scrollY');
  if (savedY) {
    window.scrollTo(0, Number(savedY));
  }

  // 스크롤 위치 실시간 저장
  const saveScroll = () => {
    sessionStorage.setItem('scrollY', window.scrollY);
  };

  // 뒤로가기 시 스크롤 복원
  const handlePageShow = (e) => {
    if (e.persisted) { // 브라우저 캐시에서 복원된 경우
      const y = sessionStorage.getItem('scrollY');
      if (y) window.scrollTo(0, Number(y));
    }
  };

  window.addEventListener('scroll', saveScroll);
  window.addEventListener('pageshow', handlePageShow);

  return () => {
    window.removeEventListener('scroll', saveScroll);
    window.removeEventListener('pageshow', handlePageShow);
  };
}, []);
```

---

# 👍🏻 느낀 점 및 배운 점
이번 프로젝트를 통해 실제 운영 중인 웹사이트의 구조를 분석하고 재현하며 웹 개발에 대한 전반적인 이해도를 높일 수 있었습니다.
특히 반응형 웹 디자인의 중요성을 체감했으며, 절대 단위와 상대 단위를 상황에 맞게 활용하는 방법을 배웠습니다.
sessionStorage를 활용한 스크롤 위치 저장 기능 구현을 통해 사용자 경험(UX) 개선의 중요성을 깨달았습니다.
Apple의 심플하면서도 세련된 디자인을 구현하며 CSS 레이아웃과 Grid 시스템에 대한 실력을 향상시킬 수 있었습니다.

---


# 🛠 기술 스택

<img height="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" /> 

---

# [▶ 시연 영상 확인하기](https://youtu.be/fkGPNOpm8QI)

---

# 🔗 배포 링크
[🌐 애플 클론 바로가기](https://appleclone-wheat.vercel.app) *(맥북 화면 기준  [2880 x 1864])*

