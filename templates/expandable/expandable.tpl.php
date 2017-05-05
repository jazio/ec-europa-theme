<?php

/**
 * @file
 * Contains template file.
 */
?>
<div class="expandable">
  <?php foreach ($rows as $group => $expandable): ?>
  <div class="expandable__group">
    <a href="#<?php print $expandable['id']; ?>" class="collapsed expandable__toggle" data-toggle="collapse" data-target="#<?php print $expandable['id']; ?>" aria-expanded="false">
      <h3>
        <span class="<?php print $expandable['icon']; ?>"></span>
          <?php print $expandable['title']; ?>
      </h3>
    </a>
    <div id="<?php print $expandable['id']; ?>" class="expandable__content collapse">
      <?php print $expandable['body']; ?>
    </div>
  </div>
<?php endforeach; ?>
</div>