require 'active_support'
require 'action_view'
require 'action_controller'
require 'ostruct'

ActionView::Helpers::InstanceTag.class_eval do
  class << self; alias new_with_backwards_compatibility new; end
end

$: << (File.dirname(__FILE__) + "/../lib")
require "calendar_date_select"

class String
  def to_regexp
    is_a?(Regexp) ? self : Regexp.new(Regexp.escape(self.to_s))
  end
end
