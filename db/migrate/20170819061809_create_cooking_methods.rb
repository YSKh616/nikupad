class CreateCookingMethods < ActiveRecord::Migration
  def change
    create_table :cooking_methods do |t|
      t.text        :body
      t.binary      :image
      t.integer     :number
      t.references :recipe, foreign_key: true
      t.timestamps
    end
  end
end
