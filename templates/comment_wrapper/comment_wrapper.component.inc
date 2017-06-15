<?php

/**
 * @file
 * Contains component file.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function europa_preprocess_comment_wrapper(&$variables) {
  $variables['comment_count'] = '';
  if ($variables['node']->comment_count > 0) {
    $variables['comment_count'] = $variables['node']->comment_count;
  }
}