// if the html contains ' " ', it's better to put them in ' ' to get the correct output.

function trimHTML(string) {
  return string.replace(/<(?:.|\n)*?>/gm, '');
}

console.log(trimHTML('<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository"> New repository </a>'));
