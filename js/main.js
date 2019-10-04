document.addEventListener('DOMContentLoaded', () => {
    
    //let controller = new ScrollMagic.Controller();


    let timeline = new TimelineMax();
    timeline
    .from('.section_1_01', 4, {
        y: -100,
        x:   -150,
        ease: Power3.easeInOut
    })
    .from('.section_1_02', 4, {
        y: -150,
        x: -250,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_03', 4, {
        y: -80,
        x: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_04', 4, {
        y: -100,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_05', 4, {
        y: -80,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_06', 4, {
        y: -100,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_07', 4, {
        y: -50,
        x: -150,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_08', 4, {
        y: 50,
        x: -350,
        ease: Power3.easeInOut
    }, '-=4')
    .from('.section_1_09', 4, {
        y: 100,
        x: -200,
        ease: Power3.easeInOut
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        /*El valor para triggerElement será un elector, un objeto DOM o un objeto jQuery que 
        define el inicio de la escena. 
        Si no está definida, la escena comenzará justo al comienzo de la página 
        (a menos que se establezca un desplazamiento). 
        En nuestro caso usamos .first-section.*/
        duration: '100%',
        /*Como setter , acepta tres tipos de parámetros:
number: Establece la duración de la escena exactamente a esta cantidad de píxeles. 
Esto significa que la escena durará exactamente esta cantidad de píxeles desplazados. Los subpíxeles también son válidos. 
Un valor de 0 significa que la escena es 'final abierto' y no se activará ningún final. Los pines nunca se desanclarán y las animaciones se reproducirán independientemente del progreso del desplazamiento.
string: Siempre actualiza la duración relativa al contenedor de desplazamiento principal. 
Por ejemplo "100%", mantendrá la duración siempre exactamente a la altura interna del contenedor de desplazamiento. 
Al desplazarse verticalmente, el ancho se usa como referencia respectivamente.
function: Se llamará a la función suministrada para devolver la duración de la escena. 
Esto es útil en configuraciones donde la duración depende de otros elementos que pueden cambiar de tamaño. Al proporcionar una función, puede devolver un valor en lugar de actualizar potencialmente varias duraciones de escena. 
Se puede hacer referencia a la escena dentro de la devolución de llamada utilizando this.  */
        triggerHook: 0,

        offset: '300',

    })

    .setTween(timeline)
    .setPin('.first-section')
    .addIndicators({
        name:'Primera',
        colorTrigger: 'black',
        colorStart: 'green',
    })
    .addTo(controller);
    


  /*  let timeline2 = new TimelineMax();
    timeline2
    .to('.top .image-container', 4, {
        height: 0
    }); */

    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline2)
    .setPin('.second-section')

    .addIndicators({
        name:'segunda',
        colorTrigger: 'black',
        colorStart: 'green',
    })
    .addTo(controller);

    let timeline3 = new TimelineMax();
    timeline3
    .to('.section_3_01', 4, {
        y: -250,
        ease: Power3.easeInOut
    })
    .to('.section_3_02', 4, {
        y: -200,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_03', 4, {
        y: -100,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_04', 4, {
        y: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_05', 4, {
        y: 150,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_3_06', 4, {
        y: 250,
        ease: Power3.easeInOut
    }, '-=4')

  let scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    }) 
    .setTween(timeline3)
    .setPin('.third-section')
    .addIndicators({
        name:'tercera',
        colorTrigger: 'black',
        colorStart: 'green',
    })
    .addTo(controller);

    let timeline4 = new TimelineMax();
    timeline4
    .to('.section_4_01', 4, {
        autoAlpha: 0
    })
    .from('.section_4_02', 4, {
        autoAlpha: 0
    }, '-=4')
    .from('.section_4_03', 4, {
        autoAlpha: 0
    })
    .from('.section_4_04', 4, {
        autoAlpha: 0
    })

    let scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
    .setTween(timeline4)
    .setPin('.forth-section')
    .addIndicators({
        name:'cuarta',
        colorTrigger: 'black',
        colorStart: 'green',
    })
    .addTo(controller);
})
