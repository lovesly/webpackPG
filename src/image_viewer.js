import big from '../assets/large.jpg';
import medium from '../assets/medium.jpg';
import small from '../assets/small.jpg';
import _ from 'lodash';

import '../styles/image_viewer.css';


_.chunk(['a', 'b', 'c', 'd'], 2);
const image = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
image.src = small;

document.body.appendChild(image);

// not showing due to static assets path issue.
const image2 = document.createElement('img');
image2.src = big;
document.body.appendChild(image2);
