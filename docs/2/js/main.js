window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.ruby-2.20240624090651/`}, 'ruby-2')),
        p('両面ルビを実装する。'),
        p(van.tags.a({href:`https://freefielder.jp/blog/2015/01/html5-double-sided-ruby.html`}, 'ここ'), 'を参考に次のCSSを適用した。'),
        van.tags.pre({style:`white-space:pre-wrap;`},van.tags.code(`ruby{ display:inline-table; line-height:1em; vertical-align:middle; }
ruby>rbc{ display:table-row-group; text-align:center; }
ruby>rtc:nth-of-type(1){ display:table-header-group; font-size:50%; line-height:1em; text-align:center; }
ruby>rtc:nth-of-type(2){ display:table-footer-group; font-size:50%; line-height:1em; text-align:center; }
ruby>rbc>rb{ display:table-cell; }
ruby>rtc>rt{ display:table-cell; }`)),
        van.tags.ul(
            van.tags.li('標準の最適化された見栄えが悪化した', van.tags.ul(
                van.tags.li(van.tags.strong('位置がずれた')),
                van.tags.li(van.tags.strong('ルビの位置が強制的に下になる')),
                van.tags.li('余白が減った'),
                van.tags.li('均等割付されなくなった'),
                van.tags.li('CSSの', van.tags.code('ruby-position:under;'), 'が無視される'),
                van.tags.li('両面ルビの場合だけはマシだが少し下にずれている（縦書きは右にズレ）'),
            )),
        ),
        RubyTable.make(),
        RubyTable.make(true),
        van.tags.div(
            p('あ', RubyTable.makeRuby(), 'い'),
            p('あ', RubyTable.makeRubyUnder(), 'い'),
            p('あ', RubyTable.makeRuby2(), 'い'),
        ),
        van.tags.div({style:`writing-mode:vertical-rl;text-orientation:upright;`}, 
            p('あ', RubyTable.makeRuby(), 'い'),
            p('あ', RubyTable.makeRubyUnder(), 'い'),
            p('あ', RubyTable.makeRuby2(), 'い'),
        )
    )
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

