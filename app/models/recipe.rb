class Recipe < ActiveRecord::Base
  # mount_uploader :image, ImageUploader
  belongs_to :user
  has_many :materials
  has_many :cookingMethods
end
