class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response


    def render_not_found_response invalid
        render json: { error: "#{invalid.model} not found"}, status: :not_found
    end

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end
