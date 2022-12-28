let count = 0;
let cut = 1;
let put = 0;
const score = document.querySelector('#scoreBar');
const bonus = document.querySelector('#bonus');
bonus.innerHTML = count;
function Clicker1(){
	Cut();
	if (count <= 1){
		count++
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
	const template = '<div class="score" id="scoreBar">%score%</div>';
	const template2 = template.replace('%score%', count);
	score.innerHTML = template2;
	End();
}
function Cut(){
	const tem = '<span id="bonus">%bonus%</span>';
	const tem2 = tem.replace('%bonus%', 'Ваш бонус +' + (Math.round(cut) + put));
	bonus.innerHTML = tem2;
}
function Shop1(){
	if (count >= 150){
		count -= 150;
		put += 1;
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', count);
		score.innerHTML = template2;
		Cut();
	}
}
function Shop2(){
	if (count >= 600){
		count -= 600;
		put += 5;
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', count);
		score.innerHTML = template2;
		Cut();
	}
}	
function Shop3(){
	if (count >= 1200){
		count -= 1200;
		put += 12;
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', count);
		score.innerHTML = template2;
		Cut();
	}
}	
function Shop4(){
	if (count >= 2000){
		count -= 2000;
		put += 20;
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', count);
		score.innerHTML = template2;
		Cut();
	}
}	
function Shop5(){
	if (count >= 3000){
		count -= 3000;
		put += 32;
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', count);
		score.innerHTML = template2;
		Cut();
	}
}	
function Shop6(){
	if (count >= 5000){
		count -= 5000;
		put += 55;
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', count);
		score.innerHTML = template2;
		Cut();
	}
}	
function End(){
	if (count > 100000){
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', 'Поздравляем! Вы прошли игру!');
		score.innerHTML = template2;
	}
}
Clicker1()
