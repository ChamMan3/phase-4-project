class ListsInEventsSerializer < ActiveModel::Serializer
  attributes :id, :name, :event_type, :time, :day, :month
  has_many :lists
end
