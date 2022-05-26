class WorkoutPlanWithWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :workout
end
