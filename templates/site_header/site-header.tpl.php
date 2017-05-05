<?php

/**
 * @file
 * Contains component file.
 */
?>
  <div class="ecl-container">
    <?php print render($logo); ?>
    <?php print render($site_slogan); ?>
    <section class="top-bar" aria-label="Site tools">
      <div class="top-bar__wrapper">
        <?php print render($lang_select_site); ?>
        <?php print render($search_bar); ?>
         <h1 class="sr-only"><?php print $site_name; ?></h1>
      </div>
    </section>
  </div>
