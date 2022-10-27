Rails.application.routes.draw do
  resources :lists, only: [:index, :show, :update, :create, :destroy]
  resources :events, only: [:index, :show, :update, :create, :destroy]
  resources :users, only: [:index, :show, :update, :create, :destroy]


  # authentication 
  post "/login", to: "sessions#create"

  get "/authorized_user", to: "users#show"

  delete "/logout", to: "sessions#delete"


end
