require 'tempfile'
require 'RMagick'
require 'date'
class RecipesController < ApplicationController
  def index
    @user = current_user
    @recipe = Recipe.last
    @date = Date.today
  end

  def create
    @recipe = Recipe.new()
    @user = current_user
    @recipe.user_id = @user.id
    @recipe.save
    method_create(4, @recipe.id)
    redirect_to action: :edit, id: @recipe.id
  end

  def edit
    @user = current_user
    @material = Material.new
    @recipe = Recipe.find(params[:id])
    @methods = CookingMethod.where(recipe_id: @recipe.id)
  end

  def update
    @recipe = Recipe.find(params[:id])
    if (params[:title].present?) then
      @recipe.update(title: params[:title])
    elsif (params[:catch_copy].present?) then
      @recipe.update(catch_copy: params[:catch_copy])
    elsif (params[:point].present?) then
      @recipe.update(point: params[:point])
    elsif (params[:background].present?) then
      @recipe.update(background: params[:background])
    elsif (params[:recipe][:image].present?) then
      image = Magick::ImageList.new(params[:recipe][:image].path)
      @recipe.update(image: image.to_blob)
    end
    respond_to do |format|
      format.html { redirect_to action: :edit, id: @recipe.id }
      format.json
    end
  end

  def material_create
    @recipe = Recipe.find(params[:id])
    @materials = params.require(:material)
    @recipe.update(people: @materials["0"]["0"][:value])
    @name = @materials["1"]
    @quantity = @materials["2"]
    records = []
    lines = []
    for i in 0..(@materials["1"].length - 1) do
      material ={}
      material[:name] = @materials["1"]["#{i}"][:value]
      material[:quantity] = @materials["2"]["#{i}"][:value]
      lines << material
    end
    lines.each do |line|
      records << Material.new(name: line[:name], quantity: line[:quantity], recipe_id: @recipe.id)
    end
    Material.where(recipe_id: @recipe.id).delete_all
    Material.import records
    respond_to do |format|
      format.html { redirect_to action: :edit, id: @recipe.id }
      format.json
    end
  end

  def method_create(num, recipe_id)
    methods = []
    i = 1
    num.times do
      methods << CookingMethod.new(recipe_id: recipe_id, number: i)
      i = i + 1
    end
    CookingMethod.import methods
  end

  def method_update
    @recipe = Recipe.find(params[:id])
    @method = CookingMethod.where("(recipe_id = ?) AND (number = ?)", @recipe.id, params[:num])
    if (params[:body].present?) then
      @method[0].update(body: params[:body])
    else
      if (params[:recipe][:cooking_method][:image_1].present?) then
        image = Magick::ImageList.new(params[:recipe][:cooking_method][:image_1].path)
        @method[0].update(image: image.to_blob)
      elsif (params[:recipe][:cooking_method][:image_2].present?) then
        image = Magick::ImageList.new(params[:recipe][:cooking_method][:image_2].path)
        @method[0].update(image: image.to_blob)
      elsif (params[:recipe][:cooking_method][:image_3].present?) then
        image = Magick::ImageList.new(params[:recipe][:cooking_method][:image_3].path)
        @method[0].update(image: image.to_blob)
      elsif (params[:recipe][:cooking_method][:image_4].present?) then
        image = Magick::ImageList.new(params[:recipe][:cooking_method][:image_4].path)
        @method[0].update(image: image.to_blob)
      end
    end
    respond_to do |format|
      format.html { redirect_to action: :edit, id: @recipe.id }
      format.json
    end
  end

  def avatar_for
    @recipe = Recipe.find(params[:id])
    send_data(@recipe.image, :type => 'image/jpeg', :disposition => 'inline')
  end

  def avatar_for_user
    @recipe = Recipe.where(id: params[:recipe_id])
    send_data(@recipe.image, :type => 'image/jpeg', :disposition => 'inline')
  end

  def avatar_method_for
    @method = CookingMethod.find(params[:num])
    send_data(@method.image, :type => 'image/jpeg', :disposition => 'inline')
  end

  def show
    @recipe = Recipe.find(params[:id])
    @user = current_user
    @material = Material.new
    @methods = CookingMethod.where(recipe_id: @recipe.id)
  end

  private

  def recipe_params
    # params.require(:recipe).permit(:id, :title, :catch_copy, :image, :point, :background)
    params.require(:recipe).permit(:title, :catch_copy, :iamge)
  end

end
