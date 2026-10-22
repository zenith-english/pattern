// theme-system.js - Enhanced Theme System with Dynamic Backgrounds

// 테마 데이터 정의 (배경 스타일 포함)
const themes = {
    'default': {
        name: 'Default Purple',
        category: 'Default',
        description: 'Classic purple theme',
        colors: {
            primary: '#6366F1',
            surface: '#F8FAFC',
            accent: '#F59E0B'
        },
        backgroundStyle: 'elegant'
    },
    
    // Spring Themes
    'spring-blossom': {
        name: 'Spring Blossom',
        category: 'Spring',
        description: 'Cherry blossom pink with fresh green',
        colors: {
            primary: '#FFB6C1',
            surface: '#FFE4E6',
            accent: '#98FB98'
        },
        backgroundStyle: 'floral'
    },
    'spring-garden': {
        name: 'Spring Garden',
        category: 'Spring',
        description: 'Fresh garden greens',
        colors: {
            primary: '#90EE90',
            surface: '#F0FFF0',
            accent: '#FFE4B5'
        },
        backgroundStyle: 'nature'
    },
    'spring-sky': {
        name: 'Spring Sky',
        category: 'Spring',
        description: 'Clear blue sky with soft yellow',
        colors: {
            primary: '#87CEEB',
            surface: '#F0F8FF',
            accent: '#FFFFE0'
        },
        backgroundStyle: 'sky'
    },
    
    // Summer Themes
    'summer-ocean': {
        name: 'Summer Ocean',
        category: 'Summer',
        description: 'Turquoise ocean waves',
        colors: {
            primary: '#40E0D0',
            surface: '#E0FFFF',
            accent: '#FFF8DC'
        },
        backgroundStyle: 'ocean'
    },
    'summer-sunset': {
        name: 'Summer Sunset',
        category: 'Summer',
        description: 'Warm coral sunset',
        colors: {
            primary: '#FFA07A',
            surface: '#FFF5EE',
            accent: '#F0E68C'
        },
        backgroundStyle: 'sunset'
    },
    'summer-tropical': {
        name: 'Summer Tropical',
        category: 'Summer',
        description: 'Tropical paradise vibes',
        colors: {
            primary: '#20B2AA',
            surface: '#F0FFFF',
            accent: '#FFEFD5'
        },
        backgroundStyle: 'tropical'
    },
    
    // Autumn Themes
    'autumn-leaves': {
        name: 'Autumn Leaves',
        category: 'Autumn',
        description: 'Golden autumn leaves',
        colors: {
            primary: '#DEB887',
            surface: '#FDF5E6',
            accent: '#F4A460'
        },
        backgroundStyle: 'leaves'
    },
    'autumn-harvest': {
        name: 'Autumn Harvest',
        category: 'Autumn',
        description: 'Rich harvest colors',
        colors: {
            primary: '#CD853F',
            surface: '#FFF8DC',
            accent: '#FFE4B5'
        },
        backgroundStyle: 'harvest'
    },
    'autumn-golden': {
        name: 'Autumn Golden',
        category: 'Autumn',
        description: 'Golden hour warmth',
        colors: {
            primary: '#DAA520',
            surface: '#FFFAF0',
            accent: '#F5DEB3'
        },
        backgroundStyle: 'golden'
    },
    
    // Winter Themes
    'winter-snow': {
        name: 'Winter Snow',
        category: 'Winter',
        description: 'Soft winter snow',
        colors: {
            primary: '#B0E0E6',
            surface: '#F8F8FF',
            accent: '#E6E6FA'
        },
        backgroundStyle: 'snow'
    },
    'winter-frost': {
        name: 'Winter Frost',
        category: 'Winter',
        description: 'Crystalline frost',
        colors: {
            primary: '#AFEEEE',
            surface: '#F0FFFF',
            accent: '#F5F5DC'
        },
        backgroundStyle: 'frost'
    },
    'winter-crystal': {
        name: 'Winter Crystal',
        category: 'Winter',
        description: 'Ice crystal blue',
        colors: {
            primary: '#ADD8E6',
            surface: '#F0F8FF',
            accent: '#E6E6FA'
        },
        backgroundStyle: 'crystal'
    },
    
    // Special Themes
    'rainbow-pastel': {
        name: 'Rainbow Pastel',
        category: 'Special',
        description: 'Soft rainbow colors',
        colors: {
            primary: '#FFB3BA',
            surface: '#FFDFBA',
            accent: '#FFFFBA'
        },
        backgroundStyle: 'rainbow'
    },
    'lavender-dreams': {
        name: 'Lavender Dreams',
        category: 'Special',
        description: 'Dreamy lavender fields',
        colors: {
            primary: '#E6E6FA',
            surface: '#F8F8FF',
            accent: '#DDA0DD'
        },
        backgroundStyle: 'lavender'
    },
    'mint-fresh': {
        name: 'Mint Fresh',
        category: 'Special',
        description: 'Cool mint freshness',
        colors: {
            primary: '#98FB98',
            surface: '#F0FFF0',
            accent: '#AFEEEE'
        },
        backgroundStyle: 'mint'
    },
    'peach-cream': {
        name: 'Peach Cream',
        category: 'Special',
        description: 'Creamy peach delight',
        colors: {
            primary: '#FFEAA7',
            surface: '#FFF5EE',
            accent: '#FFE4E1'
        },
        backgroundStyle: 'peach'
    },
    'berry-blush': {
        name: 'Berry Blush',
        category: 'Special',
        description: 'Sweet berry blush',
        colors: {
            primary: '#FFB6C1',
            surface: '#FFF0F5',
            accent: '#F0E68C'
        },
        backgroundStyle: 'berry'
    },

    // Korean Holiday Themes
    'samiljeol': {
        name: '삼일절 (3·1절)',
        category: 'Korean Holiday',
        description: '대한독립만세! 태극기 빨강과 파랑',
        colors: {
            primary: '#CD2E3A',
            surface: '#FFF0F0',
            accent: '#003478'
        },
        backgroundStyle: 'patriotic'
    },
    'gwangbokjeol': {
        name: '광복절 (8·15)',
        category: 'Korean Holiday',
        description: '대한민국 광복 — 태극기 파랑과 빨강',
        colors: {
            primary: '#003478',
            surface: '#EEF3FF',
            accent: '#CD2E3A'
        },
        backgroundStyle: 'liberation'
    },
    'hangulnal': {
        name: '한글날 (10·9)',
        category: 'Korean Holiday',
        description: '세종대왕의 한글 — 전통 먹빛과 금빛',
        colors: {
            primary: '#1B4B8A',
            surface: '#FFF9EC',
            accent: '#C8A040'
        },
        backgroundStyle: 'hangeul'
    },

    'chuseok': {
        name: '추석 (한가위)',
        category: 'Korean Holiday',
        description: '풍성한 한가위 — 황금 달빛과 따뜻한 수확',
        colors: {
            primary: '#C8860A',
            surface: '#FFF8E7',
            accent: '#795548'
        },
        backgroundStyle: 'chuseok'
    },
    'childrenday': {
        name: '어린이날 (5·5)',
        category: 'Korean Holiday',
        description: '밝고 즐거운 어린이날 — 알록달록 오렌지와 초록',
        colors: {
            primary: '#FF5722',
            surface: '#FFF9F0',
            accent: '#4CAF50'
        },
        backgroundStyle: 'children'
    },
    'parentsday': {
        name: '어버이날 (5·8)',
        category: 'Korean Holiday',
        description: '감사한 어버이날 — 카네이션 핑크',
        colors: {
            primary: '#E91E63',
            surface: '#FCE4EC',
            accent: '#FF8F00'
        },
        backgroundStyle: 'parents'
    },
    'teachersday': {
        name: '스승의날 (5·15)',
        category: 'Korean Holiday',
        description: '존경하는 스승의날 — 카네이션 빨강과 지성의 파랑',
        colors: {
            primary: '#B71C1C',
            surface: '#FFF9C4',
            accent: '#1565C0'
        },
        backgroundStyle: 'teacher'
    },

    // Holiday Themes
    'halloween': {
        name: '할로윈 (Oct 31)',
        category: 'Holiday',
        description: '으스스한 할로윈 — 호박 오렌지와 보라',
        colors: {
            primary: '#F97316',
            surface: '#FFF3E0',
            accent: '#7C3AED'
        },
        backgroundStyle: 'halloween'
    },
    'christmas': {
        name: '크리스마스 (Dec 25)',
        category: 'Holiday',
        description: 'Merry Christmas — 빨강과 초록',
        colors: {
            primary: '#C41E3A',
            surface: '#F0FFF4',
            accent: '#166534'
        },
        backgroundStyle: 'christmas'
    }
};

// 현재 활성 테마
let currentTheme = 'default';

// 배경 패턴 투명도 (기본 테마 / 색상 테마 — 출력물에 색감이 보이도록 테마는 더 진하게)
const DEFAULT_BG_OPACITY = '0.06';
const THEME_BG_OPACITY = '0.12';

// 월별 기념일 테마 (계절 테마 버튼에 함께 포함)
const HOLIDAY_THEMES_BY_MONTH = {
    10: ['halloween'],
    12: ['christmas']
};

// 테마 시스템 초기화
function initThemeSystem() {
    createThemeSelector();

    // 셀렉터 변경 리스너 — 한 번만 등록 (createThemeSelector 재호출 시 중복 방지)
    const selector = document.getElementById('theme-selector');
    if (selector) {
        selector.addEventListener('change', function() {
            if (this.value) {
                applyTheme(this.value);
            }
        });
    }

    updateThemePreview();
    addBackgroundAnimations();
}

// 테마 셀렉터 생성
function createThemeSelector() {
    const selector = document.getElementById('theme-selector');
    if (!selector) return;
    
    // 기본 옵션 추가
    selector.innerHTML = '<option value="">Choose a theme...</option>';
    
    // 카테고리별 그룹화
    const categories = {};
    Object.entries(themes).forEach(([key, theme]) => {
        if (!categories[theme.category]) {
            categories[theme.category] = [];
        }
        categories[theme.category].push({ key, theme });
    });
    
    // 옵션 그룹별로 추가
    Object.entries(categories).forEach(([category, themeList]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = category;
        
        themeList.forEach(({ key, theme }) => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = theme.name;
            optgroup.appendChild(option);
        });
        
        selector.appendChild(optgroup);
    });

    // 현재 테마 선택 상태 유지
    selector.value = currentTheme === 'default' ? '' : currentTheme;
}

// 테마 적용 함수 (강화된 배경 효과 포함)
function applyTheme(themeKey) {
    if (!themes[themeKey]) return;
    
    currentTheme = themeKey;
    const theme = themes[themeKey];
    const body = document.body;
    const bgPattern = document.querySelector('.bg-pattern');
    
    // 기존 테마 클래스 제거 (스냅샷 후 삭제 — 순회 중 변경 방지)
    [...body.classList].forEach(cls => {
        if (cls.startsWith('theme-')) {
            body.classList.remove(cls);
        }
    });
    
    // 새 테마 클래스 추가 (default 테마는 클래스 없음)
    if (themeKey !== 'default') {
        body.classList.add(`theme-${themeKey}`);
    }

    // 로고 SVG 그라디언트를 테마 색상으로 업데이트
    const logoGradient = document.getElementById('logoGradient');
    if (logoGradient && theme.colors) {
        const stops = logoGradient.querySelectorAll('stop');
        if (stops[0]) stops[0].style.stopColor = theme.colors.primary;
        if (stops[1]) stops[1].style.stopColor = theme.colors.accent;
    }
    
    // 배경색은 theme-system.css 의 CSS 변수(--body-bg / --container-bg)를 단일 소스로 사용
    const rootStyle = getComputedStyle(body);
    const bgColor = rootStyle.getPropertyValue('--body-bg').trim() || '#F1F5F9';
    const containerBg = rootStyle.getPropertyValue('--container-bg').trim() || 'white';
    
    body.style.backgroundColor = bgColor;
    
    // 포스터 컨테이너 배경색도 강제 설정 (다른 규칙에 덮이지 않도록)
    const container = document.querySelector('.container');
    if (container) {
        container.style.setProperty('background-color', containerBg, 'important');
    }
    
    // 배경 애니메이션 효과 추가
    if (bgPattern) {
        // 배경 전환 애니메이션 (0 → 테마별 목표 투명도로 페이드인)
        const targetOpacity = themeKey === 'default' ? DEFAULT_BG_OPACITY : THEME_BG_OPACITY;
        bgPattern.style.opacity = '0';
        bgPattern.style.transform = 'scale(1.05)';
        
        setTimeout(() => {
            bgPattern.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            bgPattern.style.opacity = targetOpacity;
            bgPattern.style.transform = 'scale(1)';
            
            // 특별한 테마별 효과
            applySpecialThemeEffects(themeKey, bgPattern);
        }, 100);
    }
    
    // 테마 프리뷰 업데이트
    updateThemePreview();
    
    console.log(`테마 적용됨: ${theme.name} (${theme.backgroundStyle} style)`);
}

// 특별한 테마별 효과 적용
function applySpecialThemeEffects(themeKey, bgPattern) {
    // 모든 특수 효과 클래스 제거
    bgPattern.classList.remove('rainbow-animated', 'seasonal-breeze', 'sparkle-effect');

    switch(themeKey) {
        case 'rainbow-pastel':
            bgPattern.classList.add('rainbow-animated');
            break;
        case 'spring-blossom':
        case 'spring-garden':
        case 'spring-sky':
            bgPattern.classList.add('seasonal-breeze');
            break;
        case 'winter-snow':
        case 'winter-frost':
        case 'winter-crystal':
            bgPattern.classList.add('sparkle-effect');
            break;
    }
}

// 배경 애니메이션 효과 추가
function addBackgroundAnimations() {
    // 동적 스타일 추가
    if (!document.getElementById('theme-animations')) {
        const style = document.createElement('style');
        style.id = 'theme-animations';
        style.textContent = `
            .rainbow-animated {
                animation: rainbow-float 8s ease-in-out infinite alternate !important;
            }
            
            .seasonal-breeze {
                animation: gentle-breeze 6s ease-in-out infinite alternate;
            }
            
            .sparkle-effect {
                animation: sparkle-shimmer 4s ease-in-out infinite alternate;
            }
            
            @keyframes gentle-breeze {
                0% { transform: translateX(0) translateY(0) rotate(0deg); }
                25% { transform: translateX(3px) translateY(-2px) rotate(0.5deg); }
                50% { transform: translateX(0) translateY(-3px) rotate(0deg); }
                75% { transform: translateX(-2px) translateY(-1px) rotate(-0.5deg); }
                100% { transform: translateX(0) translateY(0) rotate(0deg); }
            }
            
            @keyframes sparkle-shimmer {
                0% { opacity: ${THEME_BG_OPACITY}; transform: scale(1); }
                50% { opacity: 0.16; transform: scale(1.02); }
                100% { opacity: ${THEME_BG_OPACITY}; transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// 랜덤 테마 적용 (개선된 애니메이션 포함)
function applyRandomTheme() {
    const themeKeys = Object.keys(themes);
    // 현재 테마 제외
    const availableThemes = themeKeys.filter(key => key !== currentTheme);
    const randomKey = availableThemes[Math.floor(Math.random() * availableThemes.length)];
    
    // 셀렉터 값 업데이트
    const selector = document.getElementById('theme-selector');
    if (selector) {
        selector.value = randomKey;
    }
    
    // 랜덤 테마 적용 전 특별한 효과
    const container = document.querySelector('.container');
    if (container) {
        container.style.transform = 'scale(0.98) rotate(1deg)';
        container.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            applyTheme(randomKey);
            container.style.transform = 'scale(1) rotate(0deg)';
        }, 150);
    } else {
        applyTheme(randomKey);
    }
    
    // 랜덤 테마 적용 알림
    const theme = themes[randomKey];
    showThemeNotification(`🎨 ${theme.name} 테마가 적용되었습니다!`);
}

// 계절별 랜덤 테마 (강화된 계절감)
function applySeasonalTheme() {
    const currentMonth = new Date().getMonth() + 1; // 1-12
    let seasonalThemes = [];
    let seasonName = '';
    
    if (currentMonth >= 3 && currentMonth <= 5) {
        // 봄 (3-5월)
        seasonalThemes = Object.keys(themes).filter(key => 
            themes[key].category === 'Spring'
        );
        seasonName = '봄';
    } else if (currentMonth >= 6 && currentMonth <= 8) {
        // 여름 (6-8월)
        seasonalThemes = Object.keys(themes).filter(key => 
            themes[key].category === 'Summer'
        );
        seasonName = '여름';
    } else if (currentMonth >= 9 && currentMonth <= 11) {
        // 가을 (9-11월)
        seasonalThemes = Object.keys(themes).filter(key => 
            themes[key].category === 'Autumn'
        );
        seasonName = '가을';
    } else {
        // 겨울 (12, 1, 2월)
        seasonalThemes = Object.keys(themes).filter(key => 
            themes[key].category === 'Winter'
        );
        seasonName = '겨울';
    }
    
    // 이달의 기념일 테마 추가 (10월 할로윈, 12월 크리스마스)
    const holidayThemes = HOLIDAY_THEMES_BY_MONTH[currentMonth] || [];
    seasonalThemes.push(...holidayThemes.filter(key => themes[key]));

    // 계절 테마가 없으면 모든 테마에서 선택
    if (seasonalThemes.length === 0) {
        seasonalThemes = Object.keys(themes);
        seasonName = '특별한';
    }
    
    // 현재 테마 제외하고 랜덤 선택
    const availableThemes = seasonalThemes.filter(key => key !== currentTheme);
    if (availableThemes.length === 0) {
        availableThemes.push(...seasonalThemes);
    }
    
    const randomKey = availableThemes[Math.floor(Math.random() * availableThemes.length)];
    
    // 셀렉터 값 업데이트
    const selector = document.getElementById('theme-selector');
    if (selector) {
        selector.value = randomKey;
    }
    
    // 계절별 테마 적용 전 특별한 효과
    const bgPattern = document.querySelector('.bg-pattern');
    if (bgPattern) {
        bgPattern.style.filter = 'blur(2px)';
        bgPattern.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
            applyTheme(randomKey);
            bgPattern.style.filter = 'blur(0)';
        }, 200);
    } else {
        applyTheme(randomKey);
    }
    
    const theme = themes[randomKey];
    showThemeNotification(`${getSeasonEmoji(seasonName)} ${seasonName} 테마 적용: ${theme.name}`);
}

// 계절별 이모지 반환
function getSeasonEmoji(season) {
    const emojis = {
        '봄': '🌸',
        '여름': '🌞',
        '가을': '🍂',
        '겨울': '❄️',
        '특별한': '✨'
    };
    return emojis[season] || '🎨';
}

// 테마 프리뷰 업데이트 (강화됨)
function updateThemePreview() {
    const preview = document.getElementById('theme-preview');
    if (!preview || currentTheme === '') return;
    
    const theme = themes[currentTheme];
    if (!theme) return;
    
    // 컬러 도트 생성
    const colorDots = preview.querySelector('.theme-color-dots');
    if (colorDots) {
        colorDots.innerHTML = '';
        
        Object.values(theme.colors).forEach((color, index) => {
            const dot = document.createElement('div');
            dot.className = 'theme-color-dot';
            dot.style.backgroundColor = color;
            dot.style.animationDelay = `${index * 0.1}s`;
            dot.style.animation = 'colorPulse 2s ease-in-out infinite alternate';
            colorDots.appendChild(dot);
        });
    }
    
    // 설명 업데이트
    const description = preview.querySelector('.theme-description');
    if (description) {
        description.textContent = `${theme.description} (${theme.backgroundStyle} style)`;
    }
    
    // 프리뷰 표시
    preview.classList.add('show');
    
    // 컬러 도트 애니메이션 추가
    if (!document.getElementById('color-dot-animation')) {
        const style = document.createElement('style');
        style.id = 'color-dot-animation';
        style.textContent = `
            @keyframes colorPulse {
                0% { transform: scale(1); box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
                100% { transform: scale(1.1); box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2); }
            }
        `;
        document.head.appendChild(style);
    }
}

// 테마 알림 표시 (개선된 디자인)
function showThemeNotification(message) {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.theme-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(15px);
        border: 2px solid var(--primary);
        border-radius: 16px;
        padding: 20px 24px;
        box-shadow: 
            0 10px 25px rgba(0, 0, 0, 0.1),
            0 0 0 1px rgba(255, 255, 255, 0.8);
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--text);
        z-index: 10000;
        animation: slideInRight 0.4s cubic-bezier(0.2, 0, 0.2, 1);
        max-width: 320px;
        transform-origin: right center;
    `;
    
    notification.textContent = message;
    
    // 애니메이션 스타일 추가
    if (!document.getElementById('theme-notification-style')) {
        const style = document.createElement('style');
        style.id = 'theme-notification-style';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100px) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                }
            }
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0) scale(1);
                }
                to {
                    opacity: 0;
                    transform: translateX(100px) scale(0.8);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // 4초 후 자동 제거
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.4, 0, 1, 1)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 400);
        }
    }, 4000);
}

// 테마 데이터 확장을 위한 함수 (나중에 사용)
function addCustomTheme(key, themeData) {
    themes[key] = themeData;
    createThemeSelector(); // 셀렉터 재생성
    console.log(`새 테마 추가됨: ${themeData.name} (${themeData.backgroundStyle} style)`);
}

// 현재 테마 정보 반환
function getCurrentTheme() {
    return {
        key: currentTheme,
        data: themes[currentTheme]
    };
}

// 테마 목록 반환 (카테고리별)
function getThemesByCategory(category) {
    return Object.entries(themes)
        .filter(([key, theme]) => theme.category === category)
        .reduce((acc, [key, theme]) => {
            acc[key] = theme;
            return acc;
        }, {});
}

// 초기화 함수 - DOM이 로드된 후 호출
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        initThemeSystem();
        console.log('Enhanced Theme System with Dynamic Backgrounds initialized! 🎨');
    }, 100);
});