$(function(){
	var jinru = function(index){
		move('#motion-2-2')
        .x(1200)
        .y(-240)
        //.set('transform','translate3d(1200px,-240px,0)')
        .delay('0s')
        .end();
        move('#motion-2-1')
        .x(70)
        .y(70)
		//.set('transform','translate3d(70px,70px,0)')
        .then()

        .rotate(270) 
        .pop()
        .delay('0s')
        .end(); 
        
       
	}
    var jinru2 = function(index){
        move('#motion-3-1')
        .scale(1)
        .delay('0s')
        .end();  
        move('#motion-3-2')
        .scale(1)
        .delay('0s')
        .end(); 
    }
    var jinru3 = function(index){
        move('#motion-4-1')
        .x(20)
        .y(70)
        .delay('0s')
        .end();  

        move('#motion-4-2-1')
        .x(-4)
        .y(0)
        .delay('0s')
        .end(); 
        move('#motion-4-2-2')
        .y(0)
        .delay('0s')
        .end();

        move('#motion-4-3')
        .x(0)
        .delay('0s')
        .end();

        move('#motion-4-4')
        .x(0)
        .delay('0s')
        .end();

        move('#motion-4-5')
        .scale(1)
        .delay('0s')
        .end();     
    }
    var likai = function(index){
        move('#motion-2-2')
        .set('transform','translate3d(1200px,-500px,0)')
        .delay('1s')
        .end();
        move('#motion-2-1')
        .set('transform','translate3d(70px,520px,0)')
        .delay('1s')
        .end();    

          
    }
    var likai2 = function(index){
        move('#motion-3-1')
        .scale(1.4)
        .delay('1s')
        .end();  
        move('#motion-3-2')
        .scale(1.4)
        .delay('1s')
        .end();
    }
	var likai3 = function(index){
        move('#motion-4-1')
        .x(20)
        .y(700)
        .delay('1s')
        .end();  

        move('#motion-4-2-1')
        .y(-350)
        .delay('1s')
        .end(); 
        move('#motion-4-2-2')
        .y(450)
        .delay('1s')
        .end(); 

        move('#motion-4-3')
        .x(0)
        .delay('1s')
        .end();

        move('#motion-4-4')
        .x(400)
        .delay('1s')
        .end();
         
        move('#motion-4-5')
        .scale(1.4)
        .delay('1s')
        .end();
    }
	$('#fullpage').fullpage({
        controlArrows:false,
        scrollingSpeed:1000,
        anchors:['page-1','page-2','page-3','page-4','page-5'],
        afterLoad:function(link,index){
        	switch(link){
        		case 'page-2':jinru();break;
                case 'page-3':jinru2();break;
                case 'page-4':jinru3();break;
        	}
        },
        onLeave:function(index,nextIndex,direction){
            switch(index){
                case 2:likai();break;
                case 3:likai2();break;
                case 4:likai3();break;
            }
        }
	})
})