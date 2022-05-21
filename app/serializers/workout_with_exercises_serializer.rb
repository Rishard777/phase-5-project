class WorkoutWithExercisesSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty
  has_many :exercises, through: :workout_exercises
end
