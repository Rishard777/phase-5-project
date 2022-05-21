class WorkoutPlanSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :user
  has_one :workout
end
