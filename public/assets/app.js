var selectedoption = document.querySelector('input[name="tabn"][checked]');
var selectedTab = document.querySelector(`#app>div[id="Tab${selectedoption.id.charAt(3)}"]`);
var notSelectedTabs = document.querySelectorAll(`#app>div:not([id="Tab${selectedoption.id.charAt(3)}"])`);
notSelectedTabs.forEach(e=>e.classList.add('hd'));
var alloptions = document.querySelectorAll('input[type="radio"][name="tabn"]');
alloptions.forEach(e=>e.addEventListener('change', () => {
	document.querySelectorAll(`#app>div:not([id="Tab${e.value.charAt(3)}"])`).forEach(h=>h.classList.add('hd'));
	document.querySelector(`#app>div[id="Tab${e.value.charAt(3)}"]`).classList.remove('hd');
}))