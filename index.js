
function Easter( year){
    var ameteAlem = year;
	var metene_sabit = (parseInt(ameteAlem/4)+ameteAlem)%7;
	if(metene_sabit==0){
		metene_sabit = 6;
	}
	
	var medeb = ameteAlem % 532;
	
	if(medeb >= 76){
		medeb = medeb % 76;
	}
	if(medeb >= 19){
		medeb = medeb % 19;
	}
	if(medeb == 0){
		medeb = 30;
	}
	
	var wenber = medeb - 1;
	
	var metk = wenber * 19;
	
	if(metk > 30){
		metk = metk % 30;
	}
	if(metk == 0){
		metk = 30;
	}
	var tewsak = {8:6, 7:7, 6:1, 5:2, 4:3, 3:4, 2:5};
	var tewsak_rev = {6:8, 7:7, 1:6, 2:5, 3:4, 4:3, 5:2};
	
	
	var rev_tewsak = tewsak[metene_sabit];
	
	var g = 0;
	for( var i=rev_tewsak; i<metk+rev_tewsak;i++){
		g = i%7;
	}
	if(g == 0){
		g = 6;
	}
	 easterDay = tewsak_rev[g]+metk+9;
	easterDay = easterDay%30;
	if(easterDay == 0){
		easterDay = 30;
	}
	
	if(metk>15){
		easterMonth= 7;
		easterMonthName="day6"
		AmharicName = "መጋቢት";
		if(metk>30){
			easterMonth=8;
			easterMonthName="day7"
			AmharicName = "ሚያዚያ";
		}
	}
	else{
		easterMonth= 8;
		easterMonthName="day7"
		AmharicName = "ሚያዚያ";
		if(metk>30){
			easterMonth=9;
			easterMonthName="day10"
			AmharicName = "ግንቦት";
		}
	}
	
	 var choice1 = easterDay - 8+" "+AmharicName+" "+"ፋሲካ";
	return choice1;

	
	
}
module.exports.Easter = Easter;