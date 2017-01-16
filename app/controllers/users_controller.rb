class UsersController < ApplicationController
	include UsersHelper

	before_filter :zero_users_or_admin, only: [:new, :create]
	
	layout 'login'
	layout 'application', :only => :show 

	def zero_users_or_admin
	  unless User.count == 0 || session[:user_id].to_i == 1
	  	flash[:notice] = "You don't have access to that option!"
	    redirect_to root_path
	    return false
	  end
	end

	def index
		@users = User.all
	end

	def show
		@user = User.find(params[:id])
		
		unless session[:user_id].to_i == @user.id.to_i
     	 flash[:notice] = "You don't have access to that user!"
     	 redirect_to root_path
    	 return
    	end
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		@user.save
		flash[:notice] = "User created."
		redirect_to user_path(@user)
	end

	def edit
		@user = User.find(params[:id])
		unless session[:user_id].to_i == @user.id.to_i
     	 flash[:notice] = "You don't have access to that user!"
     	 redirect_to root_path
    	 return
    	end
	end

	def update
		@user = User.find(params[:id])
		unless session[:user_id].to_i == @user.id.to_i
     	 flash[:notice] = "You don't have access to that user!"
     	 redirect_to root_path
    	 return
    	end
  		@user.update(user_params)

  		redirect_to user_path(@user)
  	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
		flash[:notice] = "User deleted."
		redirect_to users_path
	end

end
