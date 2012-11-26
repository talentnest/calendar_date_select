# -*- encoding: utf-8 -*-
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'calendar_date_select/version'

Gem::Specification.new do |gem|
  gem.name              = "calendar_date_select"
  gem.version           = CalendarDateSelect::Rails::VERSION
  gem.authors           = ["Shih-gian Lee", "Enrique Garcia Cota (kikito)", "Tim Charper", "Lars E. Hoeg", "Daniel Vandersluis"]
  gem.email             = []
  gem.description       = "Calendar date picker for rails"
  gem.summary           = "Calendar date picker for rails"
  gem.homepage          = "https://github.com/talentnest/calendar_date_select"

  gem.rdoc_options      = ["--charset=UTF-8"]
  gem.rubygems_version  = %q{1.3.6}
  gem.files             = `git ls-files`.split($/)
  gem.executables       = gem.files.grep(%r{^bin/}).map{ |f| File.basename(f) }
  gem.test_files        = gem.files.grep(%r{^(test|spec|features)/})
  gem.require_paths     = ["lib"]

  gem.add_dependency "activesupport", "> 3.0.0"
  gem.add_dependency "actionpack", "> 3.0.0"
  gem.add_dependency "railties", "> 3.0.0"

  gem.add_development_dependency "rspec"
end