class RecipesController < ApplicationController
  def index
    @user = current_user
  end

  # def new
  #   @user = current_user
  #   # - binding.pry
  #   @recipe = Recipe.find(38)
  #   # @recipe = Recipe.find(params[:id])
  # end

  def create
    @recipe = Recipe.new()
    @user = current_user
    @recipe.user_id = @user.id
    @recipe.save
    # - binding.pry
    redirect_to action: :edit, id: @recipe.id
  end

  def edit
    @user = current_user
    @material = Material.new
    # @material = (1..3).map do
    #   Material.new
    # end
    # @material = []
    # @recipe = Recipe.find(42)
    @recipe = Recipe.find(params[:id])
  end

  def update
    @recipe = Recipe.find(params[:id])
    # par = recipe_params
    # binding.pry
    if (params[:title].present?) then
      @recipe.update(title: params[:title])
    elsif (params[:catch_copy].present?) then
      @recipe.update(catch_copy: params[:catch_copy])
    elsif (params[:point].present?) then
      @recipe.update(point: params[:point])
    elsif (params[:background].present?) then
      @recipe.update(background: params[:background])
    end
    respond_to do |format|
      format.html { redirect_to action: :edit, id: @recipe.id }
      format.json
    end
  end

  def material_create
    # @material = Material.new
    # binding.pry
    @recipe = Recipe.find(params[:id])
    # binding.pry
    @materials = params.require(:material)
    # binding.pry
    @recipe.update(people: @materials["0"]["0"][:value])
    @name = @materials["1"]
    @quantity = @materials["2"]
    records = []
    lines = []
    # binding.pry
    for i in 0..(@materials["1"].length - 1) do
      material ={}
      material[:name] = @materials["1"]["#{i}"][:value]
      material[:quantity] = @materials["2"]["#{i}"][:value]
      lines << material
      # binding.pry
    end
    lines.each do |line|
      records << Material.new(name: line[:name], quantity: line[:quantity], recipe_id: @recipe.id)
      # binding.pry
    end
    Material.where(recipe_id: @recipe.id).delete_all
    Material.import records
    respond_to do |format|
      format.html { redirect_to action: :edit, id: @recipe.id }
      format.json
    end
  end

  private

  def recipe_params
    # params.require(:recipe).permit(:id, :title, :catch_copy, :image, :point, :background)
    params.require(:recipe).permit(:title, :catch_copy)
  end

end
