Rails.application.routes.draw do

  scope constraints: { format: 'json' }, defaults: { format: 'json' } do
    resources :users
    resource :session, only: [:create, :show, :destroy]
  end

  get '*path' => 'app#show'
  root to: 'app#show'
end
