## 2.4.0

- add version task for php constant in functions.php.
- deps: update to autoprefixer@6.3.x.
- deps: update to grunt-contrib-jshint@0.12.x.

## 2.3.5

- swap pkg for package as load-grunt-config and in turn load-project-config already read the package file upfront.

## 2.3.4

- different workaround for double version bump with release aliases.

## 2.3.3

- workaround for double version bump with release aliases.

## 2.3.2

- limit pxtorem to font sizes for now.

## 2.3.1

- add fallback for rem font-size as it doesn't hurt and since its 2016 target IE9+.

## 2.3.0

- add release tasks that utilize grunt-version.
- simplify and bring naming uniformity to several css related tasks.
- drop grunt-wp-css as have never really used it and its one more post-processor to run.
- fix readpkg mapping.
- deps: add postcss-pxtorem@3.3.x.

## 2.2.0

- use textdomain property from root of package.json.
- use default options for cssmin.
- deps: add grunt-version@1.0.x.
- deps: update to time-grunt@1.3.x.
- deps: update to autoprefixer@6.2.x.
- deps: drop checktextdomain.

## 2.1.0

- drop grunt-webfont.

## 2.0.11

- deps: downgrade to grunt-webfont@0.5.x.

## 2.0.10

- deps: update to grunt-webfont@1.0.1.

## 2.0.9

- deps: downgrade to grunt-webfont@0.5.x.

## 2.0.8

- deps: update to grunt-contrib-uglify@0.11.x.
- deps: update to grunt-webfont@1.1.x.

## 2.0.7

- config(uglify): preserve elevated comments.
- config(uglify): stop generating sourcemaps.
- config(usebanner): remove extraneous spacing.

## 2.0.6

- deps: update to autoprefixer@6.1.x.
- deps: update to grunt-contrib-clean@0.7.x.
- deps: update to grunt-contrib-imagemin@1.0.x.
- config: run build:css:watch on scss change to allow for better configuration.

## 2.0.5

- config: don't embed fonts in stylesheet.

## 2.0.4

- deps: updated to grunt-contrib-compress@0.14.x.
- deps: updated to grunt-contrib-uglify@0.10.x.
- deps: updated to grunt-sass@1.1.x.
- deps: updated to grunt-webfont@1.0.x.
- config: update autoprefixer to include Microsoft Edge Browser.

## 2.0.3

- deps: updated to grunt-postcss@0.7.x.

## 2.0.2

- Added support for template and template version in theme header.

## 2.0.1

- Updated package.json

## 2.0.0

- Forked from WP Site Care
- Changed code style and new lines

## 1.0.0

- Changed peerDependencies to standard dependencies. This breaks compatibility with npm2 and older
- Bumped autoprefixer to the latest version

## 0.2.2

- Bumped to latest version of all PeerDependencies
- Relaxed versions for all PeerDependencies
- (bugfix) Removed an undefined path to Hybrid Core leftover from previous versions

## 0.2.1

- Watched PHP files by default; mainly for LiveReload
- Replaced grunt-composer with a grunt-shell command
- Bumped to latest version of all PeerDependencies

## 0.2.0

- Removed unused dependencies
- Replaced grunt-cssjanus with grunt-rtlcss
- Replaced grunt-autoprefixer with postcss
- Replaced bower install task with grunt-shell
- Various code and performance improvements

## 0.1.1

- Bumped to latest version of all PeerDependencies
- Excluded Composer from the makepot task

## 0.1.0

First public release.
