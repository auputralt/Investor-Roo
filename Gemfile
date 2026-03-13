source "https://rubygems.org"

# For local development with Ruby 2.6+
# GitHub Pages will use its own build environment
gem "jekyll", "~> 3.9"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-seo-tag", "~> 2.7"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
platforms :mingw, :x64_mingw, :mswin do
  gem "wdm", "~> 0.1.0"
end

# Lock ffi to compatible version for Ruby 2.6
gem "ffi", "< 1.16.0"
