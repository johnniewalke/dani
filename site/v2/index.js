function abrirRota() {
    var destinoLat = -30.34433; // Latitude de destino desejada
    var destinoLng = -54.32789; // Longitude de destino desejada
  
    var url = `https://www.google.com/maps/dir/?api=1&destination=${destinoLat},${destinoLng}`;
    window.open(url, "_blank");
  }
  /*Carrossel Destaque*/
  $(document).ready(function(){
    $('.carrossel').slick({
      autoplay: true, // Inicia a rotação automática
      autoplaySpeed: 5000, // Tempo de exibição de cada imagem (em milissegundos)
      arrows: true, // Exibe as setas de navegação
      dots: false, // Esconde os indicadores de pontos
      infinite: true, // Navegação infinita
      speed: 500, // Velocidade da animação
      slidesToShow: 1, // Quantidade de slides exibidos por vez
      slidesToScroll: 1, // Quantidade de slides a serem movidos
      prevArrow: $('.bt_Anterior'),
      nextArrow: $('.bt_Proximo')
    });
  });