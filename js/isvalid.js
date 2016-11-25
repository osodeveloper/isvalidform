var formulario = $("#form_reg")

function isValidForm(form){
  var config = {}
  var rcheck = 0
  var ccheck = 0
  for (var i = 0; i < form[0].length; i++) {
    if (form[0][i]['tagName'] == 'INPUT' || form[0][i]['tagName'] == 'TEXTAREA' || form[0][i]['tagName'] == 'SELECT') {
      if (form[0][i]['type'] !== 'reset' && form[0][i]['type'] !== 'submit' && form[0][i]['type'] !== 'button' && form[0][i]['type'] !== 'url' && form[0][i]['type'] !== 'tel') {
        config[i] = form[0][i]
        config[i]['estado'] = false
        if (config[i]['tagName'] == 'SELECT') {
          if (config[i]['value'] !== config[i][0]['value'] || config[i]['value'] !== config[i][0]['textContent']) {
            config[i]['estado'] = true
            $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
            $(form[0][i]['parentElement']).addClass('has-success has-feedback')
          }else {
            $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
            $(form[0][i]['parentElement']).addClass('has-error has-feedback')
          }
        }
        switch (config[i]['type'].toLowerCase()) {
          case 'email':
            if (isEmail(config[i]['value'])) {
              config[i]['estado'] = true
              $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
              $(form[0][i]['parentElement']).find('span#icon').remove()
              $(form[0][i]['parentElement']).addClass('has-success has-feedback').append(`<span id="icon" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>`)
            }else {
               $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
               $(form[0][i]['parentElement']).find('span#icon').remove()
               $(form[0][i]['parentElement']).addClass('has-error has-feedback').append(`<span id="icon" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>`)
            }
            break;
          case 'number':
            if (isNumber(config[i]['value'])) {
              config[i]['estado'] = true
              $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
              $(form[0][i]['parentElement']).find('span#icon').remove()
              $(form[0][i]['parentElement']).addClass('has-success has-feedback').append(`<span id="icon" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>`)
            }else {
               $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
               $(form[0][i]['parentElement']).find('span#icon').remove()
               $(form[0][i]['parentElement']).addClass('has-error has-feedback').append(`<span id="icon" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>`)
            }
            break;
          case 'checkbox':
            if (ccheck > 0) {
              config[i]['estado'] = true
            }else {
              if (config[i]['checked']) {
                config[i]['estado'] = true
                ccheck += 1
              }
            }
            break;
          case 'radio':
            if (rcheck > 0) {
              config[i]['estado'] = true
            }else {
              if (config[i]['checked']) {
                config[i]['estado'] = true
                rcheck += 1
              }
            }
          break;
          case 'date':
            if (config[i]['value'] !== "") {
              config[i]['estado'] = true
              $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
              $(form[0][i]['parentElement']).find('span#icon').remove()
              $(form[0][i]['parentElement']).addClass('has-success has-feedback').append(`<span id="icon" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>`)
            }else {
               $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
               $(form[0][i]['parentElement']).find('span#icon').remove()
               $(form[0][i]['parentElement']).addClass('has-error has-feedback').append(`<span id="icon" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>`)
            }
            break;
          case 'text':
          case 'password':
          case 'search':
            var data = config[i]['value'].trim()

            if (data !== "") {
              config[i]['estado'] = true

              $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
              $(form[0][i]['parentElement']).find('span#icon').remove()
              $(form[0][i]['parentElement']).addClass('has-success has-feedback').append(`<span id="icon" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>`)
            }else {
               $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
               $(form[0][i]['parentElement']).find('span#icon').remove()
               $(form[0][i]['parentElement']).addClass('has-error has-feedback').append(`<span id="icon" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>`)
            }
            break;

          case 'range':
            config[i]['estado'] = true
            break;
          case 'textarea':
            var data = config[i]['value'].trim()
            if (data !== "") {
              config[i]['estado'] = true
              $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
              $(form[0][i]['parentElement']).find('span#icon').remove()
              $(form[0][i]['parentElement']).addClass('has-success has-feedback').append(`<span id="icon" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>`)
            }else {
               $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
               $(form[0][i]['parentElement']).find('span#icon').remove()
               $(form[0][i]['parentElement']).addClass('has-error has-feedback').append(`<span id="icon" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>`)
            }
          case 'file':
            var data = config[i]['value'].trim()
            if (data !== "") {
              config[i]['estado'] = true
              $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
              $(form[0][i]['parentElement']).find('span#icon').remove()
              $(form[0][i]['parentElement']).addClass('has-success has-feedback').append(`<span id="icon" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>`)
            }else {
               $(form[0][i]['parentElement']).removeClass('has-error has-success has-feedback')
               $(form[0][i]['parentElement']).find('span#icon').remove()
               $(form[0][i]['parentElement']).addClass('has-error has-feedback').append(`<span id="icon" class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>`)
            }
            break;
          default:
        }
      }
    }
  }

  function isEmail(p) {
    var email = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return email.test(p);
  }
  function isNumber(p){
    return $.isNumeric(p)
  }
  function cantidad(p) {
    return Object.keys(p).length
  }
}

$("#btn_enviar").on('click', function(){
  isValidForm(formulario)
})
