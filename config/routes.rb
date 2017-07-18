Rails.application.routes.draw do
  resources :recipe, only: [:index]
end
