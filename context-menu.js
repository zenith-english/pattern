// context-menu.js — 커스텀 우클릭 메뉴 & 단축키 보안

(function () {
    let menuEl = null;

    /* ── 메뉴 제거 ── */
    function removeMenu() {
        if (menuEl) { menuEl.remove(); menuEl = null; }
    }

    /* ── 메뉴 표시 ── */
    function showContextMenu(x, y, items) {
        removeMenu();
        if (!items.length) return;

        menuEl = document.createElement('div');
        menuEl.className = 'custom-context-menu';

        items.forEach(function (item) {
            if (item.type === 'separator') {
                const sep = document.createElement('div');
                sep.className = 'context-menu-separator';
                menuEl.appendChild(sep);
                return;
            }
            const el = document.createElement('div');
            el.className = 'context-menu-item' + (item.danger ? ' danger' : '');
            el.innerHTML =
                '<span class="context-menu-icon">' + item.icon + '</span>' +
                '<span class="context-menu-label">' + item.label + '</span>';

            el.addEventListener('mousedown', function (e) {
                e.preventDefault();
                e.stopPropagation();
                removeMenu();
                item.action();
            });
            menuEl.appendChild(el);
        });

        document.body.appendChild(menuEl);

        // viewport 경계 안으로 위치 보정
        const rect = menuEl.getBoundingClientRect();
        let left = x;
        let top  = y;
        if (left + rect.width  > window.innerWidth  - 8) left = window.innerWidth  - rect.width  - 8;
        if (top  + rect.height > window.innerHeight - 8) top  = window.innerHeight - rect.height - 8;
        menuEl.style.left = Math.max(8, left) + 'px';
        menuEl.style.top  = Math.max(8, top)  + 'px';
    }

    /* ── 우클릭 가로채기 ── */
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();

        const target      = e.target;
        const patternCard = target.closest('.pattern-card');
        const items       = [];

        if (patternCard) {
            const patId = parseInt(patternCard.id.replace('pattern-', ''), 10);

            // 패턴 편집
            items.push({
                icon: '✏️', label: '패턴 편집',
                action: function () {
                    if (typeof editPattern === 'function') editPattern(patId);
                }
            });

            // 새 패턴 추가 (3개 미만일 때만)
            if (typeof patterns !== 'undefined' && patterns.length < 3) {
                items.push({ type: 'separator' });
                items.push({
                    icon: '➕', label: '새 패턴 추가',
                    action: function () {
                        if (typeof addPattern === 'function') addPattern();
                    }
                });
            }

            items.push({ type: 'separator' });

            // 패턴 삭제
            items.push({
                icon: '🗑️', label: '패턴 삭제', danger: true,
                action: function () {
                    if (typeof deletePattern === 'function') deletePattern(patId);
                }
            });

        } else {
            // 포스터 빈 영역 우클릭
            if (typeof patterns !== 'undefined' && patterns.length < 3) {
                items.push({
                    icon: '➕', label: '새 패턴 추가',
                    action: function () {
                        if (typeof addPattern === 'function') addPattern();
                    }
                });
                items.push({ type: 'separator' });
            }
        }

        // 공통 항목
        items.push({
            icon: '💾', label: '저장하기 (PDF / PNG)',
            action: function () {
                if (typeof showSaveOptions === 'function') showSaveOptions();
            }
        });

        items.push({
            icon: '📋', label: (typeof examplesVisible !== 'undefined' && examplesVisible) ? '예시 숨기기' : '예시 보이기',
            action: function () {
                if (typeof toggleExamples === 'function') toggleExamples();
            }
        });

        items.push({
            icon: '🎨', label: '테마 변경',
            action: function () {
                const sel = document.getElementById('theme-selector');
                if (sel) { sel.focus(); sel.click(); }
            }
        });

        showContextMenu(e.clientX, e.clientY, items);
    });

    /* ── 외부 클릭 / 스크롤 시 메뉴 닫기 ── */
    document.addEventListener('mousedown', function (e) {
        if (menuEl && !menuEl.contains(e.target)) removeMenu();
    });
    document.addEventListener('scroll', removeMenu, true);

    /* ── 키보드 단축키 보안 ── */
    document.addEventListener('keydown', function (e) {
        // ESC → 메뉴 닫기
        if (e.key === 'Escape') { removeMenu(); return; }

        const ctrl = e.ctrlKey || e.metaKey;
        const key  = e.key.toLowerCase();

        // Ctrl+U : 소스 보기 차단
        if (ctrl && key === 'u') {
            e.preventDefault();
        }

        // Ctrl+S : 브라우저 저장 → 앱 저장 다이얼로그로 전환
        if (ctrl && key === 's') {
            e.preventDefault();
            if (typeof showSaveOptions === 'function') showSaveOptions();
        }

        // Ctrl+P : 브라우저 인쇄 → 앱 저장 다이얼로그로 전환
        if (ctrl && key === 'p') {
            e.preventDefault();
            if (typeof showSaveOptions === 'function') showSaveOptions();
        }
    });
})();
