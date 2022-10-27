class ListsInEventsSerializer < ActiveModel::Serializer
  attributes :id, :name, :event_type, :time, :start, :end
  has_many :lists
end
