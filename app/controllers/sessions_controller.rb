class SessionsController < ApplicationController
#  protect_from_forgery with: :exception

  skip_before_action :authenticate, only:[:new,:create]
  skip_before_action :verify_authenticity_token, only: [:new,:create]

  def new
    @user=User.new
  end

  def create
    @user=User.where(email: params[:user][:email]).first
    if @user && @user.authenticate(params[:user][:password])
      sign_in @user
      redirect_to root_path
    else
      redirect_to sign_in_path
    end
  end

  def destroy
    sign_out
    redirect_to root_path
  end

end
