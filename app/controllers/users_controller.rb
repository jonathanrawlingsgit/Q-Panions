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
        user = User.create(user_params)
        if user.valid?
            #respond with our new user
            render json: user
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    # Handle strong parameters
    def user_params
        params.require(:cat).permit(:name, :age, :about, :platform, :image)
    end
end