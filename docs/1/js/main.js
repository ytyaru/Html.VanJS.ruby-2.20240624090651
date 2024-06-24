window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.ruby-2.20240624090651/`}, 'ruby-2')),
        p('両面ルビを実装する。'),
        p(van.tags.a({href:'https://freefielder.jp/ruby/html4.html'}, 'ruby_enabler2'), 'で実装した。', van.tags.a({href:`https://momdo.github.io/html/text-level-semantics.html#the-ruby-element`},'HTML Living Standard'), 'からは両面ルビの仕様が消えている。そのため', van.tags.code('<rbc>'), ',', van.tags.code('<rb>'), ',', van.tags.code('<rtc>'), 'タグも仕様外になった。それを無理やりCSSやJSで計算して表示している。'),
        van.tags.ul(
            van.tags.li('実行タイミングがDOM読込完了時なのでVanJSと相性が悪い'),
            van.tags.li('標準と比べて見栄えが悪い', van.tags.ul(
                van.tags.li('余白が少ない'),
                van.tags.li('均等割付されない'),
                van.tags.li('CSSの', van.tags.code('ruby-position:under;'), 'が無視される'),
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

