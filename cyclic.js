setInterval(() => {
	const isMatch1 = document.querySelector('#isMatch1');

	const replOutputEl1 = document.querySelector('#taskrepl1-repl-output');

	const correct1 = `1234`;

	if (replOutputEl1 && replOutputEl1.textContent === correct1) {
		isMatch1.style.color = 'green';
		isMatch1.textContent = 'Правильно!';
	} else if (replOutputEl1.textContent.trim() !== '') {
		isMatch1.style.color = 'red';
		isMatch1.textContent = 'Неправильно';
	} else {
		isMatch1.style.color = '';
		isMatch1.textContent = '';
	}

	const isMatch2 = document.querySelector('#isMatch2');

	const replOutputEl2 = document.querySelector('#taskrepl2-repl-output');

	const correct2 = 'красныйсинийзеленый';

	if (replOutputEl2 && replOutputEl2.textContent === correct2) {
		isMatch2.style.color = 'green';
		isMatch2.textContent = 'Правильно!';
	} else if (replOutputEl2.textContent.trim() !== '') {
		isMatch2.style.color = 'red';
		isMatch2.textContent = 'Неправильно';
	} else {
		isMatch2.style.color = '';
		isMatch2.textContent = '';
	}

	const isMatch3 = document.querySelector('#isMatch3');

	const replOutputEl3 = document.querySelector('#taskrepl3-repl-output');

	const correct3 = '23456';

	if (replOutputEl3 && replOutputEl3.textContent === correct3) {
		isMatch3.style.color = 'green';
		isMatch3.textContent = 'Правильно!';
	} else if (replOutputEl3.textContent.trim() !== '') {
		isMatch3.style.color = 'red';
		isMatch3.textContent = 'Неправильно';
	} else {
		isMatch3.style.color = '';
		isMatch3.textContent = '';
	}

	const isMatch4 = document.querySelector('#isMatch4');

	const replOutputEl4 = document.querySelector('#taskrepl4-repl-output');

	const correct4 = '14';

	if (replOutputEl4 && replOutputEl4.textContent === correct4) {
		isMatch4.style.color = 'green';
		isMatch4.textContent = 'Правильно!';
	} else if (replOutputEl4.textContent.trim() !== '') {
		isMatch4.style.color = 'red';
		isMatch4.textContent = 'Неправильно';
	} else {
		isMatch4.style.color = '';
		isMatch4.textContent = '';
	}

	const isMatch5 = document.querySelector('#isMatch5');

	const replOutputEl5 = document.querySelector('#taskrepl5-repl-output');

	const correct5 = '149';

	if (replOutputEl5 && replOutputEl5.textContent === correct5) {
		isMatch5.style.color = 'green';
		isMatch5.textContent = 'Правильно!';
	} else if (replOutputEl5.textContent.trim() !== '') {
		isMatch5.style.color = 'red';
		isMatch5.textContent = 'Неправильно';
	} else {
		isMatch5.style.color = '';
		isMatch5.textContent = '';
	}
    
	const isMatch6 = document.querySelector('#isMatch6');

	const replOutputEl6 = document.querySelector('#taskrepl6-repl-output');

	const correct6 = 'Привет';

	if (replOutputEl6 && replOutputEl6.textContent === correct6) {
		isMatch6.style.color = 'green';
		isMatch6.textContent = 'Правильно!';
	} else if (replOutputEl6.textContent.trim() !== '') {
		isMatch6.style.color = 'red';
		isMatch6.textContent = 'Неправильно';
	} else {
		isMatch6.style.color = '';
		isMatch6.textContent = '';
	}
}, 500);
