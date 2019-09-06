class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # redirect_to ???
      render :show 
    else 
      flash[:errors] = @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    # redirect_to ???
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
