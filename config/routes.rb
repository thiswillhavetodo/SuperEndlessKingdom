Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'user_sessions#new'
  resources :users#, :path => ''

  #scope '/' do
  #	match ':id', to: 'users#show', via: :get
  #end

  resources :user_sessions, only: [ :new, :create, :destroy ]

  get 'login'  => 'user_sessions#new'
  get 'logout' => 'user_sessions#destroy'
end
