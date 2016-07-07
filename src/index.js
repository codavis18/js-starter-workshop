import $ from 'jquery';
import './style.scss';

let num = 0;

function counter() {
  num++;
  $('#main').html(`You have been on this page for ${num} seconds.`);
}

setInterval(counter, 1000);
