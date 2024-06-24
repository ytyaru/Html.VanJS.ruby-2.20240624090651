window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.ruby-2.20240624090651/`}, 'ruby-2')),
        p('両面ルビを実装する。'),
        p(van.tags.a({href:`https://freefielder.jp/blog/2015/01/html5-double-sided-ruby.html`}, 'ここ'), 'を参考に次のCSSを適用した。'),
        van.tags.pre({style:`white-space:pre-wrap;`},van.tags.code(`ruby._reds{display:inline-table;text-align-last:justify;text-justify:inter-ideograph;line-height:1em;}
ruby._reds>rb,ruby>rbc,ruby._reds>rbc{display:table-row;text-align-last:justify;text-justify:inter-ideograph;}
ruby._reds>rt{display:table-header-group ;font-size:50%;text-align:center;}
ruby._reds>rtc:nth-of-type(1){display:table-header-group;font-size:50%;}
ruby._reds>rtc:nth-of-type(2){display:table-footer-group;font-size:50%;}
ruby._reds>rtc._dstop{ display:table-caption;caption-side:top;}
ruby._reds>rtc._dsbottom{ display:table-caption;caption-side:bottom;}
._dstop>rt{display:inline !important;}
._dsbottom>rt{display:inline !important;}
ruby._reds>rbc>rb{display:table-cell;}
ruby._reds>rtc>rt{display:table-cell;}
ruby>rtc{display:table-header-group;font-size:50%;text-align:center;text-align-last:justify;text-justify:inter-ideograph;}
ruby *{line-height:1em;}
ruby._reds,ruby._reds>*{margin:0;padding:0;border-spacing:0;}
rp{display:none !important;}
span#_redsdummy{display:inline-block;line-height:1em;height:1em;}`)),
        p('さらに', van.tags.a({href:'js/measure.js', target:'_blank', rel:'noopener noreferrer'}, 'measure.js'), 'で位置合わせした。'),
        van.tags.ul(
            van.tags.li('標準の最適化された見栄えが悪化した', van.tags.ul(
                van.tags.li('親文字に対してルビが多い時、標準なら親文字の先頭と末尾にスペースをとる。これは',van.tags.code('display:ruby-text'),'の挙動と思われる。だがこのCSSプロパティは未実装であるため再現不能。やむなく',van.tags.code('display:justify'),'で代用しているため、標準のルビと両面ルビとでは表示が違ってしまう。'),
            )),
        ),
        RubyTable.make(),
        RubyTable.make(true),
        van.tags.div(
            p('あ', RubyTable.makeRuby(), 'い'),
            p('あ', RubyTable.makeRubyUnder(), 'い'),
            p('あ', van.tags.ruby('超電磁砲',van.tags.rt('レールガン')), 'い'),
            p('あ', RubyTable.makeRuby2(), 'い'),
            p('あ', RubyTable.makeRubyLong(), 'い'),
            p('あ', RubyTable.makeRuby2Long(), 'い'),
            p('あ', van.tags.ruby('超長々親文字',van.tags.rt('ルビ')), 'い'),
            p('あ', RubyTable.makeRuby2Short(), 'い'),
        ),
        van.tags.div({style:`writing-mode:vertical-rl;text-orientation:upright;`}, 
            p('あ', RubyTable.makeRuby(), 'い'),
            p('あ', RubyTable.makeRubyUnder(), 'い'),
            p('あ', van.tags.ruby('超電磁砲',van.tags.rt('レールガン')), 'い'),
            p('あ', RubyTable.makeRuby2(), 'い'),
            p('あ', RubyTable.makeRubyLong(), 'い'),
            p('あ', RubyTable.makeRuby2Long(), 'い'),
            p('あ', van.tags.ruby('超長々親文字',van.tags.rt('ルビ')), 'い'),
            p('あ', RubyTable.makeRuby2Short(), 'い'),
        )
    )
    // 横向き両面ルビの位置計算（vertical-align付与）
    for (let ruby of document.querySelectorAll(`ruby._reds`)) { measure(ruby) }
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

