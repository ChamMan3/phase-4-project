class ListSerializer < ActiveModel::Serializer
  attributes :id, :details, :user_id, :event_id
  has_one :event
  has_one :user
end
