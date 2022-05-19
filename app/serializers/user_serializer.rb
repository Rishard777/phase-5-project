class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :username, :password_digest
end
