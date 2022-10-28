class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest
  has_many :events
  has_many :lists
end
