document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const homeBtn = document.getElementById('homeBtn');
    const menu = document.getElementById('menu');

    function openMenu() {
        menu.classList.add('show');
        menuBtn.textContent = '✕';
        homeBtn.style.display = 'block';
    }

    function closeMenu() {
        menu.classList.remove('show');
        menuBtn.textContent = '☰';
        homeBtn.style.display = 'none';
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.contains('show') ? closeMenu() : openMenu();
    });

    document.addEventListener('click', () => {
        closeMenu();
    });

    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

   document.getElementById('homeBtn').addEventListener('click', function() {
    window.location.href = "indexhomepage.html"; // 點擊後跳到首頁
});
// JavaScript 平滑滾動（大部分瀏覽器支援）
document.querySelector('.down-arrow').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#main-content').scrollIntoView({ behavior: 'smooth' });
  });
  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  const slider = document.querySelector('.slider-container');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => isDown = false);

slider.addEventListener('mousemove', e => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX); 
  slider.scrollLeft = scrollLeft - walk;
});

});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const content = document.getElementById('modal-content');
  const closeBtn = document.getElementById('closeModal');

  document.querySelectorAll('.pill-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault(); // ⭐阻止跳到最上面

      const type = btn.dataset.type;

      if (type === 'history') {
        title.textContent = '歷史沿革';
        content.innerHTML = `
          <p>
            雲林布袋戲館，原為日治時代之台南州虎尾郡郡役所，<br>
            虎尾郡於大正九年（1920）地方制度改正後成立，<br>
            大正11年（1922）建築落成。<br><br>
      
            昭和5年（1930）增建司法室（刑事間）、<br>
            昭和6年（1931）增建二樓、<br>
            昭和12年（1937）增建獨棟郡守辦公室，<br>
            形成今日所見樣貌，為當時行政與警察中心。<br><br>
      
            光復後1946–1949年短暫作為虎尾區公所，<br>
            1950年改為虎尾警察分局，<br>
            1989年警局搬遷後建築物閒置。
          </p>
        `;
      }


      if (type === 'events') {
        title.textContent = '大事紀';
        content.innerHTML = `
          <ul class="timeline">
            <li>1922年：大正11年虎尾郡役所落成（創建）</li>
            <li>1930年：增築外圍柵門、司法室、倉庫</li>
            <li>1931年：增建二樓工事落成</li>
            <li>1937–1940年：增建中庭二層樓閣（郡守辦公室）</li>
            <li>1946–1949年：光復後短暫作為虎尾區公所</li>
            <li>1950–1989年：改為虎尾警察分局</li>
            <li>1989年：警局搬遷而閒置</li>
            <li>1997年：舉行虎尾全國文藝季，決定保存並更名「虎威古郡」</li>
            <li>1999年：委託雲科大調查，規劃布袋戲主題館</li>
            <li>2000–2004年：布袋戲主題館修護工程</li>
            <li>2001年：登錄為縣定歷史建築</li>
            <li>2007年：國際偶戲節短暫開館</li>
            <li>2009年：舉辦「史豔文40傳奇」展覽</li>
          </ul>
        `;
      }
      
      


      modal.classList.add('show');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const title = document.getElementById('modal-title');
  const content = document.getElementById('modal-content');
  const closeBtn = document.getElementById('closeModal');

  document.querySelectorAll('.pill-btn2').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault(); // ⭐阻止跳到最上面

      const type = btn.dataset.type;

      if (type === 'history') {
        title.textContent = '更多歷年展覽';
        content.innerHTML = `
          <p>
98/ 【史豔文40傳奇】<br>
98/ 【黃海岱大師百年特展】<br>
99/ 【任偶行木偶攜遊記】<br>
99/ 【偶戲節特展-布袋戲百年風華錄】<br>
100/1~4月【閣派掌門人-鍾任壁布袋戲特展】<br>
100/5~7月【掌中戲乾坤.南北大薈萃-雲林.台北布袋戲交流展】<br>
100/8/13~10/16【金光風雲一甲子-黃俊雄布袋戲特展】<br>
101/1~4月【忠勇孝義傳再現江湖特展】<br>
101/5~7月【金光閃耀下不褪的身影-布袋戲布景與藝師特展】<br>
101/8~10/14 【2012全國布袋戲青年展演會】<br>
102/1/1起【詔安客家布袋戲-廖文和大展】<br>
102/10/4起【向掌中大師致敬特展】<br>
103/10-12月【陳錫煌藝師戲偶裝修特展】【金掌獎特展】<br>
104/1-5月【吳萬響的戲與偶】【巧藝成真-徐炳垣特展】<br>
104/10/2起【木藝堂自創木偶特展】【羽皇偶服特展-皇者之錄】<br>
105/12/31 雲林布袋戲日【黃海岱特展】<br>
106/10/7 起【掌中風雲 叱吒武林】布袋戲常設展<br>
107/10/6~ 【隆興閣創立六十週年紀念特展】<br>
108/7/29~9.29 【全樂閣木偶劇團特展】<br>
108/10.5~109/2.9【偶藝非凡-雲林布袋戲館特展】<br>
109/2.12~9.20【江湖救援團特展】<br>
109/10.1~10.31【男神時代•誰與爭鋒-霹靂布袋戲科技互動特展】<br>
109/11.14~110/1.30「妙手巧匠-偶藝達人聯合展」<br>
110/2.12~7.31「鬥天傳」特展<br>
110/10.1~111/2.20「武林天下 ‧世界與偶」特展 2021雲林國際偶戲節特展<br>
111/2.25~6.5「壁」生珍藏-鍾任壁文物典藏特展<br>
111/9.11~112/3.12 世界在掌上-美國西北木偶中心典藏展<br>
112/9~113/5 搬戲時＊光 -新勝景掌中劇團特展<br>
113/9.23~出外景-新興閣共演計畫 2024雲林國際偶戲節特展<br>
114/1.2 ~ 掌演乾坤 新常設展<br>
114/8.20 ~9.30 東離來風·布袋戲的異世界想像<br>
114/10.10 ~12.21 聖道流光：霹靂傳奇群像 (佈展中)
</p>

        `;
      }


      if (type === 'events') {
        window.open(
          'https://calendar.google.com/calendar/u/0/embed?color=%23a47ae2&src=palm.puppet@gmail.com&pli=1',
          '_blank'
        );
        return; // ⭐ 不要再往下跑 modal
      }
      
      


      modal.classList.add('show');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});

