/**
 * @file altereditor_ckeditor_config.js
 *
 * Custom configuration for CKEditor.
 * Code snippets adapted from Philip Norton's blog post http://www.hashbangcode.com/blog/drupal-wysiwyg-module-custom-ckeditor-configuration
 */

/**
 * Set up custom configurations for the CKEditor editor.
 */
CKEDITOR.editorConfig = function(config) {

  // Allow <i class="xyz"></i> for Font Awesome.
  //config.protectedSource.push( /<i class=\".*\"\><\/i\>/g );

  // Allow <div class="xyz"></div> tags through.
  //config.protectedSource.push( /<div class=\".*\"\>.*?<\/div\>/g );

  // Activate automatic AFC mode (if not already set) to alow script tag
  config.allowedContent = true;
};
