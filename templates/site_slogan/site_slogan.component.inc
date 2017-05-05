<?php

/**
 * @file
 * Contains component file.
 */

/**
 * Implements hook_atomium_theme_HOOK().
 */
function europa_atomium_theme_site_slogan() {
  return array(
    'site_slogan' => array(
      'template' => 'site-slogan',
      'variables' => array(
        'markup' => NULL,
      ),
    ),
  );
}

/**
 * Implements hook_atomium_definition_HOOK().
 */
function europa_atomium_definition_site_slogan() {
  return array(
    'label' => 'Site slogan',
    'description' => 'Site slogan.',
    'preview' => array(
      'markup' =>
        array(
          '#markup' => 'European Union because simple is better!',
        ),
    ),
  );
}

/**
 * Implements hook_preprocess_HOOK().
 */
function europa_preprocess_site_slogan(&$variables, $hook) {
  if (drupal_is_front_page() && !empty(variable_get('site_slogan'))) {
    $variables['markup'] = array(
      'element' => array(
        '#type' => 'html_tag',
        '#tag' => 'p',
        '#value' => variable_get('site_slogan'),
      ),
    );
  }
}
