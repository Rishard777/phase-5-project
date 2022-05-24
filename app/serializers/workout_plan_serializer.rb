class WorkoutPlanSerializer < ActiveModel::Serializer
  attributes :id, :date, :workout_id
  has_one :user
  has_one :workout
end
