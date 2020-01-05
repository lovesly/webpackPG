
// 在家 windows 上没问题。一样的代码，当然也许 node_modules 不一样。
// 然后，加上 splitChunks 就白屏，根本不加载入口文件？？
// 如果设置 chunks 为 all 就不自动执行，不明白为什么
import { sum } from './sum';
import './image_viewer';
console.log(sum(4, 5));