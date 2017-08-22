class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string      :title
      t.text        :catch_copy
      t.binary      :image
      t.text        :point
      t.text        :background
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
