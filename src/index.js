
// 在家 windows 上没问题。一样的代码，当然也许 node_modules 不一样。
// 然后，加上 splitChunks 就白屏，根本不加载入口文件？？
// 如果设置 chunks 为 all 就不自动执行，不明白为什么
function component() {
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');
    button.innerHTML = 'Click me';
    button.onclick = (e) => {
        import('./image_viewer');
        import('./sum').then(module => {
            // cjs 模块会到处到 default 上。
            const { sum } = module;
            sum(4, 19);
        });
    }; 
    element.appendChild(br);
    element.appendChild(button);
    return element;
}
// 为什么非要这样？？
document.body.appendChild(component());