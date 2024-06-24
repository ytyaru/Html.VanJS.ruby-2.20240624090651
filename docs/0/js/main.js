window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
//    const select = WritingModeSelect.make()
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.ruby-2.20240624090651/`}, 'ruby-2')),
        p('両面ルビを実装する。'),
        p('特に何もしない標準状態。両面ルビは仕様外なので正しく表示されない。'),
//        select,
        RubyTable.make(),
        RubyTable.make(true),
    )
//    select.focus()
//    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

