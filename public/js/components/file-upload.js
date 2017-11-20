/**
 * @file
 * File component related behaviors.
 */

(function ($) {
  Drupal.behaviors.dt_file_upload = {
    attach: function (context) {
      $('input[type="file"]').each(function () {
        var $input_file = $(this),
            $parent = $input_file.parent(),
            $message = $parent.find('.file-upload__message');

        if ($input_file.hasClass('error')) {
          $parent.prev().addClass('error');
          $main_messages = $('.messages.error').first().text();
          $text = Drupal.t('File field is required.');

          if ($main_messages.indexOf($text) !== -1) {
            $parent.after('<div class="alert messages--error messages messages--form file-upload-js-error" aria-live="polite" role="alert">\
            <button type="button" class="close" data-dismiss="alert">\
              <span aria-hidden="true">&times;</span>\
              <span class="sr-only">Close</span>\
            </button><p>' + $text + '</p></div>');
          }
        }

        setTimeout(function () {
          $input_file.on('change', function (event) {
            if (this.files && event.target.value) {
              // The value comes in the form of C:\something\fileName.
              var filename = event.target.value.split('\\').pop();
              // Show the selected filename in the field.
              $message.html(filename);
            }
            else {
              $message.html(Drupal.t('No file selected.'));
            }
          });
        }, 5000);

      });
    }
  };
})(jQuery);
