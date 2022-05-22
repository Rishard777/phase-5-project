Rails.application.routes.draw do
  
  resources :workout_plans
  resources :workout_exercises
  resources :exercises
  resources :workouts
  resources :users, only: [:index, :show, :create]

  post "/login", to: "sessions#create"
  post "signup", to: "users#create"
  post "/workout_exercises", to: "workout_exercises#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  get "/workouts", to: "workouts#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
