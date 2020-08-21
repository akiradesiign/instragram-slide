// Scroll Suave
  //  onclick="rolar_para('#ancora')"
  function rolar_para(elemento) {
      $('html, body').animate({
          scrollTop: $(elemento).offset().top-65
      }, 800);
  }

// Instagram Feed
  (function($){
    $(window).on('load', function(){
      $.instagramFeed({
        'username': 'rainhadosarmarinhos',
        'container': "#instagram-feed",
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'get_raw_json': false,
        'items': 5,
        'items_per_row': 3,
        'margin': 1 
        });
      });
  })(jQuery);

  var LoaderInstagram = setInterval(function() {
    if($('#instagram-feed div').hasClass('instagram_gallery')) {
      carrosselInstagram();
      clearInterval(LoaderInstagram);
    }
  }, 2000);

  function carrosselInstagram() {
    $('.load-instagram').fadeOut('fast');
    $('.instagram_gallery').fadeIn('slow');
    $('.instagram_gallery').slick({
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScrool: 3,
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


// Carrossel
  $('.carrossel-categories').slick({
    dots: false,
    slidesToShow: 3,
    infinite: true,
    slidesToScrool: 3,
    autoplay: true,
    arrows: true,
    autoplayspeed: 5000,
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

  $('.carrossel-launch').slick({
    dots: false,
    slidesToShow: 2,
    infinite: true,
    slidesToScrool: 2,
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

  $('.slide-top-content').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: $('.next-top'),
    prevArrow: $('.prev-top'),
  });

  $('.slide-estrutura').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrow-left-estrutura'),
    nextArrow: $('.arrow-right-estrutura'),
  });

  $('.slide-we-history').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.btns-produtos').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

// Produtos
  $('#organize-list').click(function(){
    $('#organize-list').addClass('org-btn-square-actived');
    $('#organize-squares').removeClass('org-btn-square-actived');
    $('.product-item').removeClass('col-md-4').addClass('col-md-12');
    $('.img-product').addClass('col-md-4');
    $('.shadow-product').addClass('col-md-4');
    $('.product').addClass('row');
    $('.infos-product').addClass('col-md-8').addClass('infos-product-list');
    $('.content-infos-product').addClass('row');
    $('.ds-content-infos-product').show().addClass('col-md-7').addClass('ds-content-infos-product-list');
    $('.rs-content-infos-product').addClass('col-md-5').addClass('rs-content-infos-product-list');
    $('.infos-product .btn-yellow').show();
  });

  $('#organize-squares').click(function(){
    $('#organize-list').removeClass('org-btn-square-actived');
    $('#organize-squares').addClass('org-btn-square-actived');
    $('.product-item').removeClass('col-md-12').addClass('col-md-4');
    $('.img-product').removeClass('col-md-4');
    $('.shadow-product').removeClass('col-md-4');
    $('.product').removeClass('row');
    $('.infos-product').removeClass('col-md-8').removeClass('infos-product-list');
    $('.content-infos-product').removeClass('row');
    $('.ds-content-infos-product').hide().removeClass('col-md-7').removeClass('ds-content-infos-product-list');
    $('.rs-content-infos-product').removeClass('col-md-5').removeClass('rs-content-infos-product-list');
    $('.infos-product .btn-yellow').hide();
  });

// Loader
  $(document).ready(function() {
    $('.pageloader').delay(5000).fadeOut("slow");
    $('.direitos-reservados').text("Todos os direitos reservados | 2020");
  });


// Navbar
  $('.account-menu-open').click(function(){
    if($('.account-menu').hasClass('account-menu-opened')) {
      $('.account-menu').slideUp(250).removeClass('account-menu-opened');
    } else {
      $('.account-menu').slideDown(250).addClass('account-menu-opened');
    }
  });

  $('.logout-menu').click(function(){
    console.log("Testeando");
      $.ajax({
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/logout.php',
        success: function(resposta) {
          window.location.href = "http://hellosummer.web70113.uni5.net/concepts/rainha-dos-armarinhos/svitrine/";
        }
      })
  });

  $('#hamburguer-desktop').click(function(){
    if($('#hamburguer-desktop-span').hasClass('hamburguer-x')){
      $('#hamburguer-desktop-span').removeClass('hamburguer-x');
      $('.itens-dark-menu-pc').slideUp(100);
    } else {
      $('#hamburguer-desktop-span').addClass('hamburguer-x');
      $('.itens-dark-menu-pc').slideDown(100);
    }
  });

  $(function() {
    var posElem = $('.navbar-queen').offset().top + $('.navbar-queen').height();

    var scr = $(window).scrollTop();

    $(window).scroll(function() {
      scr = $(window).scrollTop();

      if(parseInt(posElem) < parseInt(scr)){
        $('#navbar-top-fixed').slideDown('fast');
      }
      if(parseInt(posElem) > parseInt(scr)){
        $('#navbar-top-fixed').slideUp(100);
        $('#hamburguer-desktop-span').removeClass('hamburguer-x');
        $('.itens-dark-menu-pc').slideUp(100);
      }
    });
  });

  $('.btn-hamburguer-mobile').click(function(){
    if($('.btn-hamburguer-mobile span').hasClass('hamburguer-x')) {
      $('.btn-hamburguer-mobile span').removeClass('hamburguer-x');
      $('.itens-menu-mobile').animate({left: '-100%'},300);
    } else {
      $('.btn-hamburguer-mobile span').addClass('hamburguer-x');
      $('.itens-menu-mobile').animate({left: '0%'},300);
    }
  });


// Article Sidebar
$('#categorias-sidebar-artigo').click(function(){
  if ($('#c-categorias-sidebar-artigo').is(':visible')) {
    $('#c-categorias-sidebar-artigo').slideUp();
    $('#i-categorias-sidebar-artigo').text('+');
  } else {
    $('#c-categorias-sidebar-artigo').slideDown();
    $('#i-categorias-sidebar-artigo').text('-');
  }
});

$('#relacionadas-sidebar-artigo').click(function(){
  if ($('#c-relacionadas-sidebar-artigo').is(':visible')) {
    $('#c-relacionadas-sidebar-artigo').slideUp();
    $('#i-relacionadas-sidebar-artigo').text('+');
  } else {
    $('#c-relacionadas-sidebar-artigo').slideDown();
    $('#i-relacionadas-sidebar-artigo').text('-');
  }
});


// Produto
  $('#aumenProd').click(function(){
    var qtProdText = $('#quantProd').val();
    var qtProd = parseInt(qtProdText);
    if(qtProd < 99) {
      $('#quantProd').val(qtProd = qtProd + 1);
    }
  });

  $('#reduzProd').click(function(){
    var qtProdText = $('#quantProd').val();
    var qtProd = parseInt(qtProdText);
    if(qtProd > 1) {
      $('#quantProd').val(qtProd = qtProd - 1);
    }
  });

  $('#quantProd').mask('99');

  $('.mask-pass').mask('ZZZZZZZZZZZZZZZZZZZZ',
    {translation: {
      'Z': {pattern: /[a-zA-Z0-9]/, optional: true}
    }
  });

  $('.slider-for-prod').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav-prod'
  });
  $('.slider-nav-prod').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for-prod',
    focusOnSelect: true
  });


  $('#open-desc').click(function(){
    $('#desc-product').show();
    $('#infos-product').hide();
    $('#open-desc').removeClass('btn-transparent')
    $('#open-infos').addClass('btn-transparent')
  })

  $('#open-infos').click(function(){
    $('#desc-product').hide();
    $('#infos-product').show();
    $('#open-infos').removeClass('btn-transparent')
    $('#open-desc').addClass('btn-transparent')
  })


// Mascaras
  var behaviorcel = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 0 0000-0000' : '(00) 0000-00009';
  },
  optionscel = {
      onKeyPress: function (val, e, field, options) {
          field.mask(behaviorcel.apply({}, arguments), optionscel);
      }
  };
  $('.mask-cel').mask(behaviorcel, optionscel);

  $('.mask-tel').mask('(00) 0000-0000');

  $('.mask-date').mask('00/00/0000')

  var behaviorcpfcnpj = function (val) {
    return val.replace(/\D/g, '').length <= 11 ? '000.000.000-009' : '00.000.000/0000-00';
  },
  optionscpfcnpj = {
    onKeyPress: function (val, e, field, options) {
      field.mask(behaviorcpfcnpj.apply({}, arguments), optionscpfcnpj)
    }
  };
  $(".mask-cpfcnpj").mask(behaviorcpfcnpj, optionscpfcnpj);

  $(".mask-cpf").mask('000.000.000-00');
  $(".mask-cnpj").mask('00.000.000/0000-00');


// Fale Conosco
  $('.fale-conosco .return').click(function(){
    $('#ctt-base').show();
    $('#ctt-sac').hide();
    $('#ctt-doubt').hide();
    $('#ctt-suggestion').hide();
    $('#ctt-other').hide();
    $('#form-sac').trigger('reset');
    $('#form-outro').trigger('reset');
    $('#form-sugestao').trigger('reset');
    $('#form-duvida').trigger('reset');
  });

  $('#ctt-open-sac').click(function(){
    $('#ctt-base').hide();
    $('#ctt-sac').show();
  })

  $('#ctt-open-suggestion').click(function(){
    $('#ctt-base').hide();
    $('#ctt-suggestion').show();
  })

  $('#ctt-open-doubt').click(function(){
    $('#ctt-base').hide();
    $('#ctt-doubt').show();
  })

  $('#ctt-open-other').click(function(){
    $('#ctt-base').hide();
    $('#ctt-other').show();
  })

// Formularios
  function showNotify(type,text) {
    $('.alert').hide();
    $(type).text(text).fadeIn(150).delay(2000).fadeOut(150);
  }

  $('#form-sugestao').validate({
    errorPlacement: function(error, element) {
        error.appendTo();
    },
    rules: {
      txtNome: {required: true, minlength: 2, number: false},
      txtTelefone: {required: true, minlength: 14},
      txtEmail: {required: true, email: true},
      txtAssunto: {required: true},
      txtMensagem: {required: true, minlength: 5}
    },
    invalidHandler: function(event, validator) {
      showNotify('#errornotify','Preencha todos os campos corretamente');
    },
    submitHandler: function(form) {
      var dados = $(form).serialize();
      $('#form-sugestao button').text("Enviando...");
      $('#form-sugestao button').attr("disabled", true);

      $.ajax({
        type: 'POST',
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/contato-enviar.php',
        data: dados,
        success: function(resposta) {
          $('#form-sugestao button').text("Enviar");
          $('#form-sugestao button').attr("disabled", false);
          if(resposta == true) {
              showNotify('#successnotify','Contato enviado com sucesso');
              $('#form-sugestao').trigger('reset');
            } else {
              showNotify('#errornotify','Erro no envio, tente novamente');
          }
        }
      })
    }
  });


  $('#form-duvida').validate({
    errorPlacement: function(error, element) {
        error.appendTo();
    },
    rules: {
      txtNome: {required: true, minlength: 2, number: false},
      txtTelefone: {required: true, minlength: 14},
      txtEmail: {required: true, email: true},
      txtAssunto: {required: true},
      txtMensagem: {required: true, minlength: 5}
    },
    invalidHandler: function(event, validator) {
      showNotify('#errornotify','Preencha todos os campos corretamente');
    },
    submitHandler: function(form) {
      var dados = $(form).serialize();
      $('#form-duvida button').text("Enviando...");
      $('#form-duvida button').attr("disabled", true);

      $.ajax({
        type: 'POST',
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/contato-enviar.php',
        data: dados,
        success: function(resposta) {
          $('#form-duvida button').text("Enviar");
          $('#form-duvida button').attr("disabled", false);
          if(resposta == true) {
              showNotify('#successnotify','Contato enviado com sucesso');
              $('#form-duvida').trigger('reset');
            } else {
              showNotify('#errornotify','Erro no envio, tente novamente');
          }
        }
      })
    }
  });

  $('#form-sac').validate({
    errorPlacement: function(error, element) {
        error.appendTo();
    },
    rules: {
      txtNome: {required: true, minlength: 2, number: false},
      txtCelular: {required: true, minlength: 16},
      txtTelefone: {required: true, minlength: 14},
      txtEmail: {required: true, email: true},
      txtMensagem: {required: true, minlength: 5}
    },
    invalidHandler: function(event, validator) {
      showNotify('#errornotify','Preencha todos os campos corretamente');
    },
    submitHandler: function(form) {
      var dados = $(form).serialize();
      $('#form-sac button').text("Enviando...");
      $('#form-sac button').attr("disabled", true);

      $.ajax({
        type: 'POST',
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/contato-enviar.php',
        data: dados,
        success: function(resposta) {
          $('#form-sac button').text("Enviar");
          $('#form-sac button').attr("disabled", false);
          if(resposta == true) {
              showNotify('#successnotify','Contato enviado com sucesso');
              $('#form-sac').trigger('reset');
            } else {
              showNotify('#errornotify','Erro no envio, tente novamente');
          }
        }
      })
    }
  });

  $('#form-outro').validate({
    errorPlacement: function(error, element) {
        error.appendTo();
    },
    rules: {
      txtNome: {required: true, minlength: 2, number: false},
      txtTelefone: {required: true, minlength: 14},
      txtEmail: {required: true, email: true},
      txtAssunto: {required: true},
      txtMensagem: {required: true, minlength: 5}
    },
    invalidHandler: function(event, validator) {
      showNotify('#errornotify','Preencha todos os campos corretamente');
    },
    submitHandler: function(form) {
      var dados = $(form).serialize();
      $('#form-outro button').text("Enviando...");
      $('#form-outro button').attr("disabled", true);

      $.ajax({
        type: 'POST',
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/contato-enviar.php',
        data: dados,
        success: function(resposta) {
          $('#form-outro button').text("Enviar");
          $('#form-outro button').attr("disabled", false);
          if(resposta == true) {
              showNotify('#successnotify','Contato enviado com sucesso');
              $('#form-outro').trigger('reset');
            } else {
              showNotify('#errornotify','Erro no envio, tente novamente');
          }
        }
      })
    }
  });


// Acesso/Registro
  $('.recommend-pass').focusout(function(){
    setTimeout(function(){
      $('.alert-pass').slideUp(150);
    }, 2000);
  });

  $('.recommend-pass').focus(function(){
      $('.alert-pass').slideDown(150);
  });

  $('#txtCPFCNPJ').focusout(function() {
    var value = $('#txtCPFCNPJ').val();
    if(value.length == 14) {
      $('.posCPFCNPJ').show();
      $('.ifCPF').show();
      $('.ifCNPJ').hide();
      $('.posCPFCNPJ input').val("");
      $('.posCPFCNPJ select').val("");
    } else {
      if(value.length > 14) {
        $('.posCPFCNPJ').show();
        $('.ifCPF').hide();
        $('.ifCNPJ').show();
        $('.posCPFCNPJ input').val("");
        $('.posCPFCNPJ select').val("");
      } else {
        $('.posCPFCNPJ').hide();
        $('.posCPFCNPJ input').val("");
        $('.posCPFCNPJ select').val("");
      }
    }
  });

  $('#form-login').validate({
    errorPlacement: function(error, element) {
        error.appendTo();
    },
    rules: {
      txtEmail: {required: true, email: true},
      txtSenha: {required: true}
    },
    invalidHandler: function(event, validator) {
      showNotify('.errornotify','Preencha todos os campos corretamente');
    },
    submitHandler: function(form) {
      var dados = $(form).serialize();
      $('#form-login button').text("Criando...");
      $('#form-login button').attr("disabled", true);

      $.ajax({
        type: 'POST',
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/login.php',
        data: dados,
        success: function(resposta) {
          $('#form-login button').text("Criar");
          $('#form-login button').attr("disabled", false);
          if(resposta == 'Acessada') {
                showNotify('.successnotify','Conta acessada, aguarde...');
              setTimeout(function() {
                location.reload();
              }, 400);
            } else {
              showNotify('.errornotify',resposta);
          }
        }
      })
    }
  })

  $('#form-register').validate({
    errorPlacement: function(error, element) {
      error.appendTo();
    },
    rules: {
      txtNome: {required: true, minlength: 2},
      txtEmail: {required: true, email: true},
      txtSenha: {required: true},
      txtCPFCNPJ: {required: true, minlength: 14, verificaCPFCNPJ: true},
      txtCelular: {required: true, minlength: 14},
      txtTelefone: {minlength: 14, required: false},
      txtData: {required: true, minlength: 10},
      txtGenero: {required: true}
    },
    invalidHandler: function(event, validator) {
      showNotify('#errornotify','Preencha todos os campos corretamente');
    },
    submitHandler: function(form) {
      var dados = $(form).serialize();
      $('#form-register button').text("Criando...");
      $('#form-register button').attr("disabled", true);

      $.ajax({
        type: 'POST',
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/register.php',
        data: dados,
        success: function(resposta) {
          $('#form-register button').text("Criar");
          $('#form-register button').attr("disabled", false);
          if(resposta == 'Registrado com sucesso') {
              showNotify('.successnotify','Conta criada com sucesso');
              $('#form-register').trigger('reset');
              $('.posCPFCNPJ').hide();
              $('#modalRegister').modal('hide');
              $('#modalLogin').modal('show');
            } else {
              showNotify('.errornotify',resposta);
          }
        }
      })
    }
  });

  $('.open-modal-register').click(function(){
    $('#modalLogin').modal('hide');
    $('#modalRegister').modal('show');
  });

  $('.eye-pass').click(function(){
    if($('.txtSenha').hasClass('eye-pass-actived')) {
      $('.txtSenha').attr('type', 'password');
      $('.txtSenha').removeClass('eye-pass-actived');
      $('.eye-pass').removeClass('fa-eye-slash');
      $('.eye-pass').addClass('fa-eye');
    } else {
      $('.txtSenha').attr('type', 'text');
      $('.txtSenha').addClass('eye-pass-actived');
      $('.eye-pass').addClass('fa-eye-slash');
      $('.eye-pass').removeClass('fa-eye');
    }
  })

// Valida CPF/CNPJ
  jQuery.validator.addMethod("verificaCPFCNPJ", function(value, element) {
      value = value.replace('.','');
      value = value.replace('.','');
      value = value.replace('-','');
      value = value.replace('/','');
      if(value.length <= 12) {
        cpf = value;
        while(cpf.length < 11) cpf = "0"+ cpf;
        var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
        var a = [];
        var b = new Number;
        var c = 11;
        for (i=0; i<11; i++){
            a[i] = cpf.charAt(i);
            if (i < 9) b += (a[i] * --c);
        }
        if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
        b = 0;
        c = 11;
        for (y=0; y<10; y++) b += (a[y] * c--);
        if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
        if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) return false;
        return true;
      } else {
        cnpj = value;
        if (cnpj.length != 14)
        return false;
     
        if (cnpj == "00000000000000" || 
            cnpj == "11111111111111" || 
            cnpj == "22222222222222" || 
            cnpj == "33333333333333" || 
            cnpj == "44444444444444" || 
            cnpj == "55555555555555" || 
            cnpj == "66666666666666" || 
            cnpj == "77777777777777" || 
            cnpj == "88888888888888" || 
            cnpj == "99999999999999")
            return false;
             
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0,tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
             
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
              return false;
               
        return true;
      }
  }, "Inválido");

// Editar Conta
  $('#edit-form-account').click(function(){
    $('#dados-edit input').attr('disabled', false);
    $('#dados-edit select').attr('disabled', false);
    $('#dados-edit .mask-cpf').attr('disabled', true);
    $('#edit-form-account').hide();
    $('#cancel-form-account').show();
    $('#dados-edit .edit-password').slideDown(250);
  });

  $('#edit-password-form-account').click(function(){
    $('#dados-edit .edit-password-new').slideDown(250);
    $('#edit-password-form-account').hide();
  });

  $('#cancel-form-account').click(function(){
    $('#dados-edit input').attr('disabled', true);
    $('#dados-edit select').attr('disabled', true);
    $('#cancel-form-account').hide();
    $('#edit-form-account').show();
    $('#dados-edit .edit-password').slideUp(250);
    $('#dados-edit .edit-password-new').slideUp(250);
    $('#edit-password-form-account').show();
    $('#dados-edit #txtSenha').val('');
    $('#dados-edit #txtSenhaC').val('');
  });

  $('#dados-edit').validate({
    errorPlacement: function(error, element) {
        error.appendTo();
    },
    rules: {
      txtNome: {required: true, minlength: 2, number: false},
      txtCelular: {required: true, minlength: 14},
      txtTelefone: {required: false, minlength: 14},
      txtEmail: {required: true, email: true},
      txtAssunto: {required: true},
      txtMensagem: {required: true, minlength: 5}
    },
    invalidHandler: function(event, validator) {
      $('#errordiv').text("Preencha todos os campos corretamente").fadeIn(400).delay(5000).fadeOut(400);
    },
    submitHandler: function(form) {
      var dados = $(form).serialize();
      $('#dados-edit button').text("Enviando...");
      $('#dados-edit button').attr("disabled", true);

      $.ajax({
        type: 'POST',
        url: document.location.origin + '/concepts/rainha-dos-armarinhos/svitrine/wp-content/themes/summer/templates/update-cpf.php',
        data: dados,
        success: function(resposta) {
          $('#dados-edit button').text("Enviar");
          $('#dados-edit button').attr("disabled", false);
          if(resposta == 'Alterado') {
              $('#sucessdiv').text("Dados alterados com sucesso").fadeIn(400).delay(5000).fadeOut(400);
              $('#dados-edit input').attr('disabled', true);
              $('#dados-edit select').attr('disabled', true);
              $('#edit-form-account').show();
              $('#cancel-form-account').hide();
              $('#dados-edit #txtSenha').val('');
              $('#dados-edit #txtSenhaC').val('');
              $('#dados-edit .edit-password').slideUp(250);
              $('#dados-edit .edit-password-new').slideUp(250);
              $('#edit-password-form-account').show();
            } else {
              $('#errordiv').text(resposta).fadeIn(400).delay(5000).fadeOut(400);
          }
        }
      })
    }
  });