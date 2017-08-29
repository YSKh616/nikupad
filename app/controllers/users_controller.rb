require 'tempfile'
require 'RMagick'
class UsersController < ApplicationController
  def edit
    @user = current_user
  end

  def update
  end

  def change_user_name
    @user = current_user
  end

  def update_user_name
    user = current_user
    if user.update(user_params)
      redirect_to edit_user_path(1)
    else
    end
  end

  def show
    @user = current_user
    @recipes = Recipe.where(user_id: @user.id)
    # binding.pry
  end

  def avatar_for_user
    # binding.pry
    @recipe = Recipe.where(id: params[:recipe_id])
    send_data(@recipe[0].image, :type => 'image/jpeg', :disposition => 'inline')
  end

  private
  def user_params
    params.require(:user).permit(:name)
  end
end
