class ApplicationController < ActionController::API

    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response



    before_action :authorized_user


    # checking to see if current user exists 
    def current_user
        user = User.find_by(id: session[:user_id])
        user
    end


    # renders custom error if user does not exist
    def authorized_user
        render json: {error: "Not Authorized"}, status: 
        :unathorized unless current_user
    end


    private 

    def render_not_found_response invalid
        render json: { error: "#{invalid.model} not found"}, status: :not_found
    end

end
