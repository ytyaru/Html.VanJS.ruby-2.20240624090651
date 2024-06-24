class CssAdder {
    static add(css) {
        const style = document.createElement('style')
        style.sheet.insertRule(css, 0)
        document.head.appendChild(style)
    }
}
