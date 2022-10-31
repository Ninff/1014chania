$(document).ready(function(){
	$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
		
	});
	//햄버거 아이콘 클릭
	$("header button").click(function(){
		$("#black").fadeIn("fast");
		$("nav").animate({left:0},"slow");
		});
		
//메뉴 항목 클릭시 메뉴가 들어가고 슬라이드 이동..
$("nav a").click(function(){
	$("#black").fadeOut("fast");
	$("nav").animate({left:"-61%"});
});

//fade 애니메이션(자동기능)
setInterval(fade, 1800); //1.8초마다 함수를 트리거 한다..
let i = 2; //i는 index의 줄인말 이다.
function fade(){
	$("figure img").eq(i).fadeOut(1500);
	i --; // 마이너스(-)는 무조건 하나에 -1와 같다.
	if(i == -1){		//if 문은 말 그대로 .. 만약에.. ( 혹은 해당 조건에 만족 한다면~)
		console.log(i == -1);
		$("figure img").fadeIn(1500);
		i =2;  // .eq(2) 로 써두면 처음에 정해둔 사진으로 돌아가는 값이 없기 때문에 i로 고정하고 마지막에 그 i가 어떤 값이냐 를 정한것.
		
	}
}
});