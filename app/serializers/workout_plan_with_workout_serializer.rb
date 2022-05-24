class WorkoutPlanWithWorkoutSerializer < ActiveModel::Serializer
  attributes :id, :date
  belongs_to :workout
end
