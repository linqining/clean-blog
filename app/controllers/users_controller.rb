class UsersController < ApplicationController
  skip_before_action :authenticate, only:[:new,:create]
  def new
    @user=User.new
  end

  def create
    @user=User.new(user_params)
    if @user.save
      sign_in @user
      redirect_to root_path
    else
      render 'new'
    end
  end

  private
  def user_params
  prarams.require(:user).permit(:email,:nickname,:password,:password_confirmation)
  end

end
