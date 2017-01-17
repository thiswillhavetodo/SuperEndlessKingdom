class UserSessionsController < ApplicationController
	
	layout 'login'
	
	def new

	end

	def create
		if login(params[:email], params[:password])
			@user = User.find_by_email(params[:email])
			redirect_back_or_to(user_path(@user), notice: 'Logged in.')
		else
			flash.now.alert = "Login failed."
      		render action: :new
    	end
	end

	def destroy
		logout
	    redirect_to(root_path, notice: 'Logged out!')
	end
end
