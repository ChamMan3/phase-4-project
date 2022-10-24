class EventSerializer < ActiveModel::Serializer
  attributes :id, :type, :name, :time
end
