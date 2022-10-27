class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:create, :index]

    
    # potential future problem here
    def index
        render json: User.all 
    end

    def show
        render json: @currentUser, status: :ok
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
