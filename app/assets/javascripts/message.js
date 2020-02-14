$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="message-box" data-message-id=${message.id}>
          <div class="message-top">
            <div class="message-top__name">
              ${message.user_name}
            </div>
            <div class="message-top__time">
              ${message.created_at}
            </div>
          </div>
          <div class="message-comment">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="message-box" data-message-id=${message.id}>
          <div class="message-top">
            <div class="message-top__name">
              ${message.user_name}
            </div>
            <div class="message-top__time">
              ${message.created_at}
            </div>
          </div>
          <div class="message-comment">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $(".send-button").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function() {
      $(".send-button").prop("disabled", false);
    });
  });

});