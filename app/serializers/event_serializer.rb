class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_type, :name, :time, :start, :end
  has_many :lists
end
