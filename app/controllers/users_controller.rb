class UsersController < ApplicationController

    
    # potential future problem here
    skip_before_action :authorized_user, only: [:create]


    def show
        # user = find_params
        render json: current_user, status: :ok
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
        params.permit(:name, :email, :password, :password_confirmation)
    end

end
