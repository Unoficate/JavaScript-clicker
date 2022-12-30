let count = 0;
let cut = 1;
let put = 0;
let all = 0;
point = 0;
const score = document.querySelector('#scoreBar');
const bonus = document.querySelector('#bonus');
const bonus2 = document.querySelector('#bonus2');
const achivka1 = document.querySelector('#achivka1');
const achivka2 = document.querySelector('#achivka2');
const achivka3 = document.querySelector('#achivka3');
const achivka4 = document.querySelector('#achivka4');
const achivka5 = document.querySelector('#achivka5');
const achivka6 = document.querySelector('#achivka6');
const stil = document.querySelector('#colect');
const stil11 = document.querySelector('#colect2');
const stil12 = document.querySelector('#colect3');
const stil13 = document.querySelector('#colect4');
const stil14 = document.querySelector('#colect5');
const stil15 = document.querySelector('#colect6');
bonus.innerHTML = count;
function CCC(){
	count += point;
	console.log(count);
	const template = '<div class="score" id="scoreBar">%score%</div>';
	const template2 = template.replace('%score%', count);
	score.innerHTML = template2;
}
setInterval(CCC, 1000);
function Clicker1(){
	CCC();
	Cut();
	if (count < 0){
		count++
	}
		else if ((count >= 100) && (count < 1000)){
			const tem = '<span id="achivka1">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'Достижение выполнено, нажмите что бы получить');
			achivka1.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 1000) && (count < 5000)){
			const tem = '<span id="achivka2">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'Достижение выполнено, нажмите что бы получить');
			achivka2.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 5000) && (count < 10000)){
			const tem = '<span id="achivka3">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'Достижение выполнено, нажмите что бы получить');
			achivka3.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 10000) && (count < 100000)){
			const tem = '<span id="achivka4">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'Достижение выполнено, нажмите что бы получить');
			achivka4.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 100000) && (count < 1000000)){
			const tem = '<span id="achivka5">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'Достижение выполнено, нажмите что бы получить');
			achivka5.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if (count >= 1000000){
			const tem = '<span id="achivka5">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'Вы выполнили скрытое достижение, нажмите что бы получить');
			achivka6.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if (count <= 150) {
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if (count <= 600) {
			cut *= 1;
			count += Math.round(cut) + put;
			Cut();
		}
		else {
			cut *= 1; 
			count += Math.round(cut) + put;
			Cut();
		}	
}
function Cut(){
	const tem = '<span id="bonus">%bonus%</span>';
	const tem2 = tem.replace('%bonus%', 'Ваш бонус +' + (Math.round(cut) + put) + ' за клик');
	bonus.innerHTML = tem2;
	const tema = '<span id="bonus">%bonus%</span>';
	const tema2 = tem.replace('%bonus%', 'Пассивный доход +' + point + '/сек');
	bonus2.innerHTML = tema2;

}
function Shop1(){
	if (count >= 150){
		count -= 150;
		put += 1;
		CCC();
		Cut();
	}
}
function Shop2(){
	if (count >= 600){
		count -= 600;
		put += 5;
		CCC();
		Cut();
	}
}	
function Shop3(){
	if (count >= 1200){
		count -= 1200;
		put += 12;
		CCC();
		Cut();
	}
}	
function Shop4(){
	if (count >= 2000){
		count -= 2000;
		put += 20;
		CCC();
		Cut();
	}
}	
function Shop5(){
	if (count >= 3000){
		count -= 3000;
		put += 32;
		CCC();
		Cut();
	}
}	
function Shop6(){
	if (count >= 5000){
		count -= 5000;
		put += 55;
		CCC();
		Cut();
	}
}	
function Shop7(){
	if ((count >= 150) && (count < 600)) {
		all = count / 150;
		put += Math.round(all);
		count = 0;
		CCC();
		Cut();
	}	
		else if((count >= 600) && (count < 1200)) {
			all = count / 120;
			put += Math.round(all);
			count = 0;
			CCC();
			Cut();	
		}
		else if((count >= 1200) && (count < 2000)) {
			all = count / 100;
			put += Math.round(all);
			count = 0;
			CCC();
			Cut();	
		}
		else if((count >= 2000) && (count < 3000)) {
			all = count / 100;
			put += Math.round(all);
			count = 0;
			CCC();
			Cut();	
		}
		else if((count >= 3000) && (count < 5000)) {
			all = count / 94;
			put += Math.round(all);
			count = 0;
			CCC();
			Cut();	
		}
		else if(count > 5000){
			all = count / 90;
			put += Math.round(all);
			count = 0;
			CCC();
			Cut();				
		}
	setInterval(Interval, 1000);
}	
function stil1(){
	if (count >= 100){
 		count += 200;
		stil.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'Новичек');
		stil.innerHTML = tem2;
	}
	CCC();
}
function stil2(){
	if (count >= 1000){
 		count += 2500;
		stil11.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'Любитель');
		stil11.innerHTML = tem2;
	}
	CCC();
}
function stil3(){
	if (count >= 5000){
 		count += 10000;
		stil12.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'Чемпион');
		stil12.innerHTML = tem2;
	}
	CCC();
}
function stil4(){
	if (count >= 10000){
 		count += 20000;
		stil13.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'Легенда');
		stil13.innerHTML = tem2;
	}
	CCC();
}
function stil5(){
	if (count >= 100000){
 		count += 0;
		stil14.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'Абсолютный Чемпион');
		stil14.innerHTML = tem2;
	}
	CCC();
}
function stil6(){
	if (count >= 1000000){
 		count += 0;
 		stil15.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'Неудержимый');
		stil15.innerHTML = tem2;
	}
	CCC();
}
function pass1(){
	if (count >= 500){
		count -= 500;
		point += 1;
		CCC();
		Cut();
	}	
}
Clicker1()
