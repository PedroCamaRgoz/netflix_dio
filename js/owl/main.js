$('.owl-carousel').owlCarousel({

    loop:true,
    margin:7,
    nav:false,
    responsive:{          //qtd de itens por tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }

    }


})