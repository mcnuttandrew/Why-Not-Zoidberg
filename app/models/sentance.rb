class Sentance < ActiveRecord::Base
  validates :content, presence: true
end
