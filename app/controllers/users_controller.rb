class UsersController < ApplicationController

    def show
        user = find_params
        render json: user
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def update
        user = find_params 
        user.update(user_params)
        render json: user
    end

    def destroy
        user = find_params
        user.destroy
        head :no_content
    end

    private 
    
    def find_params
        User.find(params[:id])
    end

    def user_params
        params.permit(:name, :email, :password)
    end

end
