# Weekly English Pattern Builder — CLAUDE.md

## 프로젝트 개요

영어 패턴 학습지를 만드는 정적 웹앱. `[]` 괄호 표기를 클릭 가능한 빈칸 박스(`<span class="blank-box">`)로 변환해 A4 포스터 형태로 출력/저장하는 도구.

- 실행: `node server.js` → `http://localhost:3000`
- 빌드 도구 없음 — 순수 Vanilla JS + CSS
- 외부 라이브러리: html2canvas 1.4.1, jsPDF 2.5.1, Google Fonts (Poppins + Inter)

---

## 핵심 아키텍처

### 빈칸 박스 변환 흐름
1. 사용자가 `[]`, `[ ]`, `[   ]` 입력 (공백 수로 크기 구분: space-1 ~ space-5-plus)
2. `processBlankBoxesWithHTML()` (core.js) → `<span class="blank-box space-N">` HTML 생성
3. `pattern.htmlContent` / `pattern.examplesHtmlContent` 에 styled HTML 캐시
4. `isComplexHTML()` 로 재처리 여부 판단 (기존 HTML이면 재사용)

### 렌더링 흐름
- `renderPatterns()` — 전체 DOM 재구성 (save/add/delete 시 호출)
- `renderPatterns()` 호출 시마다 `initTextEditor()` 를 `setTimeout(200ms)` 로 재초기화

### 텍스트 에디터
- `activeTextSelection` 전역 변수 — 현재 선택된 텍스트/빈칸 박스 추적
- `BASE_FONT_SIZE = 18` (px→em 변환 기준)
- 플로팅 툴바 (화면 하단 고정, glassmorphism 스타일)

---

## 파일 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 앱 진입점, DOM 구조 |
| `core.js` | 패턴 CRUD, 파일 저장(PDF/PNG), 날짜 처리 |
| `text-editor.js` | 텍스트 선택/스타일링, 빈칸 박스 클릭 처리 |
| `calendar.js` | 날짜 선택 달력 UI |
| `theme-system.js` | 테마 적용 (계절별/랜덤) |
| `server.js` | Node.js 정적 파일 서버 (포트 3000) |
| `variables.css` | CSS 디자인 토큰 (컬러, 쉐도우, 반경) |
| `blank-boxes.css` | 빈칸 박스 전용 스타일 |
| `text-editor.css` | 텍스트 에디터 툴바/팔레트/슬라이더 |
| `responsive.css` | 미디어 쿼리 (인쇄/태블릿/모바일) |

---

## 수정된 버그 목록

### core.js
- `escapeAttr()` 함수 추가 — `value="${pattern.pattern}"` XSS 방지 (HTML 속성 이스케이프)
- `sanitizeInput()` 제거 — 사용되지 않는 데드 코드
- `savePattern()` / `saveExamples()` — `activeTextSelection = null` 중복 제거

### text-editor.js
- `eventListenersAdded` / `dragSelectionAdded` 플래그 추가 — `renderPatterns()` 호출마다 이벤트 리스너가 중복 등록되던 문제 수정
- `getCurrentFontSize()` 빈칸 박스 분기 수정 — `px` 단위를 `em`으로 잘못 파싱하던 버그  
  수정 전: `.replace('em','')` (27px → 27 반환)  
  수정 후: `fontSize.includes('px') ? parseFloat(fontSize) / 18 : parseFloat(fontSize)` (27px → 1.5em)
- `applyStyleToSelection()` 동일한 단위 파싱 버그 수정 (동일 패턴)
- `resetTextStyle()` 노드 삽입 순서 수정 — `insertNode(container.lastChild)` 반복이 역순 삽입하던 버그 → `createDocumentFragment()` 로 교체

### blank-boxes.css
- `.blank-box[style*="font-size"] { font-size: inherit !important; }` 제거 — 인라인 폰트 크기를 덮어쓰던 충돌 규칙

### theme-system.js
- `body.classList.forEach()` 중 `remove()` 호출 → 반복 중 컬렉션 변경 버그  
  수정: `[...body.classList].forEach()`

### responsive.css
- `@media print, screen` → `@media print` — `screen` 이 모든 화면에 적용돼 캘린더 버튼이 항상 숨겨지던 버그

### patterns.css
- `.patterns-grid` 의 `max-height: calc(100% - 280px)` 제거, `min-height: 0` 추가  
  이유: 280px 하드코딩이 헤더/푸터 높이 변화 시 그리드를 잘라내는 문제

### buttons.css
- `@media (hover: none)` 추가 — 터치 기기에서 Del 버튼이 hover 없이도 표시되도록
- Google Fonts에 `Inter` 추가 ([index.html](index.html)) — `layout.css`/`buttons.css`의 `font-family: 'Inter'` 가 시스템 폰트로 폴백되던 문제

---

## 의도적 동작 (버그 아님)

- **PNG/PDF 저장 시 UI 버튼 미출력**: html2canvas 캡처 직전에 캘린더 버튼(`hide-for-export`)과 날짜 배지를 숨기고 포스터를 A4(794×1123px)로 고정한 뒤 캡처 — 저장된 이미지에 UI 버튼이 찍히지 않는 것이 정상. 캡처 후 원래 스타일로 복원됨.
- **패턴 최대 3개 제한**: A4 용지 레이아웃 기준

---

## 알려진 데드 코드 (미확인 제거 대상)

- `processBlankBoxes()` 래퍼 함수 (core.js:139) — `processBlankBoxesWithHTML()` 로 위임만 함
- `clearSelection()` 함수 (text-editor.js:939) — 호출 지점 미확인
