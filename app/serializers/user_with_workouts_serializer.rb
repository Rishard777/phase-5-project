class UserWithWorkoutsSerializer < ActiveModel::Serializer
  attributes :id, :username
   has_many :workouts
   has_many :workout_plans
end
