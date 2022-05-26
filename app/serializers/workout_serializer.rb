class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :difficulty, :image
end
