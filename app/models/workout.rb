class Workout < ApplicationRecord
    has_many :workout_plans
    has_many :users, through: :workout_plans
   
    has_many :workout_exercises, dependent: :destroy
    has_many :exercises, through: :workout_exercises
    
    
end
