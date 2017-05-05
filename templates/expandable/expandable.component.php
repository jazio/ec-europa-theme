<?php

/**
 * @file
 * Contains component file.
 */

/**
 * Implements hook_atomium_theme_HOOK().
 */
function europa_atomium_theme_expandable() {
  return array(
    'expandable' => array(
      'variables' => array(
        'title' => NULL,
        'rows' => NULL,
      ),
      'template' => 'expandable',
    ),
  );
}

/**
 * Implements hook_atomium_definition_HOOK().
 */
function europa_atomium_definition_expandable() {
  return array(
    'label' => 'Expandable',
    'description' => 'Expandable layout.',
    'preview' => array(
      'title' => 'A expandable row template',
      'rows' => array(
        array(
          'Title line 1',
          'Text block first Line 1'
        ),
        array(
          'Title line 2.',
          'Text block  line 2.'
        ),
        array(
          'Title line 3.',
          'Text block  last line 3.'
        ),
      ),
    ),
  );
}
