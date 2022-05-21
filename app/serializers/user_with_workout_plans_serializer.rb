class UserWithWorkoutPlansSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :workout_plans
end
