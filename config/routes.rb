Rails.application.routes.draw do
  resources :sentances, only: [:index, :show]#, :defaults => {:format => 'json'}
end
