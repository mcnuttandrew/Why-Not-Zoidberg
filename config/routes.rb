Rails.application.routes.draw do
  # root :to => "site#root"
  
  namespace :api, :defaults => {:format => 'json'} do
    resources :sentances, only: [:index, :show]
  end
  
  root to: "root#index"
end
