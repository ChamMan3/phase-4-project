class ApplicationController < ActionController::API

    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorized_user


    # # how did this not talk to the authorized_user?
    # def current_user
    #     user = User.find_by(id: session[:user_id])
    #     user
    # end

    private 

    # renders custom error if user does not exist
    def authorized_user
        @current_user = User.find_by(id: session[:user_id])
        render json: {error: "Not Authorized"}, status: :unauthorized unless @current_user
    end

    def render_not_found_response invalid
        render json: { error: "#{invalid.model} not found"}, status: :not_found
    end

end
