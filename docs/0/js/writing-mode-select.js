class WritingModeSelect {
    static make() {
        this.#addCss()
        const select = van.tags.select({onchange:(e)=>{
            document.querySelector(':root').style.setProperty('--writing-mode', e.target.value)
            document.querySelector(':root').style.setProperty('--text-orientation', (('vertical-rl'===e.target.value) ? 'upright' : 'mixed'))
        }},
            ['horizontal-tb','vertical-rl'].map(v=>van.tags.option({value:v}, v)),
        )
        return select
    }
    static #addCss() {
        Css.add(`
:root{
  --writing-mode:horizontal-tb;
  --text-orientation:mixed;
}
body {
  writing-mode: var(--writing-mode);
  text-orientation: var(--text-orientation);
  font-family: 'Noto Serif JP', 'Source Han Serif JP', 'Noto Color Emoji', serif; 
  letter-spacing:0.05em;
  line-height:1.7em;
}
h1,h2,h3,h4,h5,h6,th,label,fieldset,caption,figcaption,button,select,option {
  font-family: 'Noto Sans JP', 'Source Han Sans JP', 'Noto Color Emoji', sans-serif;
}
`)
    }
}

