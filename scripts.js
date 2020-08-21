// Instagram Feed
  // Obtem as fotos do Instagram
  (function($){
    $(window).on('load', function(){
      $.instagramFeed({
        'username': 'rainhadosarmarinhos', // Perfil de onde serão obtidas as fotos
        'container': "#instagram-feed", // Container onde serão aplicadas as imagens (recomendado aplicar Display: none)
        'display_profile': false, // Bloqueando a exibição do perfil
        'display_biography': false, // Bloqueando a exibição da biografia
        'display_gallery': true, // Ativando a exibição da galeria
        'get_raw_json': false,
        'items': 5, // Quantidade de itens que irá obter
        'items_per_row': 3, // Itens por linha
        'margin': 1  // Margem entre cada item
        });
      });
  })(jQuery);

  // Cria uma verificação a cada 2 segundos para ativar o slide
  var LoaderInstagram = setInterval(function() {
    if($('#instagram-feed div').hasClass('instagram_gallery')) { // Verifica se existe a Class dentro da DIV do container principal
      carrosselInstagram(); // Executa a função caso encontre uma DIV dentro do Container principal
      // O instagramfeed.js cria uma div dentro do container principal quando carregado
      clearInterval(LoaderInstagram); // Limpa o intervalo
    }
  }, 2000);

  // Aplica o slide
  function carrosselInstagram() {
    $('.instagram_gallery').fadeIn('slow'); // Exibe a galeria lentamente
    $('.instagram_gallery').slick({
      dots: false, // Desativa os DOTS do Slide
      infinite: true, // Ativa o scroll infinito
      arrows: false, // Desativa as setas do Slide
      slidesToShow: 3, // Quantos itens mostrar de cada vez
      slidesToScrool: 3,
      // Responsividade para Mobile, exibindo apenas 1 item por vez
      responsive: [ 
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplayspeed: 5000
          }
        }
      ]
    });
  }
