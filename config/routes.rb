Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    # 5 should be resources :users
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy] 
    resources :bookshelf, only: [:index, :show, :create, :destroy]
    resources :shelving, only: [:index, :show, :create, :destroy] 
    resources :books, only: [:index, :show, :create, :destroy]
    resources :reviews, only: [:index, :show, :update, :create, :destroy]
    
  end
  root "static_pages#root"
  
end
