class AddPeopleToRecipes < ActiveRecord::Migration
  def change
    add_column :recipes, :people, :string
  end
end
