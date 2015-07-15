Rails.application.routes.draw do

  get '*path' => 'app#show'
  root to: 'app#show'
end
