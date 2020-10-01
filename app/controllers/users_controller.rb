class UsersController < ApplicationController
    def index 
        users = User.all 
        render json: users
end

    def show 
        id = params[:id]
        user = User.find_by_id "#{id}"
        render json: user
    end

    def create
        #creates new user
        # require "pry"
        # binding.pry
        user =  User.create!(email: params['user']['email'],password: params['user']['password_confirmation'])
        if user 
            session[:user_id] = user.id
            render json: {
                status: :created,
                user: user
            }
        else
            render json: { status: 500 }
        end
    end

    # Handle strong parameters
    def user_params
        p params
        params.require(:user).permit(:name, :age, :about, :platform, :image)
    end
end