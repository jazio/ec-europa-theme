<?php

/**
 * @file
 * Contains component file.
 */

/**
 * Implements hook_atomium_theme_HOOK().
 */
function europa_atomium_theme_logo() {
  return array(
    'logo' => array(
      'template' => 'logo',
      'variables' => array(
        'page_logo_title' => t('Home'),
      ),
    ),
  );
}

/**
 * Implements hook_atomium_definition_HOOK().
 */
function europa_atomium_definition_logo() {
  return array(
    'label' => 'Logo',
    'description' => 'Logo.',
    'preview' => array(),
  );
}

/**
 * Implements hook_preprocess_logo().
 */
function europa_preprocess_logo(&$variables) {
  global $base_url;
  $variables['link'] = $base_url;
}