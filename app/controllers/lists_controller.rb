class ListsController < ApplicationController

    def index
        render json: List.all
    end

    def show
        list = find_params
        render json: list
    end
     
    def create
        list = List.create!(list_params)
        render json: list, status: :created
    end

    def update
        list = find_params 
        list.update(list_params)
        render json: list
    end

    def destroy
        list = find_params
        list.destroy
        head :no_content
    end

    private 
    
    def find_params
        List.find(params[:id])
    end

    def list_params
        params.permit(:details, :event_id, :user_id)
    end
end
