class Recipe < ActiveRecord::Base
  belongs_to :user
  has_many :materials
end