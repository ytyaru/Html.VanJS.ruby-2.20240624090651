class RubyTable {
    static make(isVertical=false) {
        const DS = {
            '標準':this.makeRuby(),
            '反面':this.makeRubyUnder(),
            '両面':this.makeRuby2(isVertical),
        }
        return van.tags.table({border:1, style:`border-collapse:collapse;${(isVertical) ? 'writing-mode:vertical-rl;text-orientation:upright;': ''}`},
            van.tags.tr('方法,描画,HTML'.split(',').map(v=>this.#makeTh(v))),
            [...Object.entries(DS)].map(([k,v])=>this.#makeTr(k,v))
        )
    }
    static #makeTr(h, r) { return van.tags.tr(
        this.#makeTh(h),
        van.tags.td('あ',r,'い'),
        this.#makeCode(r.outerHTML),
    )}
    static #makeTh(t) { return van.tags.th(this.#styleTh(), t) }
    static #styleTh() { return {style:`background-color:#eee;`} }
    static makeRuby() { return van.tags.ruby('超電磁砲',van.tags.rt('ちょうでんじほう')) }
    static makeRubyUnder() { return van.tags.ruby({style:'ruby-position:under;'},'超電磁砲',van.tags.rt('ちょうでんじほう')) }
    static makeRuby2(isVertical=false) {
        return van.tags.ruby(this.#rubyCss(),
            van.tags.rbc(
                van.tags.rb('超電磁砲')
            ),
            van.tags.rtc(
                van.tags.rt('ちょうでんじほう')
            ),
            van.tags.rtc(
                van.tags.rt('レールガン')
            ),
        )
    }
    static makeRubyLong() { return van.tags.ruby('超長ルビ',van.tags.rt('おやもじにたいしてめちゃくちゃながいルビ１')) }
    static makeRuby2Long(isVertical=false) {
        return van.tags.ruby(this.#rubyCss(),
            van.tags.rbc(
                van.tags.rb('超長ルビ')
            ),
            van.tags.rtc(
                van.tags.rt('おやもじにたいしてめちゃくちゃながいルビ１')
            ),
            van.tags.rtc(
                van.tags.rt('おやもじにたいしてめちゃくちゃながいルビ２')
            ),
        )
    }
    static makeRuby2Short(isVertical=false) {
        return van.tags.ruby(this.#rubyCss(),
            van.tags.rbc(
                van.tags.rb('超長々親文字')
            ),
            van.tags.rtc(
                van.tags.rt('ルビ')
            ),
            van.tags.rtc(
                van.tags.rt('ルビ')
            ),
        )
    }
    static #rubyCss(isVertical=false) { return isVertical ? ({}) : ({class:'_reds'}) }
    static #makeCode(code) { return van.tags.td(van.tags.pre({style:`white-space:pre-wrap;`},van.tags.code(code))) }
}

