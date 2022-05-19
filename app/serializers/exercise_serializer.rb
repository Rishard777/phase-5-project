class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :instructions
end
