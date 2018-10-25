
let $img = $('img');
let $container = $('.grid-container');
let imageClasses = [];

   $img.on('mouseenter', (event) => {

   	let hoveredClassName = event.target.className;   	
   	let curClass;
   	let includeClass;
   	
   	for (let i = 3; i < 8; i++) { // First 3 elements are buttons
   	curClass = $container[0].childNodes[i].firstChild.className;
   	imageClasses.push(curClass);
	   	if (curClass !== hoveredClassName) {
	   		$(`.${curClass}`).css('opacity','0.5');
	   	}
   	}
 });

  $img.on('mouseleave', (event) => {
    
    let curClass;

   	for (let i = 0; i < imageClasses.length; i++) {
   		$(`.${imageClasses[i]}`).css('opacity','1');
   	}
  });
