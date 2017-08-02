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


  private
  def user_params
    params.require(:user).permit(:name)
  end
end
