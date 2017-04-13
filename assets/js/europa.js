(function (exports) {
'use strict';

/**
 * File uploads related behaviors.
 */

// eslint-disable-next-line import/prefer-default-export
function fileUpload() {
  console.error('This script needs to be rewritten without jQuery');
}

/**
 * Breadcrumb related behaviors.
 */

// eslint-disable-next-line import/prefer-default-export
function breadcrumbs() {
  console.error('This script needs to be rewritten without jQuery');
}

/**
 * Contextual navigation scripts
 */

// eslint-disable-next-line import/prefer-default-export
function contextualNav() {
  console.error('This script needs to be rewritten without jQuery');
}

/**
 * Datepickers
 */

// eslint-disable-next-line import/prefer-default-export
function datepicker() {
  console.error('This script needs to be rewritten without jQuery');
}

document.querySelectorAll('.file__translations-control').forEach(function (button) {
  return button.addEventListener('click', function (event) {
    event.target.classList.toggle('is-collapsed');
  });
});

/**
 * Exposed filter related behaviors.
 */

// eslint-disable-next-line import/prefer-default-export
function filters() {
  console.error('This script needs to be rewritten without jQuery');
}

/**
 * Helper methods for the inpage navigation component.
 */

// eslint-disable-next-line import/prefer-default-export
function inpageNav() {
  console.error('This script needs to be rewritten without jQuery');
}

/**
 * Timeline
 */

// eslint-disable-next-line import/prefer-default-export
function timeline() {
  console.error('This script needs to be rewritten without jQuery');
}

/**
 * @file
 * Breadcrumb related behaviors.
 */

// eslint-disable-next-line import/prefer-default-export
function profileTopbars() {
  console.error('This script needs to be rewritten without jQuery');
}

/**
 * @file
 * Nav tabs related behaviors.
 */

// eslint-disable-next-line import/prefer-default-export
function navTabs() {
  console.error('This script needs to be rewritten without jQuery');
}

// Export

exports.fileUpload = fileUpload;
exports.breadcrumbs = breadcrumbs;
exports.contextualNav = contextualNav;
exports.datepicker = datepicker;
exports.filters = filters;
exports.inpageNav = inpageNav;
exports.timeline = timeline;
exports.profileTopbars = profileTopbars;
exports.navTabs = navTabs;

}((this.Europa = this.Europa || {})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXVyb3BhLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvQGVjLWV1cm9wYS9ldXJvcGEtY29tcG9uZW50LWxpYnJhcnkvZnJhbWV3b3JrL2NvbXBvbmVudHMvZm9ybXMvZmlsZS11cGxvYWRzL2ZpbGUtdXBsb2Fkcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZWMtZXVyb3BhL2V1cm9wYS1jb21wb25lbnQtbGlicmFyeS9mcmFtZXdvcmsvY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZWMtZXVyb3BhL2V1cm9wYS1jb21wb25lbnQtbGlicmFyeS9mcmFtZXdvcmsvY29tcG9uZW50cy9jb250ZXh0LW5hdnMvY29udGV4dC1uYXZzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BlYy1ldXJvcGEvZXVyb3BhLWNvbXBvbmVudC1saWJyYXJ5L2ZyYW1ld29yay9jb21wb25lbnRzL2RhdGVwaWNrZXJzL2RhdGVwaWNrZXJzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BlYy1ldXJvcGEvZXVyb3BhLWNvbXBvbmVudC1saWJyYXJ5L2ZyYW1ld29yay9jb21wb25lbnRzL2ZpbGVzL2ZpbGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BlYy1ldXJvcGEvZXVyb3BhLWNvbXBvbmVudC1saWJyYXJ5L2ZyYW1ld29yay9jb21wb25lbnRzL2ZpbHRlcnMvZmlsdGVycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZWMtZXVyb3BhL2V1cm9wYS1jb21wb25lbnQtbGlicmFyeS9mcmFtZXdvcmsvY29tcG9uZW50cy9pbnBhZ2UtbmF2cy9pbnBhZ2UtbmF2cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9AZWMtZXVyb3BhL2V1cm9wYS1jb21wb25lbnQtbGlicmFyeS9mcmFtZXdvcmsvY29tcG9uZW50cy90aW1lbGluZXMvdGltZWxpbmVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL0BlYy1ldXJvcGEvZXVyb3BhLWNvbXBvbmVudC1saWJyYXJ5L2ZyYW1ld29yay9jb21wb25lbnRzL3Byb2ZpbGUtdG9wYmFycy9wcm9maWxlLXRvcGJhcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGVjLWV1cm9wYS9ldXJvcGEtY29tcG9uZW50LWxpYnJhcnkvZnJhbWV3b3JrL2NvbXBvbmVudHMvbmF2LXRhYnMvbmF2LXRhYnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvQGVjLWV1cm9wYS9ldXJvcGEtY29tcG9uZW50LWxpYnJhcnkvZnJhbWV3b3JrL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmlsZSB1cGxvYWRzIHJlbGF0ZWQgYmVoYXZpb3JzLlxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gZmlsZVVwbG9hZCgpIHtcbiAgY29uc29sZS5lcnJvcignVGhpcyBzY3JpcHQgbmVlZHMgdG8gYmUgcmV3cml0dGVuIHdpdGhvdXQgalF1ZXJ5Jyk7XG59XG4iLCIvKipcbiAqIEJyZWFkY3J1bWIgcmVsYXRlZCBiZWhhdmlvcnMuXG4gKi9cblxuIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gYnJlYWRjcnVtYnMoKSB7XG4gIGNvbnNvbGUuZXJyb3IoJ1RoaXMgc2NyaXB0IG5lZWRzIHRvIGJlIHJld3JpdHRlbiB3aXRob3V0IGpRdWVyeScpO1xufVxuIiwiLyoqXG4gKiBDb250ZXh0dWFsIG5hdmlnYXRpb24gc2NyaXB0c1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gY29udGV4dHVhbE5hdigpIHtcbiAgY29uc29sZS5lcnJvcignVGhpcyBzY3JpcHQgbmVlZHMgdG8gYmUgcmV3cml0dGVuIHdpdGhvdXQgalF1ZXJ5Jyk7XG59XG4iLCIvKipcbiAqIERhdGVwaWNrZXJzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBkYXRlcGlja2VyKCkge1xuICBjb25zb2xlLmVycm9yKCdUaGlzIHNjcmlwdCBuZWVkcyB0byBiZSByZXdyaXR0ZW4gd2l0aG91dCBqUXVlcnknKTtcbn1cbiIsImRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsZV9fdHJhbnNsYXRpb25zLWNvbnRyb2wnKVxuICAuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWNvbGxhcHNlZCcpO1xuICB9KSk7XG4iLCIvKipcbiAqIEV4cG9zZWQgZmlsdGVyIHJlbGF0ZWQgYmVoYXZpb3JzLlxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVycygpIHtcbiAgY29uc29sZS5lcnJvcignVGhpcyBzY3JpcHQgbmVlZHMgdG8gYmUgcmV3cml0dGVuIHdpdGhvdXQgalF1ZXJ5Jyk7XG59XG4iLCIvKipcbiAqIEhlbHBlciBtZXRob2RzIGZvciB0aGUgaW5wYWdlIG5hdmlnYXRpb24gY29tcG9uZW50LlxuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gaW5wYWdlTmF2KCkge1xuICBjb25zb2xlLmVycm9yKCdUaGlzIHNjcmlwdCBuZWVkcyB0byBiZSByZXdyaXR0ZW4gd2l0aG91dCBqUXVlcnknKTtcbn1cbiIsIi8qKlxuICogVGltZWxpbmVcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVsaW5lKCkge1xuICBjb25zb2xlLmVycm9yKCdUaGlzIHNjcmlwdCBuZWVkcyB0byBiZSByZXdyaXR0ZW4gd2l0aG91dCBqUXVlcnknKTtcbn1cbiIsIi8qKlxuICogQGZpbGVcbiAqIEJyZWFkY3J1bWIgcmVsYXRlZCBiZWhhdmlvcnMuXG4gKi9cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuIGV4cG9ydCBmdW5jdGlvbiBwcm9maWxlVG9wYmFycygpIHtcbiAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgc2NyaXB0IG5lZWRzIHRvIGJlIHJld3JpdHRlbiB3aXRob3V0IGpRdWVyeScpO1xuIH1cbiIsIi8qKlxuICogQGZpbGVcbiAqIE5hdiB0YWJzIHJlbGF0ZWQgYmVoYXZpb3JzLlxuICovXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbiBleHBvcnQgZnVuY3Rpb24gbmF2VGFicygpIHtcbiAgIGNvbnNvbGUuZXJyb3IoJ1RoaXMgc2NyaXB0IG5lZWRzIHRvIGJlIHJld3JpdHRlbiB3aXRob3V0IGpRdWVyeScpO1xuIH1cbiIsIi8vIEV4cG9ydFxuXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybXMvZmlsZS11cGxvYWRzL2ZpbGUtdXBsb2Fkcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2NvbnRleHQtbmF2cy9jb250ZXh0LW5hdnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2RhdGVwaWNrZXJzL2RhdGVwaWNrZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9maWxlcy9maWxlcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvZmlsdGVycy9maWx0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9pbnBhZ2UtbmF2cy9pbnBhZ2UtbmF2cyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvdGltZWxpbmVzL3RpbWVsaW5lcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcHJvZmlsZS10b3BiYXJzL3Byb2ZpbGUtdG9wYmFycyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbmF2LXRhYnMvbmF2LXRhYnMnO1xuIl0sIm5hbWVzIjpbImZpbGVVcGxvYWQiLCJlcnJvciIsImJyZWFkY3J1bWJzIiwiY29udGV4dHVhbE5hdiIsImRhdGVwaWNrZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZmlsdGVycyIsImlucGFnZU5hdiIsInRpbWVsaW5lIiwicHJvZmlsZVRvcGJhcnMiLCJuYXZUYWJzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7QUFLQSxBQUFPLFNBQVNBLFVBQVQsR0FBc0I7VUFDbkJDLEtBQVIsQ0FBYyxrREFBZDs7O0FDTkY7Ozs7O0FBS0EsQUFBTyxTQUFTQyxXQUFULEdBQXVCO1VBQ3BCRCxLQUFSLENBQWMsa0RBQWQ7OztBQ05GOzs7OztBQUtBLEFBQU8sU0FBU0UsYUFBVCxHQUF5QjtVQUN0QkYsS0FBUixDQUFjLGtEQUFkOzs7QUNORjs7Ozs7QUFLQSxBQUFPLFNBQVNHLFVBQVQsR0FBc0I7VUFDbkJILEtBQVIsQ0FBYyxrREFBZDs7O0FDTkZJLFNBQ0dDLGdCQURILENBQ29CLDZCQURwQixFQUVHQyxPQUZILENBRVc7U0FBVUMsT0FBT0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsS0FBRCxFQUFXO1VBQ3ZEQyxNQUFOLENBQWFDLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLGNBQTlCO0dBRGlCLENBQVY7Q0FGWDs7QUNBQTs7Ozs7QUFLQSxBQUFPLFNBQVNDLE9BQVQsR0FBbUI7VUFDaEJiLEtBQVIsQ0FBYyxrREFBZDs7O0FDTkY7Ozs7O0FBS0EsQUFBTyxTQUFTYyxTQUFULEdBQXFCO1VBQ2xCZCxLQUFSLENBQWMsa0RBQWQ7OztBQ05GOzs7OztBQUtBLEFBQU8sU0FBU2UsUUFBVCxHQUFvQjtVQUNqQmYsS0FBUixDQUFjLGtEQUFkOzs7QUNORjs7Ozs7O0FBTUMsQUFBTyxTQUFTZ0IsY0FBVCxHQUEwQjtVQUN2QmhCLEtBQVIsQ0FBYyxrREFBZDs7O0FDUEg7Ozs7OztBQU1DLEFBQU8sU0FBU2lCLE9BQVQsR0FBbUI7VUFDaEJqQixLQUFSLENBQWMsa0RBQWQ7OztBQ1BILFNBRUEsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7Ozs7OzsifQ==