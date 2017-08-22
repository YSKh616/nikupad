Rails.application.routes.draw do
  devise_for :users
  root 'recipes#index'
  resources :recipes, only: [:index, :create] do
    member do
      get 'avatar_for'
    end
  end
  resources :users, only: [:edit]
  get 'users/:id/change_user_name' => 'users#change_user_name'
  patch 'users/:id/change_user_name' => 'users#update_user_name'
  get 'recipes/:id' => 'recipes#edit'
  patch 'recipes/:id' => 'recipes#update'
  # resources :materials, only: [:new, :create]
  post 'recipes/:id' => 'recipes#material_create'
  post 'recipes/:id/method' => 'recipes#method_create'
  patch 'recipes/:id/method' => 'recipes#method_update'
end
