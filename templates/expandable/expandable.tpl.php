<?php

/**
 * @file
 * Contains template file.
 */
?>
<div class="expandable">
  <?php foreach ($rows as $group => $expandable): ?>
  <div class="expandable__group">
    <a href="#<?php print $expandable->target; ?>" class="collapsed expandable__toggle" data-toggle="collapse" data-target="#<?php print $expandable->target; ?>" aria-expanded="false">
      <h3>
        <span class="<?php print $expandable->icon; ?>"></span>
          <?php print $expandable->title; ?>
      </h3>
    </a>
    <div id="<?php print $expandable->target; ?>" class="expandable__content collapse">
      <?php print $expandable->title; ?>
    </div>
  </div>
</div>
<?php endforeach; ?>
</div>