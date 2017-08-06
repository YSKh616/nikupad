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
    @recipe.save
    # - binding.pry
    redirect_to action: :edit, id: @recipe.id
  end

  def edit
    @user = current_user
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

  private

  def recipe_params
    # params.require(:recipe).permit(:id, :title, :catch_copy, :image, :point, :background)
    params.require(:recipe).permit(:title, :catch_copy)
  end

end
