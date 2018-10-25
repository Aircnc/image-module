
let $img = $('img');
let $container = $('.grid-container');
let imageClasses = [];

   $img.on('mouseenter', (event) => {

   	let hoveredClassName = event.target.className;
   	console.log(hoveredClassName);
   	
   	let curClass;

   	console.log($container[0].childNodes);
   	console.log('hoveredClassName: ', hoveredClassName);

   	for (let i = 0; i < 5; i++) {

   	curClass = $container[0].childNodes[i].firstChild.className;
   	parentClass = $container[0].childNodes[i].className;
   	imageClasses.push(parentClass);
   	console.log('curClass:', curClass);
   	console.log('parentClass:', parentClass);

	   	if (curClass !== hoveredClassName) {
	   		$(`.${parentClass}`).css('opacity','0.5');
	   	}
   	}

 });

  $img.on('mouseleave', (event) => {
  	console.log('mouseleave');
    let curClass;

   	for (let i = 0; i < imageClasses.length; i++) {
   	console.log('curClass in mouseleave:', curClass);
   		$(`.${imageClasses[i]}`).css('opacity','1');
   	}
  });
