class EventsController < ApplicationController
    
    def index
       render json: Event.all
    end
    
    def show
        event = find_params 
        render json: event, serializer: ListsInEventsSerializer
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update
        event = find_params 
        event.update(event_params)
        render json: event
    end

    def destroy
        event = find_params
        event.destroy
        head :no_content
    end

    private 

    def find_params
        Event.find(params[:id])
    end

    def event_params
                                        #these were month/day
        params.permit(:event_type, :name, :time, :start, :end)
    end

end
