class UserWithWorkoutsSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :workouts
end
