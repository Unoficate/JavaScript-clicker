let count = 0;
let cut = 1;
let put = 0;
let all = 0;
let all2 = 0;
let all3 = 0;
let store1 = 150;
let store2 = 600;
let store3 = 1200;
let store4 = 2000;
let store5 = 3000;
let store6 = 5000;
let pre = 0;
let pre1 = 0;
let pre2 = 0;
let pre3 = 0;
let pre4 = 0;
let pre5 = 0;
point = 0;
const ss1 = document.querySelector('#grid1');
const ss2 = document.querySelector('#grid2');
const ss3 = document.querySelector('#grid3');
const ss4 = document.querySelector('#grid4');
const ss5 = document.querySelector('#grid5');
const ss6 = document.querySelector('#grid6');
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
	if ((count >= 1000) && (count < 1000000)){
		count += point;
		all3 = count / 1000
		const template = '<div class="score" id="scoreBar">%score%</div>';
		const template2 = template.replace('%score%', all3.toFixed(2) + 'kš²');
		score.innerHTML = template2;
	}	
		else if ((count >= 0) && (count < 1000)){
			count += point;
			const template = '<div class="score" id="scoreBar">%score%</div>';
			const template2 = template.replace('%score%', count + 'š²');
			score.innerHTML = template2;
		}
		else if ((count >= 1000000) && (count < 1000000000)){
			count += point;
			all3 = count / 1000000			
			const template = '<div class="score" id="scoreBar">%score%</div>';
			const template2 = template.replace('%score%', all3.toFixed(2) + 'kkš²');
			score.innerHTML = template2;
		}	
		else if (count >= 1000000000){
			count += point;
			all3 = count / 1000000000			
			const template = '<div class="score" id="scoreBar">%score%</div>';
			const template2 = template.replace('%score%', all3.toFixed(2) + 'bš²');
			score.innerHTML = template2;
		}		
}			
setInterval(CCC, 1000);
function Clicker1(){
	CCC();
	Cut();
	if (count < 0){
		count++
	}
		else if ((count >= 100) && (count < 1000)){
			pre++;
			const tem = '<span id="achivka1">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'ŠŠ¾ŃŃŠøŠ¶ŠµŠ½ŠøŠµ Š²ŃŠæŠ¾Š»Š½ŠµŠ½Š¾, Š½Š°Š¶Š¼ŠøŃŠµ ŃŃŠ¾ Š±Ń ŠæŠ¾Š»ŃŃŠøŃŃ');
			achivka1.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 1000) && (count < 5000)){
			pre1++;
			const tem = '<span id="achivka2">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'ŠŠ¾ŃŃŠøŠ¶ŠµŠ½ŠøŠµ Š²ŃŠæŠ¾Š»Š½ŠµŠ½Š¾, Š½Š°Š¶Š¼ŠøŃŠµ ŃŃŠ¾ Š±Ń ŠæŠ¾Š»ŃŃŠøŃŃ');
			achivka2.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 5000) && (count < 10000)){
			pre2++;
			const tem = '<span id="achivka3">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'ŠŠ¾ŃŃŠøŠ¶ŠµŠ½ŠøŠµ Š²ŃŠæŠ¾Š»Š½ŠµŠ½Š¾, Š½Š°Š¶Š¼ŠøŃŠµ ŃŃŠ¾ Š±Ń ŠæŠ¾Š»ŃŃŠøŃŃ');
			achivka3.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 10000) && (count < 100000)){
			pre3++;
			const tem = '<span id="achivka4">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'ŠŠ¾ŃŃŠøŠ¶ŠµŠ½ŠøŠµ Š²ŃŠæŠ¾Š»Š½ŠµŠ½Š¾, Š½Š°Š¶Š¼ŠøŃŠµ ŃŃŠ¾ Š±Ń ŠæŠ¾Š»ŃŃŠøŃŃ');
			achivka4.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if ((count >= 100000) && (count < 1000000)){
			pre4++;
			const tem = '<span id="achivka5">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'ŠŠ¾ŃŃŠøŠ¶ŠµŠ½ŠøŠµ Š²ŃŠæŠ¾Š»Š½ŠµŠ½Š¾, Š½Š°Š¶Š¼ŠøŃŠµ ŃŃŠ¾ Š±Ń ŠæŠ¾Š»ŃŃŠøŃŃ');
			achivka5.innerHTML = tem2;
			cut *= 1;  
			count += Math.round(cut) + put;
			Cut();
		}
		else if (count >= 1000000){
			pre5++;
			const tem = '<span id="achivka5">%achivka%</span>';
			const tem2 = tem.replace('%achivka%', 'ŠŃ Š²ŃŠæŠ¾Š»Š½ŠøŠ»Šø ŃŠŗŃŃŃŠ¾Šµ Š“Š¾ŃŃŠøŠ¶ŠµŠ½ŠøŠµ, Š½Š°Š¶Š¼ŠøŃŠµ ŃŃŠ¾ Š±Ń ŠæŠ¾Š»ŃŃŠøŃŃ');
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
	const tem2 = tem.replace('%bonus%', 'ŠŠ°Ń Š±Š¾Š½ŃŃ +' + (Math.round(cut) + put) + 'š²Š·Š° ŠŗŠ»ŠøŠŗ');
	bonus.innerHTML = tem2;
	const tema = '<span id="bonus">%bonus%</span>';
	const tema2 = tem.replace('%bonus%', 'ŠŠ°ŃŃŠøŠ²Š½ŃŠ¹ Š“Š¾ŃŠ¾Š“ +' + point + 'š²/ŃŠµŠŗ');
	bonus2.innerHTML = tema2;

}
function Shop1(){
	if (count >= store1){
		count -= Math.round(store1);
		store1 *= 1.1;
		put += 1;
		const tema = '<span id="grid1">%money%</span>';
		const tema2 = tema.replace('%money%', Math.round(store1) + 'š²');
		ss1.innerHTML = tema2;
		CCC();
		Cut();
	}
}
function Shop2(){
	if (count >= store2){
		count -= Math.round(store2);
		store2 *= 1.1;
		put += 5;
		const tema = '<span id="grid2">%money%</span>';
		const tema2 = tema.replace('%money%', Math.round(store2) + 'š²');
		ss2.innerHTML = tema2;
		CCC();
		Cut();
	}
}	
function Shop3(){
	if (count >= store3){
		count -= Math.round(store3);
		store3 *= 1.1;
		put += 12;
		const tema = '<span id="grid3">%money%</span>';
		const tema2 = tema.replace('%money%', Math.round(store3) + 'š²');
		ss3.innerHTML = tema2;		
		CCC();
		Cut();
	}
}	
function Shop4(){
	if (count >= store4){
		count -= Math.round(store4);
		store4 *= 1.1;
		put += 20;
		const tema = '<span id="grid4">%money%</span>';
		const tema2 = tema.replace('%money%', Math.round(store4) + 'š²');
		ss4.innerHTML = tema2;		
		CCC();
		Cut();
	}
}	
function Shop5(){
	if (count >= store5){
		count -= Math.round(store5);
		store5 *= 1.1;
		put += 32;
		const tema = '<span id="grid5">%money%</span>';
		const tema2 = tema.replace('%money%', Math.round(store5) + 'š²');
		ss5.innerHTML = tema2;		
		CCC();
		Cut();
	}
}	
function Shop6(){
	if (count >= store6){
		count -= Math.round(store6);
		store6 *= 1.1;
		put += 55;
		const tema = '<span id="grid6">%money%</span>';
		const tema2 = tema.replace('%money%', Math.round(store6) + 'š²');
		ss6.innerHTML = tema2;		
		CCC();
		Cut();
	}
}	
function Shop7(){
	if ((count >= store1) && (count < store2)) {
		all = count / store1 * 1;
		let al1 = count % store1;
		store1 *= 1.1; 
		const tema = '<span id="grid2">%money%</span>';
		const tema2 = tema.replace('%money%', Math.round(store1) + 'š²');
		ss1.innerHTML = tema2;
		put += Math.round(all);
		count = 0;
		count += Math.round(al1);
	}	
		else if((count >= store2) && (count < store3)) {
			all = count / store2 * 5;
			let al2 = count % store2;
			store2 *= 1.1; 
			const tema = '<span id="grid2">%money%</span>';
			const tema2 = tema.replace('%money%', Math.round(store2) + 'š²');
			ss2.innerHTML = tema2;
			put += Math.round(all);
			count = 0;
			count += Math.round(al2);
		}
		else if((count >= store3) && (count < store4)) {
			all = count / store3 * 12;
			let al3 = count % store3;
			store3 *= 1.1; 
			const tema = '<span id="grid2">%money%</span>';
			const tema2 = tema.replace('%money%', Math.round(store3) + 'š²');
			ss3.innerHTML = tema2;
			put += Math.round(all);
			count = 0;
			count += Math.round(al3);
		}
		else if((count >= store4) && (count < store5)) {
			all = count / store4 * 20;
			let al4 = count % store4;
			store4 *= 1.1; 
			const tema = '<span id="grid2">%money%</span>';
			const tema2 = tema.replace('%money%', Math.round(store4) + 'š²');
			ss4.innerHTML = tema2;
			put += Math.round(all);
			count = 0;
			count += Math.round(al4);
		}
		else if((count >= store5) && (count < store6)) {
			all = count / store5 * 32;
			let al5 = count % store5;
			store5 *= 1.1; 
			const tema = '<span id="grid2">%money%</span>';
			const tema2 = tema.replace('%money%', Math.round(store5) + 'š²');
			ss5.innerHTML = tema2;
			put += Math.round(all);
			count = 0;
			count += Math.round(al5);
		}
		else if(count > store6){
			all = count / store6 * 55;
			let al6 = count % store6;
			store6 *= 1.1; 
			const tema = '<span id="grid2">%money%</span>';
			const tema2 = tema.replace('%money%', Math.round(store6) + 'š²');
			ss6.innerHTML = tema2;
			put += Math.round(all);
			count = 0;
			count += Math.round(al6);	
		}
	CCC()
	Cut()	
}	
function stil1(){
	if (pre >= 1){
 		count += 200;
		stil.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'ŠŠ¾Š²ŠøŃŠµŠŗ');
		stil.innerHTML = tem2;
	}
	CCC();
}
function stil2(){
	if (pre1 >= 1){
 		count += 2500;
		stil11.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'ŠŃŠ±ŠøŃŠµŠ»Ń');
		stil11.innerHTML = tem2;
	}
	CCC();
}
function stil3(){
	if (pre2 >= 1){
 		count += 10000;
		stil12.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'Š§ŠµŠ¼ŠæŠøŠ¾Š½');
		stil12.innerHTML = tem2;
	}
	CCC();
}
function stil4(){
	if (pre3 >= 1){
 		count += 20000;
		stil13.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'ŠŠµŠ³ŠµŠ½Š“Š°');
		stil13.innerHTML = tem2;
	}
	CCC();
}
function stil5(){
	if (pre4 >= 1){
 		count += 0;
		stil14.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'ŠŠ±ŃŠ¾Š»ŃŃŠ½ŃŠ¹ Š§ŠµŠ¼ŠæŠøŠ¾Š½');
		stil14.innerHTML = tem2;
	}
	CCC();
}
function stil6(){
	if (pre5 >= 1){
 		count += 0;
 		stil15.innerHTML = '';
		const tem = '<div id="colect">%apt%</div>';
		const tem2 = tem.replace('%apt%', 'ŠŠµŃŠ“ŠµŃŠ¶ŠøŠ¼ŃŠ¹');
		stil15.innerHTML = tem2;
	}
	CCC();
}
function pass1(){
	if (count >= 500){
		count -= 500
		point += 1;
		CCC();
		Cut();
	}	
}
function pass2(){
	if (count >= 500){
		all2 = count / 500;
		let al11 = count % 500;
		count = 0;
		count += Math.round(al11);
		point += Math.round(all2);
		CCC();
		Cut();
	}	
}
Clicker1()
