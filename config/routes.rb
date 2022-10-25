Rails.application.routes.draw do
  resources :lists
  resources :events
  resources :users


  # authentication 
  post "/login", to: "seesions#create"

  get "/authorized_user", to: "users#show"

  delete "/logout", to: "sessions#delete"


  #full CRUD lists
  #full CRUD users no index

end
