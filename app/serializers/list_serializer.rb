class ListSerializer < ActiveModel::Serializer
  attributes :id, :details
  has_one :event
  has_one :user
end
