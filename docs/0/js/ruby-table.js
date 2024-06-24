class RubyTable {
    static make(isVertical=false) {
        const DS = {
            '標準':this.#makeRuby(),
            '反面':this.#makeRubyUnder(),
            '両面':this.#makeRuby2(),
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
    static #makeRuby() { return van.tags.ruby('超電磁砲',van.tags.rt('ちょうでんじほう')) }
    static #makeRubyUnder() { return van.tags.ruby({style:'ruby-position:under;'},'超電磁砲',van.tags.rt('ちょうでんじほう')) }
    static #makeRuby2() {
        return van.tags.ruby(
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
    static #makeCode(code) { return van.tags.td(van.tags.pre({style:`white-space:pre-wrap;`},van.tags.code(code))) }
}

