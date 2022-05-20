class User < ApplicationRecord
    has_secure_password

    has_many :workout_plans
    has_many :workouts, through: :workout_plans
    has_many :exercises, through: :workouts
    
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :email, presence: true, uniqueness: true
end
