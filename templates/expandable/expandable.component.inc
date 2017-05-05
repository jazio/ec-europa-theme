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
      'rows' => array(
        array(
          'title' => 'Title line 1',
          'body' => 'Text block first Line 1',
          'id' => 'test1',
          'icon' => 'icon icon--yellowbg icon--growth',
        ),
        array(
          'title' => 'Title line 2.',
          'body' => 'Text block  line 2.',
          'id' => 'test2',
          'icon' => 'icon icon--yellowbg icon--energy',
        ),
        array(
          'title' => 'Title line 3.',
          'body' => 'Text block  last line 3.',
          'id' => 'test3',
          'icon' => 'icon icon--yellowbg icon--digital',
        ),
      ),
    ),
  );
}
