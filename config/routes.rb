Rails.application.routes.draw do
  resources :lists
  resources :events
  resources :users

  #full CRUD lists
  #full CRUD users no index

end
