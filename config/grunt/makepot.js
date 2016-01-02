// https://github.com/cedaro/grunt-wp-i18n
module.exports = {
  theme: {
    options: {
      domainPath: '<%= paths.languages %>',
      exclude: [
        '<%= paths.composer %>.*'
      ],
      potHeaders: {
        poedit: true,
        'report-msgid-bugs-to': '<%= pkg.pot.reportmsgidbugsto %>',
        'last-translator': '<%= pkg.pot.lasttranslator %>',
        'language-team': '<%= pkg.pot.languageteam %>'
      },
      type: 'wp-theme'
    }
  }
};