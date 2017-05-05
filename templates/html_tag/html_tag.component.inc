<?php

/**
 * @file
 * Contains component file.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function europa_preprocess_html_tag(&$variables, $hook) {
  $headers = array('h1', 'h2', 'h3', 'h4');

  if(in_array($variables['element']['#tag'] == 'h2', $headers)) {
    $variables['attributes_array']['class'][] = 'ecl-' . $variables['element']['#tag'];
  }
}