import $ from 'jquery';
import './style.scss';

let num = 0;

function counter() {
  num++;
  if (num === 1) {
    $('#main').html(`You have been on this page for ${num} second.`);
  } else {
    $('#main').html(`You have been on this page for ${num} seconds.`);
  }
}

setInterval(counter, 1000);
