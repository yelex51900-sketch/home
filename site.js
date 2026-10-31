(() => {

  // Responsive mobile layout: desktop artwork and hotspot coordinates remain untouched.
  const pageClass = Array.from(document.body.classList).find(c => c.startsWith('page-'));
  const mobilePages = {
    'page-index': {
      hero: 'assets/mobile-top-hero.jpg',
      heroAlt: '夕暮れの空と、あたたかな光が灯る住まい',
      title: '暮らしを好きで満たす。',
      intro: 'なごみ建築工房は、暮らしに寄り添う住まいづくりをご提案します。',
      cards: [
        ['施工事例','これまでの住まいづくりをご紹介します。','works.html','assets/mobile-top-card-1.jpg'],
        ['私たちの家づくり','素材と設計へのこだわりをご紹介します。','homebuilding.html','assets/mobile-top-card-2.jpg'],
        ['採用情報','一緒に住まいづくりに取り組む仲間を募集しています。','recruit.html','assets/mobile-top-card-3.jpg'],
        ['会社案内','なごみ建築工房についてご案内します。','company.html','assets/mobile-top-card-4.jpg']
      ]
    },
    'page-works': {
      hero:'assets/mobile-works-hero.jpg', heroAlt:'木のぬくもりを感じる住まいの施工事例',
      title:'施工事例', intro:'ひとつひとつの家に、家族の想いと暮らしのかたちがあります。',
      cards:[
        ['光がめぐる 吹き抜けのある家','大きな窓から光を取り込む、開放感のある住まい。','contact.html?subject=施工事例について','assets/mobile-work-1.jpg'],
        ['四季を感じる 和モダンの平屋','自然の移ろいを身近に感じる和モダンの住まい。','contact.html?subject=施工事例について','assets/mobile-work-2.jpg'],
        ['家族がつながる 木のぬくもりの空間','木の素材感を活かした、あたたかな空間。','contact.html?subject=施工事例について','assets/mobile-work-3.jpg'],
        ['中庭とつながる もうひとつのリビング','室内と中庭がつながる、心地よい住まい。','contact.html?subject=施工事例について','assets/mobile-work-4.jpg'],
        ['シンプルに美しく暮らす 黒の外観の家','シンプルな外観と機能的な間取りの住まい。','contact.html?subject=施工事例について','assets/mobile-work-5.jpg'],
        ['自然に溶け込む 白のシンプルな家','周囲の景色になじむ、明るくすっきりした住まい。','contact.html?subject=施工事例について','assets/mobile-work-6.jpg']
      ]
    },
    'page-homebuilding': {
      hero:'assets/mobile-homebuilding-hero.jpg', heroAlt:'木の模型と設計図',
      title:'家づくり', intro:'家は、人生をつくる場所。だからこそ、ひとつひとつに想いを込めて。',
      cards:[
        ['自然素材と心地よさ','木のぬくもりや自然素材を活かし、季節を感じる暮らしをつくります。','#','assets/mobile-homebuilding-1.jpg'],
        ['自由設計で叶える理想の暮らし','ご家族のライフスタイルに合わせ、世界にひとつだけの住まいをご提案します。','#','assets/mobile-homebuilding-2.jpg'],
        ['確かな施工と安心の品質','見えない部分まで丁寧に、長く安心して暮らせる家をつくります。','#','assets/mobile-homebuilding-3.jpg'],
        ['地域に根ざした家づくり','地域の気候や風土を知り尽くした工務店としてサポートします。','contact.html','assets/mobile-homebuilding-4.jpg']
      ],
      steps:['ご相談','プラン提案','詳細設計・お見積り','着工','完成・お引き渡し','アフターサポート']
    },
    'page-recruit': {
      hero:'assets/mobile-recruit-hero.jpg', heroAlt:'木漏れ日と緑の葉',
      title:'採用情報', intro:'家づくりは、人の力でできている。共に家づくりに取り組む仲間を募集しています。',
      cards:[
        ['設計・プランナー','お客様の想いをかたちにする住まいの設計・プラン提案。','contact.html?subject=設計・プランナー','assets/mobile-recruit-1.jpg'],
        ['現場監督','工事全体の進行管理と品質管理。','contact.html?subject=現場監督','assets/mobile-recruit-2.jpg'],
        ['大工・施工スタッフ','木のぬくもりを活かし、丁寧な施工で住まいをつくります。','contact.html?subject=大工・施工スタッフ','assets/mobile-recruit-3.jpg'],
        ['事務・サポートスタッフ','お客様対応や書類作成など、家づくりを支える仕事です。','contact.html?subject=事務・サポートスタッフ','assets/mobile-recruit-4.jpg']
      ]
    },
    'page-company': {
      hero:'assets/mobile-company-hero.jpg', heroAlt:'緑に囲まれた、なごみ建築工房の住まい',
      title:'会社案内', intro:'自然と、暮らしと、未来をつくる。',
      facts:[['会社名','なごみ建築工房'],['所在地','群馬県みどり市（詳細住所は公開前に要確認）'],['代表者','山田 和也'],['設立','2015年4月'],['事業内容','注文住宅の設計・施工・リフォーム・住宅相談'],['対応エリア','群馬県みどり市および周辺地域']]
    }
  };
  if (pageClass && mobilePages[pageClass]) {
    const data = mobilePages[pageClass];
    const nav = `<nav class="mobile-nav" id="mobile-nav" aria-label="メインナビゲーション">
      <a href="index.html">ホーム</a><a href="works.html">施工事例</a><a href="homebuilding.html">家づくり</a><a href="recruit.html">採用情報</a><a href="company.html">会社案内</a><a href="contact.html">お問い合わせ</a></nav>`;
    let bodyContent = '';
    if (data.cards) {
      bodyContent += `<section class="mobile-cards" aria-label="${data.title}">` + data.cards.map((card, i) =>
        `<a class="mobile-card" href="${card[2]}"><img src="${card[3]}" alt="" loading="lazy"><span class="mobile-card-copy"><strong>${card[0]}</strong><span>${card[1]}</span><em>詳しく見る　›</em></span></a>`
      ).join('') + `</section>`;
    }
    if (data.steps) bodyContent += `<section class="mobile-section"><h2>家づくりの流れ</h2><ol class="mobile-steps">${data.steps.map(s=>`<li>${s}</li>`).join('')}</ol></section>`;
    if (data.facts) bodyContent += `<section class="mobile-section"><h2>会社概要</h2><dl class="mobile-facts">${data.facts.map(f=>`<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join('')}</dl><h2>アクセス</h2><p>群馬県みどり市周辺</p><a class="mobile-button" href="https://www.google.com/maps/search/?api=1&query=群馬県みどり市" target="_blank" rel="noopener noreferrer">Googleマップで確認する　›</a></section>`;
    const mobile = document.createElement('div');
    mobile.className = 'mobile-site';
    mobile.innerHTML = `<header class="mobile-header"><a class="mobile-brand" href="index.html"><span class="mobile-brand-mark">⌂</span><span><strong>NAGOMI</strong><small>なごみ建築工房</small></span></a><a class="mobile-call" href="tel:0120123456">電話する</a><button class="mobile-menu-button" type="button" aria-expanded="false" aria-controls="mobile-nav">メニュー ☰</button></header>${nav}<main><img class="mobile-hero" src="${data.hero}" alt="${data.heroAlt}"><section class="mobile-intro"><p class="mobile-eyebrow">NAGOMI なごみ建築工房</p><h1>${data.title}</h1><p>${data.intro}</p></section>${bodyContent}<section class="mobile-contact"><h2>住まいづくりのご相談</h2><p>家づくりのこと、土地のこと、資金のこと。お気軽にご相談ください。</p><a class="mobile-button" href="contact.html">お問い合わせ　›</a><a class="mobile-phone" href="tel:0120123456">0120-123-456</a><small>受付 9:00〜18:00（火・水 定休）</small></section></main><footer class="mobile-footer">© NAGOMI なごみ建築工房</footer>`;
    document.body.insertBefore(mobile, document.body.firstChild);
    const menuButton = mobile.querySelector('.mobile-menu-button');
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      mobile.querySelector('#mobile-nav').classList.toggle('is-open', open);
    });
  }

  const projects = [
    {title:"光がめぐる 吹き抜けのある家", description:"大きな窓と吹き抜けから光を取り込み、家族が心地よく過ごせる住まい。"},
    {title:"四季を感じる 和モダンの平屋", description:"自然の移ろいを身近に感じながら、落ち着いて暮らせる和モダンの住まい。"},
    {title:"家族がつながる 木のぬくもりの空間", description:"木の素材感を活かし、家族が自然と集まるあたたかな空間を目指しました。"},
    {title:"中庭とつながる もうひとつのリビング", description:"中庭と室内がつながり、光や風を感じながら過ごせる住まい。"},
    {title:"シンプルに美しく暮らす 黒の外観の家", description:"シンプルな外観と機能的な間取りを組み合わせ、すっきりと暮らせる住まい。"},
    {title:"自然に溶け込む 白のシンプルな家", description:"周囲の景色になじむ白い外観と、自然を身近に感じられる住まい。"}
  ];
  const modal = document.getElementById('project-modal');
  if (modal) {
    const title = document.getElementById('project-title');
    const description = document.getElementById('project-description');
    let lastFocus = null;
    document.querySelectorAll('[data-project]').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const project = projects[Number(link.dataset.project)];
        if (!project) return;
        lastFocus = link;
        title.textContent = project.title;
        description.textContent = project.description;
        modal.hidden = false;
        document.body.style.overflow = 'hidden';
        modal.querySelector('.modal-close').focus();
        history.replaceState(null, '', '#project-' + (Number(link.dataset.project) + 1));
      });
    });
    const close = () => {
      modal.hidden = true;
      document.body.style.overflow = '';
      history.replaceState(null, '', location.pathname);
      if (lastFocus) lastFocus.focus();
    };
    modal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', close));
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) close(); });
  }
  const form = document.getElementById('contact-form');
  if (form) {
    const params = new URLSearchParams(location.search);
    const subject = params.get('subject');
    if (subject) {
      const select = document.getElementById('subject');
      const option = Array.from(select.options).find(o => o.textContent === subject);
      if (option) select.value = option.value;
      else if (/採用|設計|監督|大工|事務/.test(subject)) select.value = '採用について';
      else if (/施工事例/.test(subject)) select.value = '施工事例について';
    }
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      document.getElementById('form-result').textContent =
        '入力内容を確認しました。現在このサイトには送信先が設定されていないため、内容は送信されていません。お急ぎの場合は 0120-123-456 へお電話ください。';
    });
  }
})();